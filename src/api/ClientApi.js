/**
 * Groomer Service
 * API для будущей GroomCRM или назовите ее уже как-нибудь. На этой странице расписаны основные эндпоинты, по которым можно получить данные из базы данных (или положить их туда, если будет такая возможность). Также здесь можно будет протестировать эти самые эндпоинты, посмотреть ответы и всякое такое.  ### Changelog  **v1.2.2**: Добавлена сущность Салонов - географических расположений точек обслуживания клиентов, к которым привязываются мастера. Для получения списка мастеров салона добавлен фильтр salon_id  **v1.2.1**: Добавил эндпоинт для получения информации об авторизованном Клиенте/Мастере  **v1.2.0**: Обновлены пути, респонсы, эндпоинты для приложений вынесены в отдельный стек  **v1.1.4**: Обновил структуру WorkingDiapason  **v1.1.3**: Добавил описания возвращаемых кодов.  **v1.1.2**: Удалил упоминания Питомцев и Пушей из АПИ  **v1.1.1**: Добавил параметр \"платформа\" для заказа, заменил OneSignal на FCM + APNs  **v1.1.0**: Убрал пуши из API  **v1.0.4**: добавлены фильтры по датам, добавлено поле телефона для мастеров (для смс-оповещений), добавлено поле push_device_id для отправки пушей на телефон. 
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
import Client from '../model/Client';
import Salon from '../model/Salon';

/**
* Client service.
* @module api/ClientApi
* @version 1.2.1
*/
export default class ClientApi {

    /**
    * Constructs a new ClientApi. 
    * @alias module:api/ClientApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the clientClientIDDelete operation.
     * @callback module:api/ClientApi~clientClientIDDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * 
     * 
     * @param {Number} clientID ID аккаунта
     * @param {module:api/ClientApi~clientClientIDDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */
    clientClientIDDelete(clientID, callback) {
      let postBody = null;
      // verify the required parameter 'clientID' is set
      if (clientID === undefined || clientID === null) {
        throw new Error("Missing the required parameter 'clientID' when calling clientClientIDDelete");
      }

      let pathParams = {
        'clientID': clientID
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuthAdmin'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/client/{clientID}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the clientClientIDGet operation.
     * @callback module:api/ClientApi~clientClientIDGetCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Получение данных салона - адреса, телефоны, социалки и т.п.
     * Получение данных для салона
     * @param {Number} clientID ID аккаунта
     * @param {module:api/ClientApi~clientClientIDGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    clientClientIDGet(clientID, callback) {
      let postBody = null;
      // verify the required parameter 'clientID' is set
      if (clientID === undefined || clientID === null) {
        throw new Error("Missing the required parameter 'clientID' when calling clientClientIDGet");
      }

      let pathParams = {
        'clientID': clientID
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
        '/client/{clientID}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the clientClientIDPatch operation.
     * @callback module:api/ClientApi~clientClientIDPatchCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * 
     * 
     * @param {Number} clientID ID аккаунта
     * @param {Object} opts Optional parameters
     * @param {Number} opts.id Уникальный идентификатор Клиента
     * @param {String} opts.password Пароль клиента
     * @param {Boolean} opts.type Тип клиента. 0 - частный мастер, 1 - компания
     * @param {String} opts.name Название Клиента
     * @param {String} opts.email Электронная почта
     * @param {Array.<module:model/Salon>} opts.salons 
     * @param {File} opts.image Логотип клиента
     * @param {Object} opts.settings 
     * @param {module:api/ClientApi~clientClientIDPatchCallback} callback The callback function, accepting three arguments: error, data, response
     */
    clientClientIDPatch(clientID, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'clientID' is set
      if (clientID === undefined || clientID === null) {
        throw new Error("Missing the required parameter 'clientID' when calling clientClientIDPatch");
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
        'password': opts['password'],
        'type': opts['type'],
        'name': opts['name'],
        'email': opts['email'],
        'salons': this.apiClient.buildCollectionParam(opts['salons'], 'csv'),
        'image': opts['image'],
        'settings': opts['settings']
      };

      let authNames = ['bearerAuthAdmin'];
      let contentTypes = ['multipart/form-data'];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/client/{clientID}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the clientGet operation.
     * @callback module:api/ClientApi~clientGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Client>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Возвращает список клиентов массивом 
     * Возвращает массив из Клиентов при их существовании или пустой массив, если клиентов нет. Требует токен с уровнем прав как минимум администратора сервиса 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Как много элементов должно возвращаться за один запрос (default to 25)
     * @param {Number} opts.offset Смещение от первого (default to 0)
     * @param {module:api/ClientApi~clientGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Client>}
     */
    clientGet(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'limit': opts['limit'],
        'offset': opts['offset']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuthAdmin'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [Client];
      return this.apiClient.callApi(
        '/client', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the clientPost operation.
     * @callback module:api/ClientApi~clientPostCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Создает нового клиента 
     * Создает нового Клиента. Для работы с этим эндпоинтом требуется доступ как минимум администратора сервиса 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.id Уникальный идентификатор Клиента
     * @param {String} opts.password Пароль клиента
     * @param {Boolean} opts.type Тип клиента. 0 - частный мастер, 1 - компания
     * @param {String} opts.name Название Клиента
     * @param {String} opts.email Электронная почта
     * @param {Array.<module:model/Salon>} opts.salons 
     * @param {File} opts.image Логотип клиента
     * @param {Object} opts.settings 
     * @param {module:api/ClientApi~clientPostCallback} callback The callback function, accepting three arguments: error, data, response
     */
    clientPost(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
        'id': opts['id'],
        'password': opts['password'],
        'type': opts['type'],
        'name': opts['name'],
        'email': opts['email'],
        'salons': this.apiClient.buildCollectionParam(opts['salons'], 'csv'),
        'image': opts['image'],
        'settings': opts['settings']
      };

      let authNames = ['bearerAuthAdmin'];
      let contentTypes = ['multipart/formdata'];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/client', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
