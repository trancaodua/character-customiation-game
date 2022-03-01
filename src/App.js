import React, { useState, useEffect } from "react";
import "./styles.css";
import Avatar from "./components/Avatar";
import PartList from "./components/PartList";

const bodyList = { url: "./character/body/", total: 17 };
const eyesList = { url: "./character/eyes/", total: 24 };
const hairList = { url: "./character/hair/", total: 73 };
const mouthList = { url: "./character/mouths/", total: 24 };
const eyesbrowsList = { url: "./character/eyebrows/", total: 15 };
const glassList = { url: "./character/accessories/glasses/", total: 17 };
const clothingL1List = { url: "./character/clothes/layer_1/", total: 5 };
const clothingL2List = { url: "./character/clothes/layer_2/", total: 5 };
const clothingL3List = { url: "./character/clothes/layer_3/", total: 9 };

function App() {
    const [body, setBody] = useState(0);
    const [eyes, setEyes] = useState(0);
    const [hair, setHair] = useState(0);
    const [mouth, setMouth] = useState(0);
    const [eyesbrows, setEyesbrows] = useState(0);
    const [glasse, setGlasse] = useState(0);
    const [clothingL1, setClothingL1] = useState(0);
    const [clothingL2, seClothingL2] = useState(0);
    const [clothingL3, setClothingL3] = useState(0);

    const randomInteger = (max) => {
        return Math.floor(Math.random() * max) + 1;
    };

    const randomize = () => {
        setBody(`${bodyList.url}${randomInteger(bodyList.total)}.png`);
        setEyes(`${eyesList.url}${randomInteger(eyesList.total)}.png`);
        setHair(`${hairList.url}${randomInteger(hairList.total)}.png`);
        setMouth(`${mouthList.url}${randomInteger(mouthList.total)}.png`);
        setEyesbrows(`${eyesbrowsList.url}${randomInteger(eyesbrowsList.total)}.png`);
        setGlasse(`${glassList.url}${randomInteger(glassList.total)}.png`);
        setClothingL1(`${clothingL1List.url}${randomInteger(clothingL1List.total)}.png`);
        seClothingL2(`${clothingL2List.url}${randomInteger(clothingL2List.total)}.png`);
        setClothingL3(`${clothingL3List.url}${randomInteger(clothingL3List.total)}.png`);
    };

    useEffect(randomize, []);

    return (
        <div>
            <header className="introduction">
                <div className="title">CHARACTER</div>
                <div className="subtitle">🛠️CUSTOMIZATION🛠️</div>
                <div className="divider"></div>
            </header>
            <div className="main">
                <Avatar
                    body={body}
                    eyes={eyes}
                    hair={hair}
                    mouth={mouth}
                    eyesbrows={eyesbrows}
                    glasse={glasse}
                    clothingL1={clothingL1}
                    clothingL2={clothingL2}
                    clothingL3={clothingL3}
                    nose={"./character/noses/1.png"}
                    randomize={randomize}
                />
                <div>
                    <PartList
                        title="Body"
                        height="60"
                        style={{ top: "50%" }}
                        data={bodyList}
                        set={setBody}
                        selected={body}
                    />
                    <PartList
                        title="Eyes"
                        height="150"
                        style={{ top: "35px" }}
                        data={eyesList}
                        set={setEyes}
                        selected={eyes}
                    />
                    <PartList
                        title="Hair"
                        height="60"
                        style={{ top: "50%" }}
                        data={hairList}
                        set={setHair}
                        selected={hair}
                    />
                    <PartList
                        title="Mouth"
                        height="120"
                        style={{ top: "50%" }}
                        data={mouthList}
                        set={setMouth}
                        selected={mouth}
                    />
                    <PartList
                        title="Eyebrows"
                        height="60"
                        style={{ top: "50%" }}
                        data={eyesbrowsList}
                        set={setEyesbrows}
                        selected={eyesbrows}
                    />
                    <PartList
                        title="Glasses"
                        height="60"
                        style={{ top: "50%" }}
                        data={glassList}
                        set={setGlasse}
                        selected={glasse}
                    />
                    <PartList
                        title="Clothing (L1)"
                        height="60"
                        style={{ top: "50%" }}
                        data={clothingL1List}
                        set={setClothingL1}
                        selected={clothingL1}
                    />
                    <PartList
                        title="Clothing (L2)"
                        height="60"
                        style={{ top: "50%" }}
                        data={clothingL2List}
                        set={seClothingL2}
                        selected={clothingL2}
                    />
                    <PartList
                        title="Clothing (L3)"
                        height="120"
                        style={{ top: "-15px" }}
                        data={clothingL3List}
                        set={setClothingL3}
                        selected={clothingL3}
                    />
                </div>
            </div>
            <footer className="footer">tran cao dua</footer>
        </div>
    );
}

export default App;
