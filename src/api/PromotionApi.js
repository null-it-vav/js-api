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
import InlineResponse2001 from '../model/InlineResponse2001';
import Promotion from '../model/Promotion';

/**
* Promotion service.
* @module api/PromotionApi
* @version 1.2.1
*/
export default class PromotionApi {

    /**
    * Constructs a new PromotionApi. 
    * @alias module:api/PromotionApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the clientClientPromotionGet operation.
     * @callback module:api/PromotionApi~clientClientPromotionGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2001} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Получение списка акций для салона
     * 
     * @param {Number} clientID ID салона
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Как много элементов должно возвращаться за один запрос (default to 25)
     * @param {Number} opts.offset Смещение от первого (default to 0)
     * @param {module:api/PromotionApi~clientClientPromotionGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2001}
     */
    clientClientPromotionGet(clientID, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'clientID' is set
      if (clientID === undefined || clientID === null) {
        throw new Error("Missing the required parameter 'clientID' when calling clientClientPromotionGet");
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
      let returnType = InlineResponse2001;
      return this.apiClient.callApi(
        '/client/{client}/promotion', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the clientClientPromotionPost operation.
     * @callback module:api/PromotionApi~clientClientPromotionPostCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * 
     * 
     * @param {module:model/Promotion} promotion Store *Promotion* entity
     * @param {module:api/PromotionApi~clientClientPromotionPostCallback} callback The callback function, accepting three arguments: error, data, response
     */
    clientClientPromotionPost(promotion, callback) {
      let postBody = promotion;
      // verify the required parameter 'promotion' is set
      if (promotion === undefined || promotion === null) {
        throw new Error("Missing the required parameter 'promotion' when calling clientClientPromotionPost");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/client/{client}/promotion', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the clientClientPromotionPromotionDelete operation.
     * @callback module:api/PromotionApi~clientClientPromotionPromotionDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * 
     * 
     * @param {Number} clientID ID салона
     * @param {Number} promotionID Id requested Promotion
     * @param {module:api/PromotionApi~clientClientPromotionPromotionDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */
    clientClientPromotionPromotionDelete(clientID, promotionID, callback) {
      let postBody = null;
      // verify the required parameter 'clientID' is set
      if (clientID === undefined || clientID === null) {
        throw new Error("Missing the required parameter 'clientID' when calling clientClientPromotionPromotionDelete");
      }
      // verify the required parameter 'promotionID' is set
      if (promotionID === undefined || promotionID === null) {
        throw new Error("Missing the required parameter 'promotionID' when calling clientClientPromotionPromotionDelete");
      }

      let pathParams = {
        'clientID': clientID,
        'promotionID': promotionID
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
        '/client/{client}/promotion/{promotion}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the clientClientPromotionPromotionGet operation.
     * @callback module:api/PromotionApi~clientClientPromotionPromotionGetCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Получение детальной информации по акции
     * 
     * @param {Number} clientID ID салона
     * @param {Number} promotionID Id requested Promotion
     * @param {module:api/PromotionApi~clientClientPromotionPromotionGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    clientClientPromotionPromotionGet(clientID, promotionID, callback) {
      let postBody = null;
      // verify the required parameter 'clientID' is set
      if (clientID === undefined || clientID === null) {
        throw new Error("Missing the required parameter 'clientID' when calling clientClientPromotionPromotionGet");
      }
      // verify the required parameter 'promotionID' is set
      if (promotionID === undefined || promotionID === null) {
        throw new Error("Missing the required parameter 'promotionID' when calling clientClientPromotionPromotionGet");
      }

      let pathParams = {
        'clientID': clientID,
        'promotionID': promotionID
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
        '/client/{client}/promotion/{promotion}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the clientClientPromotionPromotionPatch operation.
     * @callback module:api/PromotionApi~clientClientPromotionPromotionPatchCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * 
     * 
     * @param {Number} clientID ID салона
     * @param {Number} promotionID Id requested Promotion
     * @param {module:model/Promotion} promotion Optional description in *Markdown*
     * @param {module:api/PromotionApi~clientClientPromotionPromotionPatchCallback} callback The callback function, accepting three arguments: error, data, response
     */
    clientClientPromotionPromotionPatch(clientID, promotionID, promotion, callback) {
      let postBody = promotion;
      // verify the required parameter 'clientID' is set
      if (clientID === undefined || clientID === null) {
        throw new Error("Missing the required parameter 'clientID' when calling clientClientPromotionPromotionPatch");
      }
      // verify the required parameter 'promotionID' is set
      if (promotionID === undefined || promotionID === null) {
        throw new Error("Missing the required parameter 'promotionID' when calling clientClientPromotionPromotionPatch");
      }
      // verify the required parameter 'promotion' is set
      if (promotion === undefined || promotion === null) {
        throw new Error("Missing the required parameter 'promotion' when calling clientClientPromotionPromotionPatch");
      }

      let pathParams = {
        'clientID': clientID,
        'promotionID': promotionID
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/client/{client}/promotion/{promotion}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
