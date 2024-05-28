## 1.  Edge CSV Formt

`Ofnil` 支持类似 `Edge CSV` 格式，`Edge CSV`  只包含一个`边 CSV` 文件。`CSV` 格式遵循 `RFC 4180 CSV` 规范，更多信息请参考请参阅 [CSV 文件的一般格式和 MIME 类型](https://datatracker.ietf.org/doc/html/rfc4180)。

## 2. 格式说明

`Edge CSV` 内容只包含两列，`source` 和 `target`，系统将根据 `source` 和 `target` 自动生成点列表。

| 列标题 | 兼容性列标题 | 可选性 | 描述 |
| --- | --- | --- | --- |
| source | from/~source/~from | Y | 起点Id |
| target | to/~target/~to | Y | 终点Id |

> 兼容性列标题：为提高兼容性，`Ofnil` 导入数据时也支持的列标题。
> 

## 3. 示例

- `edge.csv` ，点击下载文件 [edge.csv](https://static.kasma.ai/document/edge.csv)。
    
- 文件内容

```bash
source,target
Jean Valjean,Javert
Jean Valjean,Fantine
Fantine,Cosette
Cosette,Marius
Thenardier,Mme. Thenardier
Fantine,Thenardier
```

- 边表格预览

| source | target |
| --- | --- |
| Jean Valjean | Javert |
| Jean Valjean | Fantine |
| Fantine | Cosette |
| Cosette | Marius |
| Thenardier | Mme. Thenardier |
| Fantine | Thenardier |

- 自动生成点表格预览

| id |
| --- |
| Jean Valjean |
| Javert |
| Fantine |
| Cosette |
| Marius |
| Thenardier |
| Mme. Thenardier |