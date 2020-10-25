# GroomerService.OrderApi

All URIs are relative to *http://192.168.0.17/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**clientClientOrderGet**](OrderApi.md#clientClientOrderGet) | **GET** /client/{client}/order | 
[**clientClientOrderOrderDelete**](OrderApi.md#clientClientOrderOrderDelete) | **DELETE** /client/{client}/order/{order} | 
[**clientClientOrderOrderGet**](OrderApi.md#clientClientOrderOrderGet) | **GET** /client/{client}/order/{order} | 
[**clientClientOrderOrderPatch**](OrderApi.md#clientClientOrderOrderPatch) | **PATCH** /client/{client}/order/{order} | 
[**clientClientOrderPost**](OrderApi.md#clientClientOrderPost) | **POST** /client/{client}/order | Создание заявки на оказание услуг



## clientClientOrderGet

> clientClientOrderGet(opts)



Store *Order* entity

### Example

```javascript
import GroomerService from 'groomer_service';
let defaultClient = GroomerService.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new GroomerService.OrderApi();
let opts = {
  'limit': 25, // Number | Как много элементов должно возвращаться за один запрос
  'offset': 0 // Number | Смещение от первого
};
apiInstance.clientClientOrderGet(opts, (error, data, response) => {
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
 **limit** | **Number**| Как много элементов должно возвращаться за один запрос | [optional] [default to 25]
 **offset** | **Number**| Смещение от первого | [optional] [default to 0]

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## clientClientOrderOrderDelete

> clientClientOrderOrderDelete(orderID)





### Example

```javascript
import GroomerService from 'groomer_service';
let defaultClient = GroomerService.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new GroomerService.OrderApi();
let orderID = 1; // Number | Id requested Order
apiInstance.clientClientOrderOrderDelete(orderID, (error, data, response) => {
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
 **orderID** | **Number**| Id requested Order | 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## clientClientOrderOrderGet

> Order clientClientOrderOrderGet(orderID)





### Example

```javascript
import GroomerService from 'groomer_service';
let defaultClient = GroomerService.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new GroomerService.OrderApi();
let orderID = 1; // Number | Id requested Order
apiInstance.clientClientOrderOrderGet(orderID, (error, data, response) => {
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
 **orderID** | **Number**| Id requested Order | 

### Return type

[**Order**](Order.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## clientClientOrderOrderPatch

> clientClientOrderOrderPatch(orderID, order)





### Example

```javascript
import GroomerService from 'groomer_service';
let defaultClient = GroomerService.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new GroomerService.OrderApi();
let orderID = 1; // Number | Id requested Order
let order = new GroomerService.Order(); // Order | Optional description in *Markdown*
apiInstance.clientClientOrderOrderPatch(orderID, order, (error, data, response) => {
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
 **orderID** | **Number**| Id requested Order | 
 **order** | [**Order**](Order.md)| Optional description in *Markdown* | 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## clientClientOrderPost

> clientClientOrderPost(order)

Создание заявки на оказание услуг



### Example

```javascript
import GroomerService from 'groomer_service';

let apiInstance = new GroomerService.OrderApi();
let order = new GroomerService.Order(); // Order | Store *Order* entity
apiInstance.clientClientOrderPost(order, (error, data, response) => {
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
 **order** | [**Order**](Order.md)| Store *Order* entity | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

