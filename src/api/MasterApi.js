/**
 * Groomer Service
 * API для будущей GroomCRM или назовите ее уже как-нибудь. На этой странице расписаны основные эндпоинты, по которым можно получить данные из базы данных (или положить их туда, если будет такая возможность). Также здесь можно будет протестировать эти самые эндпоинты, посмотреть ответы и всякое такое.  TODO: 1. Обновить структуру описания в соответствии со структурой БД 2. Подготовить возможность тестирования 3. Добавить тест-кейсы для всего API  ### Changelog  **v1.2.1**: Добавил эндпоинт для получения информации об авторизованном Клиенте/Мастере  **v1.2.0**: Обновлены пути, респонсы, эндпоинты для приложений вынесены в отдельный стек  **v1.1.4**: Обновил структуру WorkingDiapason  **v1.1.3**: Добавил описания возвращаемых кодов.  **v1.1.2**: Удалил упоминания Питомцев и Пушей из АПИ  **v1.1.1**: Добавил параметр \"платформа\" для заказа, заменил OneSignal на FCM + APNs  **v1.1.0**: Убрал пуши из API  **v1.0.4**: добавлены фильтры по датам, добавлено поле телефона для мастеров (для смс-оповещений), добавлено поле push_device_id для отправки пушей на телефон. 
 *
 * The version of the OpenAPI document: 1.2.1
 * Contact: kosolapus@gmail.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";

/**
* Master service.
* @module api/MasterApi
* @version 1.2.1
*/
export default class MasterApi {

    /**
    * Constructs a new MasterApi. 
    * @alias module:api/MasterApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the clientClientIDMasterGet operation.
     * @callback module:api/MasterApi~clientClientIDMasterGetCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Получение списка мастеров конкретного салона
     * 
     * @param {Number} clientID ID салона
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Как много элементов должно возвращаться за один запрос (default to 25)
     * @param {Number} opts.offset Смещение от первого (default to 0)
     * @param {module:api/MasterApi~clientClientIDMasterGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    clientClientIDMasterGet(clientID, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'clientID' is set
      if (clientID === undefined || clientID === null) {
        throw new Error("Missing the required parameter 'clientID' when calling clientClientIDMasterGet");
      }

      let pathParams = {
        'clientID': clientID
      };
      let queryParams = {
        'limit': opts['limit'],
        'offset': opts['offset']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Object;
      return this.apiClient.callApi(
        '/client/{clientID}/master', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the clientClientIDMasterMasterIDDelete operation.
     * @callback module:api/MasterApi~clientClientIDMasterMasterIDDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * 
     * 
     * @param {Number} clientID ID салона
     * @param {Number} masterID Id мастера
     * @param {module:api/MasterApi~clientClientIDMasterMasterIDDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */
    clientClientIDMasterMasterIDDelete(clientID, masterID, callback) {
      let postBody = null;
      // verify the required parameter 'clientID' is set
      if (clientID === undefined || clientID === null) {
        throw new Error("Missing the required parameter 'clientID' when calling clientClientIDMasterMasterIDDelete");
      }
      // verify the required parameter 'masterID' is set
      if (masterID === undefined || masterID === null) {
        throw new Error("Missing the required parameter 'masterID' when calling clientClientIDMasterMasterIDDelete");
      }

      let pathParams = {
        'clientID': clientID,
        'masterID': masterID
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/client/{clientID}/master/{masterID}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the clientClientIDMasterMasterIDGet operation.
     * @callback module:api/MasterApi~clientClientIDMasterMasterIDGetCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Получение информации по конкретному мастеру
     * 
     * @param {Number} clientID ID салона
     * @param {Number} masterID Id мастера
     * @param {module:api/MasterApi~clientClientIDMasterMasterIDGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    clientClientIDMasterMasterIDGet(clientID, masterID, callback) {
      let postBody = null;
      // verify the required parameter 'clientID' is set
      if (clientID === undefined || clientID === null) {
        throw new Error("Missing the required parameter 'clientID' when calling clientClientIDMasterMasterIDGet");
      }
      // verify the required parameter 'masterID' is set
      if (masterID === undefined || masterID === null) {
        throw new Error("Missing the required parameter 'masterID' when calling clientClientIDMasterMasterIDGet");
      }

      let pathParams = {
        'clientID': clientID,
        'masterID': masterID
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Object;
      return this.apiClient.callApi(
        '/client/{clientID}/master/{masterID}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the clientClientIDMasterMasterIDPatch operation.
     * @callback module:api/MasterApi~clientClientIDMasterMasterIDPatchCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * 
     * 
     * @param {Number} clientID ID салона
     * @param {Number} masterID Id мастера
     * @param {Object} opts Optional parameters
     * @param {Number} opts.id 
     * @param {String} opts.image 
     * @param {File} opts.imageUpload 
     * @param {String} opts.name 
     * @param {String} opts.phone 
     * @param {String} opts.description 
     * @param {String} opts.email 
     * @param {String} opts.password 
     * @param {module:api/MasterApi~clientClientIDMasterMasterIDPatchCallback} callback The callback function, accepting three arguments: error, data, response
     */
    clientClientIDMasterMasterIDPatch(clientID, masterID, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'clientID' is set
      if (clientID === undefined || clientID === null) {
        throw new Error("Missing the required parameter 'clientID' when calling clientClientIDMasterMasterIDPatch");
      }
      // verify the required parameter 'masterID' is set
      if (masterID === undefined || masterID === null) {
        throw new Error("Missing the required parameter 'masterID' when calling clientClientIDMasterMasterIDPatch");
      }

      let pathParams = {
        'clientID': clientID,
        'masterID': masterID
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
        'id': opts['id'],
        'image': opts['image'],
        'image_upload': opts['imageUpload'],
        'name': opts['name'],
        'phone': opts['phone'],
        'description': opts['description'],
        'email': opts['email'],
        'password': opts['password'],
        '_method': "PATCH"
      };

      let authNames = ['bearerAuth'];
      let contentTypes = ['multipart/form-data'];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/client/{clientID}/master/{masterID}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the clientClientIDMasterPost operation.
     * @callback module:api/MasterApi~clientClientIDMasterPostCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * 
     * 
     * @param {Number} clientID ID салона
     * @param {Object} opts Optional parameters
     * @param {Number} opts.id 
     * @param {String} opts.image 
     * @param {File} opts.imageUpload 
     * @param {String} opts.name 
     * @param {String} opts.phone 
     * @param {String} opts.description 
     * @param {String} opts.email 
     * @param {String} opts.password 
     * @param {module:api/MasterApi~clientClientIDMasterPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    clientClientIDMasterPost(clientID, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'clientID' is set
      if (clientID === undefined || clientID === null) {
        throw new Error("Missing the required parameter 'clientID' when calling clientClientIDMasterPost");
      }

      let pathParams = {
        'clientID': clientID
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
        'id': opts['id'],
        'image': opts['image'],
        'image_upload': opts['imageUpload'],
        'name': opts['name'],
        'phone': opts['phone'],
        'description': opts['description'],
        'email': opts['email'],
        'password': opts['password']
      };

      let authNames = ['bearerAuth'];
      let contentTypes = ['multipart/form-data'];
      let accepts = ['application/json'];
      let returnType = Object;
      return this.apiClient.callApi(
        '/client/{clientID}/master', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
