`Ofnil` 支持 `JSON` 格式的图数据。

## 1. 格式说明

### 1.1 格式预览

- data *object* 图数据
    - `nodes` *array[object]* 点列表 *必选*
        - `id` *string* 点唯一Id *必选*
        - `properties` *object* 点属性 *可选*
            - `@name` *string* 点类型
            - `[key:string]` *boolean | number | string* 属性值
        - `x` *number* x坐标 *可选*
        - `y` *number* y坐标 *可选*
        - `z` *number* z坐标 *可选*
        - `color` *string* 点颜色 *可选*
        - `size` *string* 点大小 *可选*
    - `edges` *array[object]* 边列表
        - `id` *string* 边唯一Id *可选*
        - `properties` *object* 边属性 *可选*
            - `@name` *string* 边类型
            - `[key:string]` *boolean | number | string* 属性值
        - `source` *string* x坐标 *必选*
        - `target` *string* y坐标 *必选*
        - `color` *string* 点颜色 *可选*
        - `size` *string* 点大小 *可选*
        

### 2.2 `TypeScript` 类型

```tsx
/**
 * JSON Graph Data
 */
export interface GraphData {
  edges: Edge[];
  nodes: Node[];
}

/**
 * Properties
 */
export interface Properties {
  /**
   * 内置属性，表示点边类型
   */
  "@name": string;
  /**
   * 属性值，不支持对象和数组
   */
  [key: string]: boolean | number | string;
}

/**
 * Node
 */
export interface Node {
  /**
   * 点唯一Id
   */
  id: string;
  /**
   * 点属性
   */
  properties?: Properties;
  /**
   * 点颜色，兼容处理
   */
  color?: string;
  /**
   * 点大小，兼容处理
   */
  size?: number;
  /**
   * x 坐标
   */
  x?: number;
  /**
   * y 坐标
   */
  y?: number;
  /**
   * z 坐标
   */
  z?: number;
}

/**
 * Edge
 */
export interface Edge {
  /**
   * 边唯一Id
   */
  id?: string;
  /**
   * 起点Id
   */
  source: string;
  /**
   * 终点Id
   */
  target: string;
  /**
   * 边属性
   */
  properties?: Properties;
  /**
   * 边颜色
   */
  color?: string;

  /**
   * 边大小
   */
  size?: number;
}
```

## 2. 示例

`graph.json` ，点击下方下载文件

[graph.json](https://static.kasma.ai/document/graph.json)

- 文件内容

```bash
{
  "nodes": [
    {
      "id": "Jean Valjean",
      "properties": {
        "group": 1,
        "name": "Jean Valjean",
        "description": "The protagonist of the story.",
        "birthYear": 1769
      }
    },
    {
      "id": "Javert",
      "properties": {
        "group": 2,
        "name": "Javert",
        "description": "The relentless police inspector.",
        "birthYear": 1780
      }
    },
    {
      "id": "Fantine",
      "properties": {
        "group": 3,
        "name": "Fantine",
        "description": "Cosette's mother.",
        "birthYear": 1796
      }
    },
    {
      "id": "Cosette",
      "properties": {
        "group": 3,
        "name": "Cosette",
        "description": "Fantine's daughter.",
        "birthYear": 1815
      }
    },
    {
      "id": "Marius",
      "properties": {
        "group": 4,
        "name": "Marius Pontmercy",
        "description": "A young revolutionary.",
        "birthYear": 1809
      }
    },
    {
      "id": "Thenardier",
      "properties": {
        "group": 5,
        "name": "Thenardier",
        "description": "A dishonest innkeeper.",
        "birthYear": 1776
      }
    },
    {
      "id": "Mme. Thenardier",
      "properties": {
        "group": 5,
        "name": "Mme. Thenardier",
        "description": "Thenardier's wife.",
        "birthYear": 1786
      }
    }
  ],
  "edges": [
    {
      "source": "Jean Valjean",
      "target": "Javert",
      "properties": {
        "value": 1
      }
    },
    {
      "source": "Jean Valjean",
      "target": "Fantine",
      "properties": {
        "value": 1
      }
    },
    {
      "source": "Fantine",
      "target": "Cosette",
      "properties": {
        "value": 2
      }
    },
    {
      "source": "Cosette",
      "target": "Marius",
      "properties": {
        "value": 3
      }
    },
    {
      "source": "Thenardier",
      "target": "Mme. Thenardier",
      "properties": {
        "value": 1
      }
    },
    {
      "source": "Fantine",
      "target": "Thenardier",
      "properties": {
        "value": 2
      }
    }
  ]
}
```

- 表格预览-点

| id | group | description | birthYear |
| --- | --- | --- | --- |
| Jean Valjean | 1 | The protagonist of the story. | 1769 |
| Javert | 2 | The relentless police inspector. | 1780 |
| Fantine | 3 | Cosette's mother. | 1796 |
| Cosette | 3 | Fantine's daughter. | 1815 |
| Marius | 4 | A young revolutionary. | 1809 |
| Thenardier | 5 | A dishonest innkeeper. | 1776 |
| Mme. Thenardier | 5 | Thenardier's wife. | 1786 |

- 表格预览-边

| source | target | value |
| --- | --- | --- |
| Jean Valjean | Javert | 1 |
| Jean Valjean | Fantine | 1 |
| Fantine | Cosette | 2 |
| Cosette | Marius | 3 |
| Thenardier | Mme. Thenardier | 1 |
| Fantine | Thenardier | 2 |