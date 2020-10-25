# GroomerService.MasterApi

All URIs are relative to *http://192.168.0.17/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**clientClientMasterGet**](MasterApi.md#clientClientMasterGet) | **GET** /client/{client}/master | Получение списка мастеров конкретного салона
[**clientClientMasterMasterDelete**](MasterApi.md#clientClientMasterMasterDelete) | **DELETE** /client/{client}/master/{master} | 
[**clientClientMasterMasterGet**](MasterApi.md#clientClientMasterMasterGet) | **GET** /client/{client}/master/{master} | Получение информации по конкретному мастеру
[**clientClientMasterMasterPatch**](MasterApi.md#clientClientMasterMasterPatch) | **PATCH** /client/{client}/master/{master} | 
[**clientClientMasterPost**](MasterApi.md#clientClientMasterPost) | **POST** /client/{client}/master | 



## clientClientMasterGet

> Object clientClientMasterGet(clientID, opts)

Получение списка мастеров конкретного салона



### Example

```javascript
import GroomerService from 'groomer_service';

let apiInstance = new GroomerService.MasterApi();
let clientID = 1; // Number | ID салона
let opts = {
  'limit': 25, // Number | Как много элементов должно возвращаться за один запрос
  'offset': 0 // Number | Смещение от первого
};
apiInstance.clientClientMasterGet(clientID, opts, (error, data, response) => {
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

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## clientClientMasterMasterDelete

> clientClientMasterMasterDelete(clientID, masterID)





### Example

```javascript
import GroomerService from 'groomer_service';
let defaultClient = GroomerService.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new GroomerService.MasterApi();
let clientID = 1; // Number | ID салона
let masterID = 56; // Number | Id мастера
apiInstance.clientClientMasterMasterDelete(clientID, masterID, (error, data, response) => {
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
 **masterID** | **Number**| Id мастера | 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## clientClientMasterMasterGet

> Object clientClientMasterMasterGet(clientID, masterID)

Получение информации по конкретному мастеру



### Example

```javascript
import GroomerService from 'groomer_service';

let apiInstance = new GroomerService.MasterApi();
let clientID = 1; // Number | ID салона
let masterID = 56; // Number | Id мастера
apiInstance.clientClientMasterMasterGet(clientID, masterID, (error, data, response) => {
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
 **masterID** | **Number**| Id мастера | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## clientClientMasterMasterPatch

> clientClientMasterMasterPatch(clientID, masterID, opts)





### Example

```javascript
import GroomerService from 'groomer_service';
let defaultClient = GroomerService.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new GroomerService.MasterApi();
let clientID = 1; // Number | ID салона
let masterID = 56; // Number | Id мастера
let opts = {
  'id': 789, // Number | 
  'image': "image_example", // String | 
  'imageUpload': "/path/to/file", // File | 
  'name': "name_example", // String | 
  'phone': "phone_example", // String | 
  'description': "description_example", // String | 
  'email': "email_example", // String | 
  'password': "password_example" // String | 
};
apiInstance.clientClientMasterMasterPatch(clientID, masterID, opts, (error, data, response) => {
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
 **masterID** | **Number**| Id мастера | 
 **id** | **Number**|  | [optional] 
 **image** | **String**|  | [optional] 
 **imageUpload** | **File**|  | [optional] 
 **name** | **String**|  | [optional] 
 **phone** | **String**|  | [optional] 
 **description** | **String**|  | [optional] 
 **email** | **String**|  | [optional] 
 **password** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json


## clientClientMasterPost

> Object clientClientMasterPost(clientID, opts)





### Example

```javascript
import GroomerService from 'groomer_service';
let defaultClient = GroomerService.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new GroomerService.MasterApi();
let clientID = 1; // Number | ID салона
let opts = {
  'id': 789, // Number | 
  'image': "image_example", // String | 
  'imageUpload': "/path/to/file", // File | 
  'name': "name_example", // String | 
  'phone': "phone_example", // String | 
  'description': "description_example", // String | 
  'email': "email_example", // String | 
  'password': "password_example" // String | 
};
apiInstance.clientClientMasterPost(clientID, opts, (error, data, response) => {
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
 **id** | **Number**|  | [optional] 
 **image** | **String**|  | [optional] 
 **imageUpload** | **File**|  | [optional] 
 **name** | **String**|  | [optional] 
 **phone** | **String**|  | [optional] 
 **description** | **String**|  | [optional] 
 **email** | **String**|  | [optional] 
 **password** | **String**|  | [optional] 

### Return type

**Object**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json

