# 

## 1. F(x)

使用 `JavaScript` 语法对点边属性执行函数转换，或生成新的属性。编辑器内置了 `lodash.js` 和 `dayjs` 工具库，辅助对数据和日期的处理。

配置说明：

| 配置名 | 必选 | 描述 |
| --- | --- | --- |
| 属性 | Y | 选择一个点类型或者边类型的属性 |
| 新属性名 | Y | 新生成的属性名称 |
| 转换规则 | N | 可选，选择预置转换规则代码，自动生成转换代码 |
| 转换代码 | Y | 支持 `JavaScript` 的 语法，内置了 `loadsh.js` 和 `dayjs` 工具库 |

<p style="display:flex; gap:12px;">
    <img src="https://static.kasma.ai/document/202405271312371.png?x-oss-process=style/document"  style="width:50%;" />
    <img src="https://static.kasma.ai/document/202405271312307.png?x-oss-process=style/document" style="width:50%;" />
</p>

## 2. 抽取

根据点的属性抽取生成新的点类型。

配置说明：

| 配置名 | 必选 | 描述 |
| :-- | --- | --- |
| 源点类型 | Y | 选择一个点类型 |
| 新点类型 | Y | 新生成的点类型的名称 |
| 新边类型 | Y | 新点类型与源点类型之间的边类型名称 |
| 新点属性 | Y | 新点类型的属性列表|
|主键：抽取点数据时将根据主键属性的值去重；|||
|启用：启用后将该属性复制到新点。 |||


<p style="display:flex; gap:12px;">
    <img src="https://static.kasma.ai/document/202405271504185.png?x-oss-process=style/document"  style="width:50%;" />
    <img src="https://static.kasma.ai/document/202405271504210.png?x-oss-process=style/document" style="width:50%;" />
</p>


## 3. 合并

基于指定点或边类型的属性，若属性值（可多选）相同时，则合并成一个点或边，此过程可能减少点边数据。

配置说明：

| 配置名 | 必选 | 描述 |
| --- | --- | --- |
| 合并类型 | Y | 选择一个点或边类型 |
| 选择属性 | Y | 用于判断点或边是否需要合并的属性（可多选），属性值相同时合并成同一个点或边 |
| 清除未选中属性 | N | 是否清除未选择的属性 |


<p style="display:flex; gap:12px;">
    <img src="https://static.kasma.ai/document/202405271508936.png?x-oss-process=style/document"  style="width:50%;" />
    <img src="https://static.kasma.ai/document/202405271508946.png?x-oss-process=style/document" style="width:50%;" />
</p>


## 4. 聚合

基于点的邻居点或边，执行聚合计算，生成新的聚合属性。

配置说明：

| 配置名 | 必选 | 描述 |
| --- | --- | --- |
| 聚合点类型 | Y | 选择一个点类型 |
| 邻边类型 | Y | 选择聚合点的邻边类型 |
| 聚合方式 | Y | 选择基于 邻居点 还是 邻居边 的数据进行聚合计算 |
| 新属性名 | Y | 新生成的聚合属性的名称 |
| 计算规则 | Y | 可选，选择预置计算规则代码，自动生成计算代码 |
| 转换代码 | N | 支持 `JavaScript` 的 语法，内置了 `loadsh.js` 和 `dayjs` 工具库 |


<p style="display:flex; gap:12px;">
    <img src="https://static.kasma.ai/document/202405271506090.png?x-oss-process=style/document"  style="width:50%;" />
    <img src="https://static.kasma.ai/document/202405271506079.png?x-oss-process=style/document" style="width:50%;" />
</p>


## 5. 链接

对指定的起点属性、终点属性的属性值相同的点之间，生成一条边。

配置说明：

| 配置名 | 必选 | 描述 |
| --- | --- | --- |
| 起点属性 | Y | 选择一个点类型的属性作为起点 |
| 终点属性 | Y | 选择一个点类型的属性作为终点 |
| 新边类型 | Y | 新生成边类型的名称 |

<p style="display:flex; gap:12px;">
    <img src="https://static.kasma.ai/document/202405271508992.png?x-oss-process=style/document"  style="width:50%;" />
    <img src="https://static.kasma.ai/document/202405271508997.png?x-oss-process=style/document" style="width:50%;" />
</p>


## 6. 快捷路径

对图中指定的三个点两条边的路径，缩短为两个点一条边的路径。

配置说明：

| 配置名 | 必选 | 描述 |
| --- | --- | --- |
| 点类型（B） | Y | 选择原路径中间点的类型 |
| 边类型（E1） | Y | 选择原路径第一条边的类型 |
| 边类型（E2） | Y | 选择原路径第二条边的类型 |
| 新边类型（E3） | Y | 新路径中边类型的名称 |
| 新边属性 | Y | 选择原路径中间点的属性，作为新路径中边的属性 |
| 删除原路径 | Y | 开启后，将自动删除点类型 `B` 、边类型 `E1` 和 `E2` 的所有数据 |

<p style="display:flex; gap:12px;">
    <img src="https://static.kasma.ai/document/202405271508351.png?x-oss-process=style/document"  style="width:50%;" />
    <img src="https://static.kasma.ai/document/202405271508359.png?x-oss-process=style/document" style="width:50%;" />
</p>
