const AWS = require('aws-sdk');
const awsS3Client = new AWS.S3({
  accessKeyId: sails.config.app.aws.accessKeyId,
  secretAccessKey: sails.config.app.aws.secretAccessKey,
  signatureVersion: 'v4',
  region: 'eu-west-2'
});

var s3 = require('s3');
var client = s3.createClient({
  // maxAsyncS3: 20,     // this is the default
  // s3RetryCount: 3,    // this is the default
  // s3RetryDelay: 1000, // this is the default
  // multipartUploadThreshold: 20971520, // this is the default (20 MB)
  // multipartUploadSize: 15728640, // this is the default (15 MB)
  s3Client: awsS3Client,
  // s3Options: {
  //   accessKeyId: sails.config.app.aws.accessKeyId,
  //   secretAccessKey: sails.config.app.aws.secretAccessKey,
  //   signatureVersion: 'v4',
  //   region: 'eu-west-2',
  //   // any other options are passed to new AWS.S3()
  //   // See: http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/Config.html#constructor-property
  // },
});

module.exports = {

  syncDir: function (localDir, prefix) {
    return new Promise(function (resolve, reject) {
      var params = {
        localDir: localDir,
        deleteRemoved: true, // default false, whether to remove s3 objects
                             // that have no corresponding local file.

        s3Params: {
          Bucket: sails.config.app.aws.bucketImageName,
          Prefix: prefix,
          // other options supported by putObject, except Body and ContentLength.
          // See: http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html#putObject-property
        },
      };
      var uploader = client.uploadDir(params);
      uploader.on('error', function (err) {
        console.error("unable to sync:", err.stack);
        reject();
      });
      uploader.on('progress', function () {
        console.log("progress", uploader.progressAmount, uploader.progressTotal);
      });
      uploader.on('end', function () {
        console.log("done uploading", uploader);
        resolve();
      });
    });
  }

};
