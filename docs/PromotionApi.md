# GroomerService.PromotionApi

All URIs are relative to *http://192.168.0.17/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**clientClientPromotionGet**](PromotionApi.md#clientClientPromotionGet) | **GET** /client/{client}/promotion | Получение списка акций для салона
[**clientClientPromotionPost**](PromotionApi.md#clientClientPromotionPost) | **POST** /client/{client}/promotion | 
[**clientClientPromotionPromotionDelete**](PromotionApi.md#clientClientPromotionPromotionDelete) | **DELETE** /client/{client}/promotion/{promotion} | 
[**clientClientPromotionPromotionGet**](PromotionApi.md#clientClientPromotionPromotionGet) | **GET** /client/{client}/promotion/{promotion} | Получение детальной информации по акции
[**clientClientPromotionPromotionPatch**](PromotionApi.md#clientClientPromotionPromotionPatch) | **PATCH** /client/{client}/promotion/{promotion} | 



## clientClientPromotionGet

> InlineResponse2001 clientClientPromotionGet(client, opts)

Получение списка акций для салона



### Example

```javascript
import GroomerService from 'groomer_service';

let apiInstance = new GroomerService.PromotionApi();
let client = 1; // Number | ID салона
let opts = {
  'limit': 25, // Number | Как много элементов должно возвращаться за один запрос
  'offset': 0 // Number | Смещение от первого
};
apiInstance.clientClientPromotionGet(client, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client** | **Number**| ID салона | [default to 1]
 **limit** | **Number**| Как много элементов должно возвращаться за один запрос | [optional] [default to 25]
 **offset** | **Number**| Смещение от первого | [optional] [default to 0]

### Return type

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## clientClientPromotionPost

> clientClientPromotionPost(promotion)





### Example

```javascript
import GroomerService from 'groomer_service';
let defaultClient = GroomerService.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new GroomerService.PromotionApi();
let promotion = new GroomerService.Promotion(); // Promotion | Store *Promotion* entity
apiInstance.clientClientPromotionPost(promotion, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **promotion** | [**Promotion**](Promotion.md)| Store *Promotion* entity | 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## clientClientPromotionPromotionDelete

> clientClientPromotionPromotionDelete(client, promotion)





### Example

```javascript
import GroomerService from 'groomer_service';
let defaultClient = GroomerService.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new GroomerService.PromotionApi();
let client = 1; // Number | ID салона
let promotion = 1; // Number | Id requested Promotion
apiInstance.clientClientPromotionPromotionDelete(client, promotion, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client** | **Number**| ID салона | [default to 1]
 **promotion** | **Number**| Id requested Promotion | 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## clientClientPromotionPromotionGet

> Object clientClientPromotionPromotionGet(client, promotion)

Получение детальной информации по акции



### Example

```javascript
import GroomerService from 'groomer_service';

let apiInstance = new GroomerService.PromotionApi();
let client = 1; // Number | ID салона
let promotion = 1; // Number | Id requested Promotion
apiInstance.clientClientPromotionPromotionGet(client, promotion, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client** | **Number**| ID салона | [default to 1]
 **promotion** | **Number**| Id requested Promotion | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## clientClientPromotionPromotionPatch

> clientClientPromotionPromotionPatch(client, promotion, promotion)





### Example

```javascript
import GroomerService from 'groomer_service';
let defaultClient = GroomerService.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new GroomerService.PromotionApi();
let client = 1; // Number | ID салона
let promotion = 1; // Number | Id requested Promotion
let promotion = new GroomerService.Promotion(); // Promotion | Optional description in *Markdown*
apiInstance.clientClientPromotionPromotionPatch(client, promotion, promotion, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client** | **Number**| ID салона | [default to 1]
 **promotion** | **Number**| Id requested Promotion | 
 **promotion** | [**Promotion**](Promotion.md)| Optional description in *Markdown* | 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

