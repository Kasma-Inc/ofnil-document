## 1. Gremlin CSV

`Ofnil` 支持类似 `Gremlin CSV` 格式。`Gremlin CSV` 格式遵循 `RFC 4180 CSV` 规范，更多信息请参考请参阅 [CSV 文件的一般格式和 MIME 类型](https://datatracker.ietf.org/doc/html/rfc4180)。

`Gremlin CSV` 由一个点CSV文件和一个边CSV文件组成，每个文件都包含一个逗号分隔的标题行。此标题行由系统列标题和属性列标题组成。

> 所有文件必须采用 UTF-8 格式编码。
> 

## 2. 系统列标题

点文件和边文件需要和允许的系统列标题不同，每个系统列在标题中只能出现一次。

### 2.1 点标题

| 列标题 | 兼容性列标题 | 可选性 | 描述 |
| --- | --- | --- | --- |
| ~id | id | Y | 点唯一Id |
| ~label | label | N | 点的类型 |
|  | x | N | 点位置X坐标 |
|  | y | N | 点位置Y坐标 |
|  | z | N | 点位置Z坐标 |
|  | color | N | 点的颜色 |
|  | size | N | 点的大小 |

### 2.2 边标题

| 列标题 | 兼容性列标题 | 可选性 | 描述 |
| --- | --- | --- | --- |
| ~id | id | Y | 边唯一Id |
| ~from | from/source/~source | N | 起点Id |
| ~to | to/target/~target | N | 终点Id |
| ~label | label | N | 边的类型 |
|  | color | N | 边的颜色 |
|  | size | N | 边的宽度 |

> 兼容性列标题：为提高兼容性，`Ofnil` 导入数据时也支持的列标题。
> 

## 3. 属性列标题

可通过以下语法指定属性列，类型名称不区分大小写，不支持 List 和 Set 数据类型，只能有一个值。

```bash
属性名:类型
propertyname:type
```

> 注意：为了简化文件，`type` 也可以省略，除系统列标题以外的标题都将被识别为属性列标题。
> 

### 3.1 数据类型

| 类型 | 描述 |
| --- | --- |
| Bool/Boolean | false, true |
| Byte | -128 to 127 |
| Short | -32768 ~ 32767 |
| Int | -2^31 ~ 2^31 -1 |
| Long | -2^63 ~ 2^63 -1 |
| Float | 32-bit IEEE 754 floating point |
| Double | 64-bit IEEE 754 floating point |
| String | 双引号是可选的，字符串中如果包含逗号(,)、换行(\r\n或\n)，双引号(“)等特殊字符，需要使用双引号(“)括起来。示例：“Hello,World” |
| Date | ISO-8601 格式的Java 日期。支持以下格式：yyyy-MM-dd、yyyy-MM-ddTHH:mm、yyyy-MM-ddTHH:mm:ss、yyyy-MM-ddTHH:mm:ssZ |

## 4. 示例

- 文件一：`node.csv`，点击下载文件 [node.csv](https://static.kasma.ai/document/node.csv)
    
    - 文件内容
        
        ```bash
        ~id,group:byte,name:string,description:string,birthYear:int
        Jean Valjean,1,Jean Valjean,The protagonist of the story.,1769
        Javert,2,Javert,The relentless police inspector.,1780
        Fantine,3,Fantine,Cosette's mother.,1796
        Cosette,3,Cosette,Fantine's daughter.,1815
        Marius,4,Marius Pontmercy,A young revolutionary.,1809
        Thenardier,5,Thenardier,A dishonest innkeeper.,1776
        Mme. Thenardier,5,Mme. Thenardier,Thenardier's wife.,1786
        ```
        
    - 表格预览
        
        
        | ~id | group:byte | description:string | birthYear:int |
        | --- | --- | --- | --- |
        | Jean Valjean | 1 | The protagonist of the story. | 1769 |
        | Javert | 2 | The relentless police inspector. | 1780 |
        | Fantine | 3 | Cosette's mother. | 1796 |
        | Cosette | 3 | Fantine's daughter. | 1815 |
        | Marius | 4 | A young revolutionary. | 1809 |
        | Thenardier | 5 | A dishonest innkeeper. | 1776 |
        | Mme. Thenardier | 5 | Thenardier's wife. | 1786 |

- 文件二：`edge.csv`，点击下载文件 [edge.csv](https://static.kasma.ai/document/edge.csv)
    
    - 文件内容
    
    ```bash
    ~from,~to,value:int
    Jean Valjean,Javert,1
    Jean Valjean,Fantine,1
    Fantine,Cosette,2
    Cosette,Marius,
    Thenardier,Mme. Thenardier,1
    Fantine,Thenardier,2
    ```
    
    - 表格预览
    
    | ~from | ~to | value:int |
    | --- | --- | --- |
    | Jean Valjean | Javert | 1 |
    | Jean Valjean | Fantine | 1 |
    | Fantine | Cosette | 2 |
    | Cosette | Marius | 3 |
    | Thenardier | Mme. Thenardier | 1 |
    | Fantine | Thenardier | 2 |

## 5. 参考

- [Gremlin 加载数据格式](https://docs.aws.amazon.com/zh_cn/neptune/latest/userguide/bulk-load-tutorial-format-gremlin.html)