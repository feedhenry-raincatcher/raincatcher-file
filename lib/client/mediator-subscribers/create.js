var _ = require('lodash');
var Q = require('q');


/**
 * Initialising a subscriber for creating a file.
 *
 * @param {object} fileEntityTopics
 * @param fileClient
 */
module.exports = function createFileSubscriber(fileEntityTopics, fileClient) {
  
  /**
   * Handling the creation of a file
   *
   * @param {object} parameters
   * @param {object} parameters.fileToCreate   - The file item to create
   * @param {string/number} parameters.topicUid     - (Optional)  A unique ID to be used to publish completion / error topics.
   * @returns {*}
   */
  return function handleCreateFileTopic(parameters) {
    parameters = parameters || {};
    var fileToCreate = parameters.fileToCreate;
    
    //If no file is passed, can't create one
    if (!_.isPlainObject(fileToCreate)) {
      return Q.reject(new Error("Invalid Data To Create A File."));
    }
  
    return fileClient.scheduleFileToBeUploaded(fileToCreate);
  };
};