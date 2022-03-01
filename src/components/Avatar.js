import React from "react";

function Avatar({ body, eyes, hair, clothingL1, clothingL2, clothingL3, mouth, nose, eyesbrows, glasse, randomize }) {
    return (
        <div className="avatar-wrapper">
            <div className="avatar">
                <img src={body} alt="" className="img" style={{ zIndex: 0 }} />
                <img src={eyes} alt="" className="img" style={{ zIndex: 1 }} />
                <img src={hair} alt="" className="img" style={{ zIndex: 6 }} />
                <img src={clothingL1} alt="" style={{ zIndex: 2 }} />
                <img src={clothingL2} alt="" className="img" style={{ zIndex: 3 }} />
                <img src={clothingL3} alt="" className="img" style={{ zIndex: 4 }} />
                <img src={mouth} alt="" className="img" style={{ zIndex: 4 }} />
                <img src={nose} alt="" className="img" style={{ zIndex: 4 }} />
                <img src={eyesbrows} alt="" className="img" style={{ zIndex: 4 }} />
                <img src={glasse} alt="" className="img" style={{ zIndex: 5 }} />
            </div>
            <button
                onClick={() => {
                    randomize();
                }}
            >
                RANDOMIZE
            </button>
        </div>
    );
}

export default Avatar;
