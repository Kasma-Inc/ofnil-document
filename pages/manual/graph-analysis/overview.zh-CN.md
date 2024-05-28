进入图可视化分析项目工作区布局如下：

![](https://static.kasma.ai/document/202405271600391.png?x-oss-process=style/document)

## 1. 功能选项卡

包含了图可视化分析的主要功能模块：

- [数据转换](./data-transform)
- [外观配置](./appearance)
- [布局配置](./layout)
- [组件配置](./components)
- [查询筛选](./query-filter)
- [图算法](./graph-algorithm)
- [操作历史](./action-history)
- 功能详情区：上述功能模块的具体功能或配置，对于概览选项卡，有如下功能：
    - 导出项目：导出 `Ofnil图分析` 项目的原始 `JSON` 数据，导入时可恢复完整项目
    - 仅导出数据：支持 `JSON`、`Node CSV`、`Edge CSV` 格式
    - 编辑项目：修改项目的名称和描述
    - 克隆项目：克隆一份新的项目
    - 表格模式：支持以表格形式查看原始数据

<p style="display:flex; gap:12px;">
    <img src="https://static.kasma.ai/document/202405271600393.png?x-oss-process=style/document"  style="width:33%;" />
    <img src="https://static.kasma.ai/document/202405271600394.png?x-oss-process=style/document" style="width:33%;" />
    <img src="https://static.kasma.ai/document/202405271600395.png?x-oss-process=style/document" style="width:33%;" />
</p>

![](https://static.kasma.ai/document/202405271600392.png?x-oss-process=style/document)


## 2. 可视化区

图可视化画布展示区域

### 2.1 可视化区

对可视化区域分析的功能集合

| 功能 | 快捷键 | 描述 |
| --- | --- | --- |
| 放大 | Shift + + | 放大画布 |
| 缩小 | Shift + - | 缩小画布 |
| 居中显示 | Shift + 0 | 画布居中 |
| 适应画布 | Shift + 空格键 | 使可视化适应画布 |
| 拉索选择 | Shift + L | 通过拉索选择数据 |
| 矩形选择 | Shift + B | 通过矩形选择数据 |
| 查找全部路径 | Shift + P | 通过交互选择两点，查找全部路径 |
| 查找最短路径 | Shift + Alt/Option + P | 通过交互选择两点，查找最短路径 |
| 全屏/退出全屏 | Mac: Option + Command + F
Win: Alt + Win + F | 进入/退出全屏模式 |

<p style="display:flex; gap:12px;">
    <img src="https://static.kasma.ai/document/202405271600396.png?x-oss-process=style/document"  style="width:50%;" />
    <img src="https://static.kasma.ai/document/202405271600397.png?x-oss-process=style/document" style="width:50%;" />
</p>

<p style="display:flex; gap:12px;">
    <img src="https://static.kasma.ai/document/202405271600404.png?x-oss-process=style/document"  style="width:50%;" />
    <img src="https://static.kasma.ai/document/202405271600405.png?x-oss-process=style/document" style="width:50%;" />
</p>

最短路径

### 2.2 可视化统计信息

支持统计点边可视化信息

- 显示数量：经过属性筛选器筛选后的总数量
- 选中数量：通过各种选择方式高亮的总数量
- 总数量：原始数据的数量

![](https://static.kasma.ai/document/202405271600398.png?x-oss-process=style/document)

### 2.3 其他交互操作

#### 2.3.1 点右键操作

| 功能 | 描述 |
| --- | --- |
| 属性信息 | 查看点的详细属性信息 |
| 邻居节点 | 选择当前点的1跳或者多跳邻居 |
| 圈层计算 | 计算所有点到选中点的距离，并将结果写入点属性@circleDistance |
| 颜色标记 | 对选择点，单独进行颜色设置 |

<p style="display:flex; gap:12px;">
    <img src="https://static.kasma.ai/document/202405271600401.png?x-oss-process=style/document"  style="width:33%;" />
    <img src="https://static.kasma.ai/document/202405271600400.png?x-oss-process=style/document" style="width:33%;" />
    <img src="https://static.kasma.ai/document/202405271600399.png?x-oss-process=style/document" style="width:33%;" />
</p>


属性信息

#### 2.3.2 边右键操作

| 功能 | 描述 |
| --- | --- |
| 属性信息 | 查看边的详细属性信息 |
| 颜色标记 | 对选择边，单独进行颜色设置 |

#### 2.3.2 画布右键操作

生成项目：基于当前项目生成新的项目

<p style="display:flex; gap:12px;">
    <img src="https://static.kasma.ai/document/202405271600402.png?x-oss-process=style/document" style="width:50%;" />
    <img src="https://static.kasma.ai/document/202405271600403.png?x-oss-process=style/document" style="width:50%;" />
</p>


#### 2.3.4 其他交互操作

| 功能 | 快捷键 | 描述 |
| --- | --- | --- |
| 单点选择 | 单击点 | 选择一个点 |
| 多点选择 | Shift + 单击点 | 选择多个点 |
| 点邻居选择 | Option + 单击点 | 选择点的邻居 |
| 边邻居选择 | 单击边 | 选择边的邻居 |
| 取消选择 | 单击画布空白处 | 取消所有选择 |