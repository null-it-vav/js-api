# GroomerService.Order

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | Уникальный идентификатор Заказа | [optional] [readonly] 
**workingDiapasonStartId** | **Number** | Ссылка на время начала процедуры | [optional] 
**phone** | **String** | Телефон для связи | [optional] 
**email** | **String** | Email для связи | [optional] 
**petName** | **String** | Имя питомца | [optional] 
**ownerName** | **String** | Позывной владельца лохматой твари | [optional] 
**comment** | **String** | Поле комментария в форме заказа | [optional] 
**platform** | **String** | Платформа | [optional] 
**services** | **[Number]** | Идентификаторы услуг для заказа | [optional] 
**pushDeviceId** | **String** | Push идентификатор устройства | [optional] 



## Enum: PlatformEnum


* `android` (value: `"android"`)

* `ios` (value: `"ios"`)




