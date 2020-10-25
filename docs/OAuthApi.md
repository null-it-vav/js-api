# GroomerService.OAuthApi

All URIs are relative to *http://192.168.0.17/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**oauthClientLoginPost**](OAuthApi.md#oauthClientLoginPost) | **POST** /oauth/client/login | Аутентифицирует клиента - салон или частного грумера 
[**oauthMasterLoginPost**](OAuthApi.md#oauthMasterLoginPost) | **POST** /oauth/master/login | Аутентифицирует клиента - салон или частного грумера 
[**oauthMeGet**](OAuthApi.md#oauthMeGet) | **GET** /oauth/me | 



## oauthClientLoginPost

> Bearer oauthClientLoginPost(body)

Аутентифицирует клиента - салон или частного грумера 

Эндпоинт для авторизации клиента 

### Example

```javascript
import GroomerService from 'groomer_service';

let apiInstance = new GroomerService.OAuthApi();
let body = {login=benjamin93@hotmail.com, password=password}; // Object | Аутентифицирует клиента - салон или частного грумера
apiInstance.oauthClientLoginPost(body, (error, data, response) => {
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
 **body** | **Object**| Аутентифицирует клиента - салон или частного грумера | 

### Return type

[**Bearer**](Bearer.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## oauthMasterLoginPost

> Bearer oauthMasterLoginPost(body)

Аутентифицирует клиента - салон или частного грумера 

Эндпоинт для авторизации Мастера 

### Example

```javascript
import GroomerService from 'groomer_service';

let apiInstance = new GroomerService.OAuthApi();
let body = {login=libbie15@hotmail.com, password=password}; // Object | Аутентифицирует клиента - салон или частного грумера
apiInstance.oauthMasterLoginPost(body, (error, data, response) => {
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
 **body** | **Object**| Аутентифицирует клиента - салон или частного грумера | 

### Return type

[**Bearer**](Bearer.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## oauthMeGet

> InlineResponse200 oauthMeGet()





### Example

```javascript
import GroomerService from 'groomer_service';
let defaultClient = GroomerService.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new GroomerService.OAuthApi();
apiInstance.oauthMeGet((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

