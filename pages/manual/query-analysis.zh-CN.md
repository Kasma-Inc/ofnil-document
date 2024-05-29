## 1. 查询分析

![](https://static.kasma.ai/document/202405291409154.png?x-oss-process=style/document)

`Ofnil` 提供了一个查询分析模块，可以帮助用户快速查询数据源中的数据。
在查询分析页面中，主要分了三个区域：查询文件树区域、查询编辑器区域、运行结果区域。

## 2. 查询文件树

### 2.1 创建查询文件及目录

支持创建两种查询文件：
- SQL查询文件：通过SQL语句查询数据源中的数据。
- CYPHER查询文件：通过CYPHER语句查询图数据集中的数据。

![](https://static.kasma.ai/document/202405291554014.png?x-oss-process=style/document)

查询文件目录方便用户管理查询文件，最多支持创建 `4` 层目录。

### 2.2 查询文件操作

![](https://static.kasma.ai/document/202405291528745.png?x-oss-process=style/document)

在查询文件树上，在查询文件上通过右键菜单或点击 `⋮` 按钮，打开查询文件操作菜单，支持以下操作：

 - 重命名查询文件
 - 移动查询文件
 - 复制查询文件
 - 删除查询文件
 - 预览查询文件：鼠标移动到查询文件上，可以预览查询文件内容


<p style="display:flex; gap:12px;">
    <img src="https://static.kasma.ai/document/202405291528746.png?x-oss-process=style/document" style="width:50%;" />
    <img src="https://static.kasma.ai/document/202405291734166.png?x-oss-process=style/document" style="width:50%;" />
</p>

<p style="display:flex; gap:12px;">
    <img src="https://static.kasma.ai/document/202405291732462.png?x-oss-process=style/document" style="width:50%;" />
    <img src="https://static.kasma.ai/document/202405291732461.png?x-oss-process=style/document" style="width:50%;" />
</p>


### 2.3 查询文件目录操作
在查询文件树上，在查询文件目录上通过右键菜单或点击 `⋮` 按钮，打开查询文件目录操作菜单，支持以下操作：

 - 新增目录
 - 重命名查询文件目录
 - 新增SQL查询文件
 - 新增CYPHER查询文件
 - 删除查询文件目录

 <p style="display:flex; gap:12px;">
    <img src="https://static.kasma.ai/document/202405291528744.png?x-oss-process=style/document" style="width:50%;" />
    <img src="https://static.kasma.ai/document/202405291748314.png?x-oss-process=style/document" style="width:50%;" />
</p>


## 3. 查询编辑器

`Ofnil`通过点击文件树里的查询文件打开查询文件，支持同时打开多个查询文件，每个查询文件都有一个独立的查询编辑器。

### 3.1 查询文件标签页

多个查询文件通过标签页的方式展示，可以通过点击标签页切换查询文件。标签页右侧的 `⨯` 按钮可以关闭当前查询文件。标签页支持多种操作，包括：

- 关闭：关闭当前查询文件
- 关闭右侧标签页：关闭当前标签页右侧的标签页
- 关闭其他标签页：关闭除当前标签页外的其他标签页
- 关闭所有标签页：关闭所有标签页
- 重命名：重命名当前查询文件。

<p style="display:flex; gap:12px;">
    <img src="https://static.kasma.ai/document/202405291533026.png?x-oss-process=style/document" style="width:50%;" />
</p>

### 3.2 查询文件编辑器

查询文件编辑器由工具栏和编辑器组成。工具栏提供了一些常用的操作，包括：

- 选择数据源
- 保存：保存当前查询文件
- 运行：运行当前查询文件
- 快捷键：显示当前查询文件的快捷键

您也可以通过快捷键 `Ctrl + S` 保存查询文件，`Ctrl + Enter` 运行查询文件，其他快捷键查看工具栏上的快捷键按钮 `⌨️`。

<p style="display:flex; gap:12px;">
    <img src="https://static.kasma.ai/document/202405291533027.png?x-oss-process=style/document" style="width:50%;" />
    <img src="https://static.kasma.ai/document/202405291533028.png?x-oss-process=style/document" style="width:50%;" />
</p>


## 4. 运行结果记录

### 4.1 运行记录

当运行查询文件时，会产生一条运行记录，运行记录展示了查询文件的运行结果，包括运行状态、运行耗时、运行结果、运行日志等信息。

![](https://static.kasma.ai/document/202405291804757.png?x-oss-process=style/document)

### 4.2 运行详情

点击运行记录的 `查看` 按钮，可以查看运行结果、运行日志等信息。

#### 4.2.1 表格

运行结果以表格的形式展示，支持数据导出、数据筛选等操作。

![](https://static.kasma.ai/document/202405291108406.png?x-oss-process=style/document)

#### 4.2.2 图表

运行结果以图表的形式展示，支持柱状图、折线图、散点图，您可以通过配置图表来展示不同的图表效果。

<p style="display:flex; gap:12px;">
    <img src="https://static.kasma.ai/document/202405291533030.png?x-oss-process=style/document" style="width:50%;" />
    <img src="https://static.kasma.ai/document/202405291533029.png?x-oss-process=style/document" style="width:50%;" />
</p>


![](https://static.kasma.ai/document/202405291528748.png?x-oss-process=style/document)

#### 4.2.3 日志

运行日志展示了查询文件的运行日志，通常用于对查询语句的调试和排查。

![](https://static.kasma.ai/document/202405291528747.png?x-oss-process=style/document)

