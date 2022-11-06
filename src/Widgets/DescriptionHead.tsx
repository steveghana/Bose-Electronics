import React from "react";

const DescriptionHead: React.FC<{ Head: string }> = ({ Head }) => {
  return (
    <div className="description__header">
      <h4>{Head}</h4>
      <div>Lorem ipsum</div>
    </div>
  );
};

export default DescriptionHead;
