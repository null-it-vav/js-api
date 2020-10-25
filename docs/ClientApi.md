# GroomerService.ClientApi

All URIs are relative to *http://192.168.0.17/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**clientClientDelete**](ClientApi.md#clientClientDelete) | **DELETE** /client/{client} | 
[**clientClientGet**](ClientApi.md#clientClientGet) | **GET** /client/{client} | Получение данных салона - адреса, телефоны, социалки и т.п.
[**clientClientPatch**](ClientApi.md#clientClientPatch) | **PATCH** /client/{client} | 
[**clientGet**](ClientApi.md#clientGet) | **GET** /client | Возвращает список клиентов массивом 
[**clientPost**](ClientApi.md#clientPost) | **POST** /client | Создает нового клиента 



## clientClientDelete

> clientClientDelete(client)





### Example

```javascript
import GroomerService from 'groomer_service';
let defaultClient = GroomerService.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuthAdmin
let bearerAuthAdmin = defaultClient.authentications['bearerAuthAdmin'];
bearerAuthAdmin.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new GroomerService.ClientApi();
let client = 1; // Number | ID салона
apiInstance.clientClientDelete(client, (error, data, response) => {
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

### Return type

null (empty response body)

### Authorization

[bearerAuthAdmin](../README.md#bearerAuthAdmin)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## clientClientGet

> Object clientClientGet(client)

Получение данных салона - адреса, телефоны, социалки и т.п.

Получение данных для салона

### Example

```javascript
import GroomerService from 'groomer_service';

let apiInstance = new GroomerService.ClientApi();
let client = 1; // Number | ID салона
apiInstance.clientClientGet(client, (error, data, response) => {
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

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## clientClientPatch

> clientClientPatch(client, client)





### Example

```javascript
import GroomerService from 'groomer_service';
let defaultClient = GroomerService.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuthAdmin
let bearerAuthAdmin = defaultClient.authentications['bearerAuthAdmin'];
bearerAuthAdmin.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new GroomerService.ClientApi();
let client = 1; // Number | ID салона
let client = new GroomerService.Client(); // Client | Optional description in *Markdown*
apiInstance.clientClientPatch(client, client, (error, data, response) => {
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
 **client** | [**Client**](Client.md)| Optional description in *Markdown* | 

### Return type

null (empty response body)

### Authorization

[bearerAuthAdmin](../README.md#bearerAuthAdmin)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## clientGet

> [Client] clientGet(opts)

Возвращает список клиентов массивом 

Возвращает массив из Клиентов при их существовании или пустой массив, если клиентов нет. Требует токен с уровнем прав как минимум администратора сервиса 

### Example

```javascript
import GroomerService from 'groomer_service';
let defaultClient = GroomerService.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuthAdmin
let bearerAuthAdmin = defaultClient.authentications['bearerAuthAdmin'];
bearerAuthAdmin.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new GroomerService.ClientApi();
let opts = {
  'limit': 25, // Number | Как много элементов должно возвращаться за один запрос
  'offset': 0 // Number | Смещение от первого
};
apiInstance.clientGet(opts, (error, data, response) => {
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
 **limit** | **Number**| Как много элементов должно возвращаться за один запрос | [optional] [default to 25]
 **offset** | **Number**| Смещение от первого | [optional] [default to 0]

### Return type

[**[Client]**](Client.md)

### Authorization

[bearerAuthAdmin](../README.md#bearerAuthAdmin)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## clientPost

> clientPost(opts)

Создает нового клиента 

Создает нового Клиента. Для работы с этим эндпоинтом требуется доступ как минимум администратора сервиса 

### Example

```javascript
import GroomerService from 'groomer_service';
let defaultClient = GroomerService.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuthAdmin
let bearerAuthAdmin = defaultClient.authentications['bearerAuthAdmin'];
bearerAuthAdmin.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new GroomerService.ClientApi();
let opts = {
  'id': 789, // Number | Уникальный идентификатор Клиента
  'password': "password_example", // String | Пароль клиента
  'type': true, // Boolean | Тип клиента. 0 - частный мастер, 1 - компания
  'name': "name_example", // String | Название Клиента
  'email': "email_example", // String | Электронная почта
  'image': "/path/to/file", // File | Логотип клиента
  'settings': null // Object | 
};
apiInstance.clientPost(opts, (error, data, response) => {
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
 **id** | **Number**| Уникальный идентификатор Клиента | [optional] 
 **password** | **String**| Пароль клиента | [optional] 
 **type** | **Boolean**| Тип клиента. 0 - частный мастер, 1 - компания | [optional] 
 **name** | **String**| Название Клиента | [optional] 
 **email** | **String**| Электронная почта | [optional] 
 **image** | **File**| Логотип клиента | [optional] 
 **settings** | [**Object**](Object.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[bearerAuthAdmin](../README.md#bearerAuthAdmin)

### HTTP request headers

- **Content-Type**: multipart/formdata
- **Accept**: application/json

