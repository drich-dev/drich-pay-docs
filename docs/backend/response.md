# Response

## Introduce

Content-Type: `application/json`

HTTP_CODE一般为`200`

JSON结构体

|   Key   |     Type      |    Remark    |
| :-----: | :-----------: | :----------: |
|  code   |      int      |  业务响应码  |
| message |    string     | 业务响应信息 |
|  data   | array\|object | 业务响应数据 |

## Code Enum

| Code  |    Remark    |
| :---: | :----------: |
| 2000  | 业务处理成功 |
| 5000  | 业务处理失败 |
