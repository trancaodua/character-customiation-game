import React from "react";

function PartItem({ src, height, style, set, selected }) {
    return (
        <div className={"clickable square " + (selected ? "selected" : "")}>
            <img src={src} alt="" height={height} className="img-center" style={style} onClick={() => set(src)} />
        </div>
    );
}

export default PartItem;
