## 1.  GEXF Formt

[Gephi](https://gephi.org/) 图分析软件生成的图文件，[GEXF 参考文档](https://gephi.org/gexf/1.2draft/gexf-12draft-primer.pdf)。

## 2. 示例

```tsx
<?xml version='1.0' encoding='UTF-8'?>
<gexf xmlns="http://gexf.net/1.3" version="1.3" xmlns:viz="http://gexf.net/1.3/viz" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://gexf.net/1.3 http://gexf.net/1.3/gexf.xsd">
  <meta lastmodifieddate="2023-11-15">
    <creator>Gephi 0.10.1</creator>
    <title></title>
    <description></description>
  </meta>
  <graph defaultedgetype="directed" mode="static">
    <nodes>
      <node id="Jean Valjean"/>
      <node id="Javert"/>
      <node id="Fantine"/>
      <node id="Cosette"/>
      <node id="Marius"/>
      <node id="Thenardier"/>
      <node id="Mme. Thenardier"/>
    </nodes>
    <edges>
      <edge id="0" source="Jean Valjean" target="Javert"/>
      <edge id="1" source="Jean Valjean" target="Fantine"/>
      <edge id="2" source="Fantine" target="Cosette"/>
      <edge id="3" source="Cosette" target="Marius"/>
      <edge id="4" source="Thenardier" target="Mme. Thenardier"/>
      <edge id="5" source="Fantine" target="Thenardier"/>
    </edges>
  </graph>
</gexf>
```

- `graph.gexf` ，点击下方下载文件

[graph.gexf](https://static.kasma.ai/document/graph.gexf)