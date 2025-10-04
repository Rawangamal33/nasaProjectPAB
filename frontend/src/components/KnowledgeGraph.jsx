import React from "react";
import ForceGraph2D from "react-force-graph-2d";

const KnowledgeGraph = () => {
  // Example data (you can hardcode it or load from a JSON file)
  const data = {
    nodes: [
      { id: "React", group: 1 },
      { id: "JavaScript", group: 1 },
      { id: "Frontend", group: 2 },
      { id: "GraphQL", group: 2 },
    ],
    links: [
      { source: "React", target: "JavaScript" },
      { source: "React", target: "Frontend" },
      { source: "GraphQL", target: "React" },
    ],
  };

  return (
    <div className="h-screen w-screen bg-[#fff]">
      <ForceGraph2D
        graphData={data}
        nodeAutoColorBy="group"
        linkDirectionalArrowLength={4}
        linkDirectionalArrowRelPos={1}
        nodeCanvasObject={(node, ctx, globalScale) => {
          const label = node.id;
          const fontSize = 12 / globalScale;
          ctx.font = `${fontSize}px Sans-Serif`;
          ctx.fillStyle = node.color;
          ctx.fillText(label, node.x + 8, node.y + 8);
        }}
      />
    </div>
  );
};

export default KnowledgeGraph;
