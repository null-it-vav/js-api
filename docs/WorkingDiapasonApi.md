# GroomerService.WorkingDiapasonApi

All URIs are relative to *http://192.168.0.17/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**clientClientMasterMasterWorkingDiapasonGet**](WorkingDiapasonApi.md#clientClientMasterMasterWorkingDiapasonGet) | **GET** /client/{client}/master/{master}/working-diapason | Получение расписания мастера
[**clientClientMasterMasterWorkingDiapasonPost**](WorkingDiapasonApi.md#clientClientMasterMasterWorkingDiapasonPost) | **POST** /client/{client}/master/{master}/working-diapason | 
[**clientClientMasterMasterWorkingDiapasonWorkingDiapasonDelete**](WorkingDiapasonApi.md#clientClientMasterMasterWorkingDiapasonWorkingDiapasonDelete) | **DELETE** /client/{client}/master/{master}/working-diapason/{working-diapason} | 
[**clientClientMasterMasterWorkingDiapasonWorkingDiapasonGet**](WorkingDiapasonApi.md#clientClientMasterMasterWorkingDiapasonWorkingDiapasonGet) | **GET** /client/{client}/master/{master}/working-diapason/{working-diapason} | Получение деталей временного отрезка
[**clientClientMasterMasterWorkingDiapasonWorkingDiapasonPatch**](WorkingDiapasonApi.md#clientClientMasterMasterWorkingDiapasonWorkingDiapasonPatch) | **PATCH** /client/{client}/master/{master}/working-diapason/{working-diapason} | 



## clientClientMasterMasterWorkingDiapasonGet

> InlineResponse2003 clientClientMasterMasterWorkingDiapasonGet(masterID, clientID, opts)

Получение расписания мастера

Store *WorkingDiapason* entity

### Example

```javascript
import GroomerService from 'groomer_service';

let apiInstance = new GroomerService.WorkingDiapasonApi();
let masterID = 56; // Number | Id мастера
let clientID = 1; // Number | ID салона
let opts = {
  'limit': 25, // Number | Как много элементов должно возвращаться за один запрос
  'offset': 0, // Number | Смещение от первого
  'dateStart': "dateStart_example", // String | Начало периода
  'dateEnd': "dateEnd_example" // String | Конец периода
};
apiInstance.clientClientMasterMasterWorkingDiapasonGet(masterID, clientID, opts, (error, data, response) => {
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
 **masterID** | **Number**| Id мастера | 
 **clientID** | **Number**| ID салона | [default to 1]
 **limit** | **Number**| Как много элементов должно возвращаться за один запрос | [optional] [default to 25]
 **offset** | **Number**| Смещение от первого | [optional] [default to 0]
 **dateStart** | **String**| Начало периода | [optional] 
 **dateEnd** | **String**| Конец периода | [optional] 

### Return type

[**InlineResponse2003**](InlineResponse2003.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## clientClientMasterMasterWorkingDiapasonPost

> clientClientMasterMasterWorkingDiapasonPost(workingDiapason)





### Example

```javascript
import GroomerService from 'groomer_service';
let defaultClient = GroomerService.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuthMaster
let bearerAuthMaster = defaultClient.authentications['bearerAuthMaster'];
bearerAuthMaster.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new GroomerService.WorkingDiapasonApi();
let workingDiapason = new GroomerService.WorkingDiapason(); // WorkingDiapason | Store *WorkingDiapason* entity
apiInstance.clientClientMasterMasterWorkingDiapasonPost(workingDiapason, (error, data, response) => {
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
 **workingDiapason** | [**WorkingDiapason**](WorkingDiapason.md)| Store *WorkingDiapason* entity | 

### Return type

null (empty response body)

### Authorization

[bearerAuthMaster](../README.md#bearerAuthMaster)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## clientClientMasterMasterWorkingDiapasonWorkingDiapasonDelete

> clientClientMasterMasterWorkingDiapasonWorkingDiapasonDelete(masterID, clientID, workingDiapasonID)





### Example

```javascript
import GroomerService from 'groomer_service';
let defaultClient = GroomerService.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuthMaster
let bearerAuthMaster = defaultClient.authentications['bearerAuthMaster'];
bearerAuthMaster.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new GroomerService.WorkingDiapasonApi();
let masterID = 56; // Number | Id мастера
let clientID = 1; // Number | ID салона
let workingDiapasonID = 1; // Number | Id requested WorkingDiapason
apiInstance.clientClientMasterMasterWorkingDiapasonWorkingDiapasonDelete(masterID, clientID, workingDiapasonID, (error, data, response) => {
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
 **masterID** | **Number**| Id мастера | 
 **clientID** | **Number**| ID салона | [default to 1]
 **workingDiapasonID** | **Number**| Id requested WorkingDiapason | 

### Return type

null (empty response body)

### Authorization

[bearerAuthMaster](../README.md#bearerAuthMaster)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## clientClientMasterMasterWorkingDiapasonWorkingDiapasonGet

> Object clientClientMasterMasterWorkingDiapasonWorkingDiapasonGet(masterID, clientID, workingDiapasonID)

Получение деталей временного отрезка



### Example

```javascript
import GroomerService from 'groomer_service';

let apiInstance = new GroomerService.WorkingDiapasonApi();
let masterID = 56; // Number | Id мастера
let clientID = 1; // Number | ID салона
let workingDiapasonID = 1; // Number | Id requested WorkingDiapason
apiInstance.clientClientMasterMasterWorkingDiapasonWorkingDiapasonGet(masterID, clientID, workingDiapasonID, (error, data, response) => {
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
 **masterID** | **Number**| Id мастера | 
 **clientID** | **Number**| ID салона | [default to 1]
 **workingDiapasonID** | **Number**| Id requested WorkingDiapason | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## clientClientMasterMasterWorkingDiapasonWorkingDiapasonPatch

> clientClientMasterMasterWorkingDiapasonWorkingDiapasonPatch(masterID, clientID, workingDiapasonID, workingDiapason)





### Example

```javascript
import GroomerService from 'groomer_service';
let defaultClient = GroomerService.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuthMaster
let bearerAuthMaster = defaultClient.authentications['bearerAuthMaster'];
bearerAuthMaster.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new GroomerService.WorkingDiapasonApi();
let masterID = 56; // Number | Id мастера
let clientID = 1; // Number | ID салона
let workingDiapasonID = 1; // Number | Id requested WorkingDiapason
let workingDiapason = new GroomerService.WorkingDiapason(); // WorkingDiapason | Optional description in *Markdown*
apiInstance.clientClientMasterMasterWorkingDiapasonWorkingDiapasonPatch(masterID, clientID, workingDiapasonID, workingDiapason, (error, data, response) => {
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
 **masterID** | **Number**| Id мастера | 
 **clientID** | **Number**| ID салона | [default to 1]
 **workingDiapasonID** | **Number**| Id requested WorkingDiapason | 
 **workingDiapason** | [**WorkingDiapason**](WorkingDiapason.md)| Optional description in *Markdown* | 

### Return type

null (empty response body)

### Authorization

[bearerAuthMaster](../README.md#bearerAuthMaster)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

