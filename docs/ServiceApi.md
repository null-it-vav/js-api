# GroomerService.ServiceApi

All URIs are relative to *http://192.168.0.17/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**clientClientServiceGet**](ServiceApi.md#clientClientServiceGet) | **GET** /client/{client}/service | Получение списка Услуг, которые оказывает салон
[**clientClientServicePost**](ServiceApi.md#clientClientServicePost) | **POST** /client/{client}/service | 
[**clientClientServiceServiceDelete**](ServiceApi.md#clientClientServiceServiceDelete) | **DELETE** /client/{client}/service/{service} | 
[**clientClientServiceServiceGet**](ServiceApi.md#clientClientServiceServiceGet) | **GET** /client/{client}/service/{service} | Получение детальной информации услуги
[**clientClientServiceServicePatch**](ServiceApi.md#clientClientServiceServicePatch) | **PATCH** /client/{client}/service/{service} | 



## clientClientServiceGet

> InlineResponse2002 clientClientServiceGet(clientID, opts)

Получение списка Услуг, которые оказывает салон

Store *Service* entity

### Example

```javascript
import GroomerService from 'groomer_service';

let apiInstance = new GroomerService.ServiceApi();
let clientID = 1; // Number | ID салона
let opts = {
  'limit': 25, // Number | Как много элементов должно возвращаться за один запрос
  'offset': 0 // Number | Смещение от первого
};
apiInstance.clientClientServiceGet(clientID, opts, (error, data, response) => {
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
 **clientID** | **Number**| ID салона | [default to 1]
 **limit** | **Number**| Как много элементов должно возвращаться за один запрос | [optional] [default to 25]
 **offset** | **Number**| Смещение от первого | [optional] [default to 0]

### Return type

[**InlineResponse2002**](InlineResponse2002.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## clientClientServicePost

> clientClientServicePost(name, imageUpload, serviceType)





### Example

```javascript
import GroomerService from 'groomer_service';
let defaultClient = GroomerService.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new GroomerService.ServiceApi();
let name = "name_example"; // String | Название Услуги
let imageUpload = "/path/to/file"; // File | Загружаемое изображение услуги
let serviceType = 56; // [Number] | Тип услуги - для кошек, для собак, для других
apiInstance.clientClientServicePost(name, imageUpload, serviceType, (error, data, response) => {
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
 **name** | **String**| Название Услуги | 
 **imageUpload** | **File**| Загружаемое изображение услуги | 
 **serviceType** | [**[Number]**](Number.md)| Тип услуги - для кошек, для собак, для других | 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json


## clientClientServiceServiceDelete

> clientClientServiceServiceDelete(clientID, serviceID)





### Example

```javascript
import GroomerService from 'groomer_service';
let defaultClient = GroomerService.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new GroomerService.ServiceApi();
let clientID = 1; // Number | ID салона
let serviceID = 1; // Number | ID услуги
apiInstance.clientClientServiceServiceDelete(clientID, serviceID, (error, data, response) => {
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
 **clientID** | **Number**| ID салона | [default to 1]
 **serviceID** | **Number**| ID услуги | 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## clientClientServiceServiceGet

> Object clientClientServiceServiceGet(clientID, serviceID)

Получение детальной информации услуги



### Example

```javascript
import GroomerService from 'groomer_service';

let apiInstance = new GroomerService.ServiceApi();
let clientID = 1; // Number | ID салона
let serviceID = 1; // Number | ID услуги
apiInstance.clientClientServiceServiceGet(clientID, serviceID, (error, data, response) => {
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
 **clientID** | **Number**| ID салона | [default to 1]
 **serviceID** | **Number**| ID услуги | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## clientClientServiceServicePatch

> clientClientServiceServicePatch(clientID, serviceID, service)





### Example

```javascript
import GroomerService from 'groomer_service';
let defaultClient = GroomerService.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new GroomerService.ServiceApi();
let clientID = 1; // Number | ID салона
let serviceID = 1; // Number | ID услуги
let service = new GroomerService.Service(); // Service | Optional description in *Markdown*
apiInstance.clientClientServiceServicePatch(clientID, serviceID, service, (error, data, response) => {
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
 **clientID** | **Number**| ID салона | [default to 1]
 **serviceID** | **Number**| ID услуги | 
 **service** | [**Service**](Service.md)| Optional description in *Markdown* | 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

