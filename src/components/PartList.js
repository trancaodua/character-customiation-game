import React from "react";
import PartItem from "./PartItem";

function PartList({ title, style, height, data, set, selected }) {
    const urlList = [];
    for (let i = 1; i <= data.total; i++) {
        urlList.push(`${data.url}${i}.png`);
    }
    return (
        <div className="list-section">
            <h2>{title}</h2>
            <div className="list">
                {urlList.map((element) => (
                    <PartItem
                        key={element}
                        src={element}
                        height={height}
                        style={style}
                        set={set}
                        selected={selected === element}
                    />
                ))}
            </div>
        </div>
    );
}

export default PartList;
