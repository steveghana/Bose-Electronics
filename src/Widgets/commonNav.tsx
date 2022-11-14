import React from "react";

const CommonNav: React.FC<{ padding?: string }> = ({ padding }) => {
  return (
    <div className="music__nav">
      <ul className="music__nav-wrapper">
        <li className="music__nav-item">Quiet</li>
        <li className="music__nav-item">Soundlink</li>
        <li className="music__nav-item">Comfort</li>
        <li className="music__nav-item">Accesories</li>
        <li className="music__nav-paginate">
          <div>PREV</div>
          <div className="pagination">
            {new Array(3).fill("").map((item, i) => (
              <div>{i + 1}</div>
            ))}
          </div>
          <div>NEXT</div>
        </li>
      </ul>
    </div>
  );
};

export default CommonNav;
