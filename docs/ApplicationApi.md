# GroomerService.ApplicationApi

All URIs are relative to *http://192.168.0.17/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**clientClientGet**](ApplicationApi.md#clientClientGet) | **GET** /client/{client} | Получение данных салона - адреса, телефоны, социалки и т.п.
[**clientClientMasterGet**](ApplicationApi.md#clientClientMasterGet) | **GET** /client/{client}/master | Получение списка мастеров конкретного салона
[**clientClientMasterMasterGet**](ApplicationApi.md#clientClientMasterMasterGet) | **GET** /client/{client}/master/{master} | Получение информации по конкретному мастеру
[**clientClientMasterMasterWorkingDiapasonGet**](ApplicationApi.md#clientClientMasterMasterWorkingDiapasonGet) | **GET** /client/{client}/master/{master}/working-diapason | Получение расписания мастера
[**clientClientMasterMasterWorkingDiapasonWorkingDiapasonGet**](ApplicationApi.md#clientClientMasterMasterWorkingDiapasonWorkingDiapasonGet) | **GET** /client/{client}/master/{master}/working-diapason/{working-diapason} | Получение деталей временного отрезка
[**clientClientOrderPost**](ApplicationApi.md#clientClientOrderPost) | **POST** /client/{client}/order | Создание заявки на оказание услуг
[**clientClientPromotionGet**](ApplicationApi.md#clientClientPromotionGet) | **GET** /client/{client}/promotion | Получение списка акций для салона
[**clientClientPromotionPromotionGet**](ApplicationApi.md#clientClientPromotionPromotionGet) | **GET** /client/{client}/promotion/{promotion} | Получение детальной информации по акции
[**clientClientServiceGet**](ApplicationApi.md#clientClientServiceGet) | **GET** /client/{client}/service | Получение списка Услуг, которые оказывает салон
[**clientClientServiceServiceGet**](ApplicationApi.md#clientClientServiceServiceGet) | **GET** /client/{client}/service/{service} | Получение детальной информации услуги



## clientClientGet

> Object clientClientGet(clientID)

Получение данных салона - адреса, телефоны, социалки и т.п.

Получение данных для салона

### Example

```javascript
import GroomerService from 'groomer_service';

let apiInstance = new GroomerService.ApplicationApi();
let clientID = 1; // Number | ID салона
apiInstance.clientClientGet(clientID, (error, data, response) => {
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

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## clientClientMasterGet

> Object clientClientMasterGet(clientID, opts)

Получение списка мастеров конкретного салона



### Example

```javascript
import GroomerService from 'groomer_service';

let apiInstance = new GroomerService.ApplicationApi();
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


## clientClientMasterMasterGet

> Object clientClientMasterMasterGet(clientID, masterID)

Получение информации по конкретному мастеру



### Example

```javascript
import GroomerService from 'groomer_service';

let apiInstance = new GroomerService.ApplicationApi();
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


## clientClientMasterMasterWorkingDiapasonGet

> InlineResponse2003 clientClientMasterMasterWorkingDiapasonGet(masterID, clientID, opts)

Получение расписания мастера

Store *WorkingDiapason* entity

### Example

```javascript
import GroomerService from 'groomer_service';

let apiInstance = new GroomerService.ApplicationApi();
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


## clientClientMasterMasterWorkingDiapasonWorkingDiapasonGet

> Object clientClientMasterMasterWorkingDiapasonWorkingDiapasonGet(masterID, clientID, workingDiapasonID)

Получение деталей временного отрезка



### Example

```javascript
import GroomerService from 'groomer_service';

let apiInstance = new GroomerService.ApplicationApi();
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


## clientClientOrderPost

> clientClientOrderPost(order)

Создание заявки на оказание услуг



### Example

```javascript
import GroomerService from 'groomer_service';

let apiInstance = new GroomerService.ApplicationApi();
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


## clientClientPromotionGet

> InlineResponse2001 clientClientPromotionGet(clientID, opts)

Получение списка акций для салона



### Example

```javascript
import GroomerService from 'groomer_service';

let apiInstance = new GroomerService.ApplicationApi();
let clientID = 1; // Number | ID салона
let opts = {
  'limit': 25, // Number | Как много элементов должно возвращаться за один запрос
  'offset': 0 // Number | Смещение от первого
};
apiInstance.clientClientPromotionGet(clientID, opts, (error, data, response) => {
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

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## clientClientPromotionPromotionGet

> Object clientClientPromotionPromotionGet(clientID, promotionID)

Получение детальной информации по акции



### Example

```javascript
import GroomerService from 'groomer_service';

let apiInstance = new GroomerService.ApplicationApi();
let clientID = 1; // Number | ID салона
let promotionID = 1; // Number | Id requested Promotion
apiInstance.clientClientPromotionPromotionGet(clientID, promotionID, (error, data, response) => {
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
 **promotionID** | **Number**| Id requested Promotion | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## clientClientServiceGet

> InlineResponse2002 clientClientServiceGet(clientID, opts)

Получение списка Услуг, которые оказывает салон

Store *Service* entity

### Example

```javascript
import GroomerService from 'groomer_service';

let apiInstance = new GroomerService.ApplicationApi();
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


## clientClientServiceServiceGet

> Object clientClientServiceServiceGet(clientID, serviceID)

Получение детальной информации услуги



### Example

```javascript
import GroomerService from 'groomer_service';

let apiInstance = new GroomerService.ApplicationApi();
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

