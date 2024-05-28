# 图算法

# 1. 图概览


![](https://static.kasma.ai/document/202405271759773.png?x-oss-process=style/document)

## 1.1 图密度

计算给定图的密度。

## 1.2 网络直径

计算网络直径，即给定图中任意节点的最大离心率。

## 1.3 模块性

计算给定图的模块性。

参数说明：

| 参数名称 | 必选 | 参数说明 |
| --- | --- | --- |
| 点的模块 | Y | 点的模块属性 |
| 边的权重 | N | 边的权重属性 |

# 2. 点度量

## 2.1 度

计算给定图的每个点的度、出度、入度，计算结果将合并到点属性上。

参数说明：

| 参数名称 | 必选 | 参数说明 |
| --- | --- | --- |
| 边的权重 | N | 边的权重属性 |
| 度属性名 | Y | 计算结果度的点属性名，默认值为 @Degree |
| 入度属性名 | Y | 计算结果入度的点属性名，默认值为 @InDegree |
| 出度属性名 | Y | 计算结果出度的点属性名，默认值为 @OutDegree |


<p style="display:flex; gap:12px;">
    <img src="https://static.kasma.ai/document/202405271759782.png?x-oss-process=style/document"  style="width:50%;" />
</p>


## 2.2 度中心性

计算给定图的每个点的度中心性，计算结果将合并到点属性上。

参数说明：

| 参数名称 | 必选 | 参数说明 |
| --- | --- | --- |
| 边的权重 | N | 边的权重属性 |
| 点属性名 | Y | 计算结果的点属性名，默认值为 @DegreeCentrality |

<p style="display:flex; gap:12px;">
    <img src="https://static.kasma.ai/document/202405271759781.png?x-oss-process=style/document"  style="width:50%;" />
</p>


## 2.3 特征向量中心性

计算给定图的每个点的特征向量中心性，计算结果将合并到点属性上。

参数说明：

| 参数名称 | 必选 | 参数说明 |
| --- | --- | --- |
| 点属性名 | Y | 计算结果的点属性名，默认值为 @EigenvectorCentrality |

<p style="display:flex; gap:12px;">
    <img src="https://static.kasma.ai/document/202405271759780.png?x-oss-process=style/document"  style="width:50%;" />
</p>


## 2.4 Pagerank

计算给定图的每个点的Pagerank，计算结果将合并到点属性上。

参数说明：

| 参数名称 | 必选 | 参数说明 |
| --- | --- | --- |
| 收敛阈值 | Y | 如果两次迭代之间的Pagerank变化小于该值，算法认为已经收敛，提前终止计算，默认值为0.000001 |
| 阻尼因子 | Y | 用户在任意时刻点击当前页面的概率，默认值为0.85 |
| 最大迭代次数 | Y | 为了避免无限循环，当迭代次数达到该值时，终止计算，默认值为100 |
| 边的权重 | N | 边的权重属性 |
| 点属性名 | Y | 计算结果的点属性名，默认值为 @Pagerank |

<p style="display:flex; gap:12px;">
    <img src="https://static.kasma.ai/document/202405271759779.png?x-oss-process=style/document"  style="width:50%;" />
</p>

## 2.5 Hits

使用 `Hits` 算法计算给定图的每个点的枢纽和权威，计算结果将合并到点属性上。

参数说明：

| 参数名称 | 必选 | 参数说明 |
| --- | --- | --- |
| 收敛阈值 | Y | 如果两次迭代之间的Authority和 Hub变化小于该值，算法认为已经收敛，提前终止计算，默认值为0.01 |
| 最大迭代次数 | Y | 为了避免无限循环，当迭代次数达到该值时，终止计算，默认值为100 |
| 边的权重 | N | 边的权重属性 |
| 枢纽属性名 | Y | 计算结果枢纽的点属性名，默认值为 @Hub |
| 权威属性名 | Y | 计算结果权威的点属性名，默认值为 @Authority |

<p style="display:flex; gap:12px;">
    <img src="https://static.kasma.ai/document/202405271759778.png?x-oss-process=style/document"  style="width:50%;" />
</p>


# 3. 边度量

## 3.1 差异性

计算给定图的每个点的度中心性，计算结果将合并到点属性上。

参数说明：

| 参数名称 | 必选 | 参数说明 |
| --- | --- | --- |
| 边的权重 | N | 边的权重属性 |
| 点属性名 | Y | 计算结果的点属性名，默认值为 @Disparity |

<p style="display:flex; gap:12px;">
    <img src="https://static.kasma.ai/document/202405271759777.png?x-oss-process=style/document"  style="width:50%;" />
</p>

# 4. 社区发现

## 4.1 Louvain

使用 `Louvain` 计算给定图的社区，计算结果将合并到点属性上。

参数说明：

| 参数名称 | 必选 | 参数说明 |
| --- | --- | --- |
| 解析度 | Y | 解析度是一个控制社区大小的参数，较高的分辨率会导致更小的社区 |
| 随机遍历 | Y | 是否随机遍历图 |
| 边的权重 | N | 边的权重属性 |
| 点属性名 | Y | 计算结果的点属性名，默认值为 @Louvain |

<p style="display:flex; gap:12px;">
    <img src="https://static.kasma.ai/document/202405271759776.png?x-oss-process=style/document"  style="width:50%;" />
</p>


## 4.2 连通分量

计算给定图的连通分量，计算结果将合并到点属性上。

参数说明：

| 参数名称 | 必选 | 参数说明 |
| --- | --- | --- |
| 点属性名 | Y | 计算结果的点属性名，默认值为 @ConnectedComponet |

<p style="display:flex; gap:12px;">
    <img src="https://static.kasma.ai/document/202405271759774.png?x-oss-process=style/document"  style="width:50%;" />
</p>


## 4.3 强连通分量

计算给定图的强连通分量，计算结果将合并到点属性上。

参数说明：

| 参数名称 | 必选 | 参数说明 |
| --- | --- | --- |
| 点属性名 | Y | 计算结果的点属性名，默认值为 @StronglyConnectedCompone |

<p style="display:flex; gap:12px;">
    <img src="https://static.kasma.ai/document/202405271759775.png?x-oss-process=style/document"  style="width:50%;" />
</p>
