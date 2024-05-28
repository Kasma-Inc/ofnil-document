
点击`创建项目`，进入创建项目引导流程。选择创建项目类型：

## 1. 文件导入

### 步骤 1：选择文件导入

选中 `选择数据`，点击`继续`。

![](https://static.kasma.ai/document/202405271833554.png?x-oss-process=style/document)

### 步骤 2：选择文件

文件类型参考 [数据格式](./data-format/graph-json) 

![](https://static.kasma.ai/document/202405271833555.png?x-oss-process=style/document)



### 步骤 3：配置字段

当前所有支持文件类型为规范格式，`点Id`、`边起点Id`、`边终点Id` 将依据规范自动识别，本步骤仅做文件数据预览。

![](https://static.kasma.ai/document/202405271833556.png?x-oss-process=style/document)

> 注意：配置字段完成后将对文件数据清洗，移除点列表中 `点Id` 重复的点，仅保留其中之一；移除边列表中不存在对应起点或终点的边。
> 

### 步骤 4：配置模型

配置模型旨在根据图数据创建图模型，对异构图分析十分有用，若为图数据为同构图，点击`继续` 可跳过本步骤。

![](https://static.kasma.ai/document/202405271833557.png?x-oss-process=style/document)

`Ofnil 图可视分析` 默认图数据为同构图，选择`异构图`，点击`继续`，可进入编辑流程：

- 步骤 4.1：定义点类型
  
    选择一个点属性，根据点属性值生成点类型。
    
    对于一个点类型有如下操作：
    
    - 启用：默认启用，关闭后将不导入该点类型数据。
    - 修改：更改点类型名称、点默认颜色（将用于默认可视化）。
    - 属性管理：支持对属性的修改（属性名、数据类型、默认值）、启用（关闭后不导入该类型的属性），数据类型支持 `String` 、`Number` 、`Datetime` 、`Boolean` 。

![](https://static.kasma.ai/document/202405271833558.png?x-oss-process=style/document)

![](https://static.kasma.ai/document/202405271833559.png?x-oss-process=style/document)

- 步骤 4.2：定义边类型
  
    系统将根据上一步定义的点类型，自动生成边类型，您可根据需求更改边类型启用状态、颜色、属性配置。
    
    对于一个边类型有如下操作：
    
    - 启用：默认启用，关闭后将不导入该边类型数据。
    - 修改：更改边类型名称、边默认颜色（将用于默认可视化）。
    - 属性管理：支持对属性的修改（属性名、数据类型、默认值）、启用（关闭后不导入该类型的属性），数据类型支持 `String` 、`Number` 、`Datetime` 、`Boolean` 。

![](https://static.kasma.ai/document/202405271833560.png?x-oss-process=style/document)

- 步骤 4.3：模型预览
  
    对前两个步骤的定义的点类型和边类型以表格和可视化的方式预览，并确认是否正确。支持`可视化` 和 `列表` 两种方式预览。
    

![](https://static.kasma.ai/document/202405271833561.png?x-oss-process=style/document)

![](https://static.kasma.ai/document/202405271833562.png?x-oss-process=style/document)

图模型编辑完成后，点击`继续`，系统将根据图模型对图数据进一步的清洗，将移除不符合图模型的点边数据。

### 步骤 5：数据预览

对数据进行最后的表格预览，此时可切换点边类型，查看具体点边类型的数据。

![](https://static.kasma.ai/document/202405271833564.png?x-oss-process=style/document)

## 2. 内置样例

`Ofnil` 中内置了多个不同类型的内置样例，点击对应内置样例，即可快速创建一个副本进行探索分析。

### 步骤 1：选择示例项目

选中内置样例，点击`继续`。

![](https://static.kasma.ai/document/202405271833565.png?x-oss-process=style/document)

### 步骤 2：选择样例

选择一个样例，点击`创建`。

![](https://static.kasma.ai/document/202405271833566.png?x-oss-process=style/document)

### 步骤 3：创建成功

基于内置样例的项目创建成功！你可以探索分析图数据，相关功能查看后续章节

![](https://static.kasma.ai/document/202405271833567.png?x-oss-process=style/document)

## 3. 图数据库

暂未开放，敬请期待~