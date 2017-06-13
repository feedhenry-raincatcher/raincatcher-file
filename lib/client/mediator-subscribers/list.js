
/**
 * Initialising a subscriber for listing files.
 *
 * @param {object} fileEntityTopics
 * @param fileClient
 */
module.exports = function listFileSubscriber(fileEntityTopics, fileClient) {

  /**
   *
   * Handling the listing of files
   *
   * @param {object} parameters
   * @param {string/number} parameters.topicUid  - (Optional)  A unique ID to be used to publish completion / error topics.
   * @returns {*}
   */
  return function handleListFilesTopic(parameters) {
    parameters = parameters || {};

    return fileClient.list(parameters.userId);
  };
};