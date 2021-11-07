const getKey = require("./interface/getKey");
const setKey = require("./interface/setKey");
const deleteKey = require("./interface/deleteKey");

class REDISManager {
  /**
   * Database get redis key
   * @function getKey
   * @param {string} key - redis key
   * @returns {Promise}
   */
  static getKey = getKey;

  /**
   * Database set redis key
   * @function setKey
   * @param {string} key - redis key
   * @param {string} value - redis value
   * @returns {Promise}
   */

  static setKey = setKey;

  /**
   * Database delete redis key
   * @function deleteKey
   * @param {string} key - redis key
   * @returns {Promise}
   */
  static deleteKey = deleteKey;
}

module.exports = REDISManager;
