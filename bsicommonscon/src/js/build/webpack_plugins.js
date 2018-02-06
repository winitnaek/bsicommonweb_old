const _ = require('lodash');
const path = require('path');
const fileUrl = require('file-url');
const fs = require('fs');
const glob = require('glob');
const Ajv = require('Ajv');

const commonSchema = require('../../../def/common-schema.json');
const ajv = new Ajv({
    allErrors: true,
    verbose: true
});

const manifestFile = 'manifest.json';
const mergedManifestFilePath = path.resolve(__dirname, '../../../dist/mergedManifest.json');
const mergedManifestOutput = [];

class ConfigurationHandlerPlugin {
    // Default options
    constructor(options) {
        this.options = _.extend({
            filename: manifestFile,
            minify: false,
            showErrors: true,
            title: 'Configuration Json Validator'
        }, options);
    }

    apply(compiler) {
        compiler.plugin('run', function () {
            console.log('##############################################');
            console.log('ConfigurationJsonValidatorPlugin running...');
            console.log('##############################################');

            /**
             * Wrapper function that performs the following steps:
             * 
             * 1.) Searches for application manifests.
             * 2.) Validates each manifest.json against common schema (i.e. def/common-schema.json).
             * 3.) Attempts to merge individual manifests into a common one.
             */
            function mergeManifests() {
                console.log('merging manifests...');

                glob(path.resolve(__dirname, '../../../apps/**/manifest.json'), (error, files) => {
                    if (error) {
                        throw new Error('Error encountered while merging manifests!' + error.message + ' ' + error.stack);
                    }

                    files.forEach((filename) => {
                        console.log('File -->', filename);

                        // Validate manifest against common JSON schema!
                        if (!ajv.validate(commonSchema, require(filename))) {
                            throw new Error(filename + ' not valid! ' + ajv.errorsText());
                        }

                        console.log(filename + ' is validated successfully against master schema!');
                        const mnfstContents = JSON.parse(fs.readFileSync(filename, 'utf8'));
                        // Ensure that resources reflect correct path!
                        mnfstContents.appBundleUrl = fileUrl(path.resolve(filename, '..', mnfstContents.appBundleName));
                        console.log('App Bundle URL', mnfstContents.appBundleUrl);

                        mnfstContents.appAreas.forEach((a) => {
                            a.iconUrl = fileUrl(path.resolve(filename, '..', a.icon));
                            console.log('Icon URL', a.iconUrl);
                        });

                        mergedManifestOutput.push(mnfstContents);
                    });

                    console.log('Merged manifest output -->', mergedManifestOutput);
                    fs.writeFileSync(mergedManifestFilePath, JSON.stringify(mergedManifestOutput));

                    console.log('merging manifests done!!!');
                    console.log('##############################################');
                    console.log('ConfigurationJsonValidatorPlugin ran!');
                    console.log('##############################################');
                });
            }

            mergeManifests();
        });
    }
}

module.exports = ConfigurationHandlerPlugin;