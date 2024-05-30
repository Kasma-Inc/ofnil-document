## 1. 工作流

### 1.1. 工作流列表

工作流列表展示了所有的工作流，可以查看工作流的基本信息，包括工作流名称、工描述、创建时间、创建人等，支持以下操作：

- 上线：上线工作流
- 下线：下线工作流
- 编辑：编辑工作流
- 删除：删除工作流
- 创建工作流

![](https://static.kasma.ai/document/202405301121511.png?x-oss-process=style/document)

<p style="display:flex; gap:12px;">
    <img src="https://static.kasma.ai/document/202405301121520.png?x-oss-process=style/document"  style="width:50%;" />
    <img src="https://static.kasma.ai/document/202405301121540.png?x-oss-process=style/document" style="width:50%;" />
</p>

### 1.2. 创建工作流

创建工作流界面主要分为三个区域：工作流组件、工作流画布、工作流操作栏。

![](https://static.kasma.ai/document/202405301125483.png?x-oss-process=style/document)

#### 1.2.1. 工作流组件

工作流组件展示了内置的工作流组件，包括数据输入、数据输出、数据计算、脚本等组件，支持拖拽组件到工作流画布。

#### 1.2.2. 工作流操作

工作流操作栏提供了一些常用的操作，包括：

- 创建：创建工作流
- 预览：预览工作流运行流程
- 设置：设置工作流配置
- 布局：自动布局工作流画布
- 撤销：撤销工作流画布操作
- 重做：重做工作流画布操作
- 快捷键：查看工作流快捷键

其中，工作流配置包括工作流名称、工作流描述、定时执行计划、告警设置等。

![](https://static.kasma.ai/document/202405301121519.png?x-oss-process=style/document)

#### 1.2.3. 工作流画布

工作流画布展示了工作流的运行流程，支持拖拽组件到画布、连接组件、删除组件、编辑组件等操作。

- 新增组件：从工作流组件区域中拖拽组件到画布。
- 连接组件：从一个组件输出端口出发，拖拽至另一个组件输入端口，连接两个组件。需要注意的是，组件的输入端口和输出端口必须是格式对应的。
- 删除组件：选中组件，点击工作流操作栏删除键删除组件。
- 编辑组件：双击组件，打开组件编辑器，编辑组件的节点信息、算法参数、资源配置等。
- 拖拽组件：选中组件，拖拽组件到画布其他位置。
- 预览组件：鼠标移动到组件上，可以预览组件的输入输出信息。

<p style="display:flex; gap:12px;">
    <img src="https://static.kasma.ai/document/202405301121327.png?x-oss-process=style/document"  style="width:50%;" />
</p>

<p style="display:flex; gap:12px;">
    <img src="https://static.kasma.ai/document/202405301121479.png?x-oss-process=style/document"  style="width:50%;" />
    <img src="https://static.kasma.ai/document/202405301121502.png?x-oss-process=style/document" style="width:50%;" />
</p>

![](https://static.kasma.ai/document/202405301121331.png?x-oss-process=style/document)


### 2.3. 工作流详情

工作流创建成功后会自动跳转到工作流详情页面，提交工作流将产生工作流实例。

![](https://static.kasma.ai/document/202405301546705.png?x-oss-process=style/document)


## 2. 工作流实例

### 2.1. 工作流实例列表

工作流实例列表展示了所有的工作流实例，可以查看工作流实例的基本信息，包括工作流实例名称、工作流名称、状态、开始时间、结束时间等。

![](https://static.kasma.ai/document/202405301121524.png?x-oss-process=style/document)

### 2.2. 工作流实例详情

工作流实例详情展示了工作流实例的运行流程，包含了每一个组件节点的运行情况，对于已完成的工作流实例，可以重新提交运行工作流实例。

![](https://static.kasma.ai/document/202405301552447.png?x-oss-process=style/document)