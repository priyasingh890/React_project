
import "./style.css";
import Showcolor from "./showcolor";
import { useState } from "react";
import colors from "./datas"; // Ensure this imports the correct structure

const Three_different_color = () => {
    const [Dcolor, setDcolor] = useState("#5a9c2f");
    const [Colorname, setColorname] = useState("HEX");
    const [index, setIndex] = useState(0); // Index to track current color

    const hex_handler = () => {
        setColorname("HEX");
        setDcolor(colors[index].HEX);
    };

    const rgb_handler = () => {
        setColorname("RGB");
        const rgbColor = colors[index].RGB;
        if (rgbColor) {
            setDcolor(`rgb(${rgbColor[0]}, ${rgbColor[1]}, ${rgbColor[2]})`);
        } else {
            console.error("RGB value is undefined");
        }
    };

    const color_name = () => {
        setColorname("Color Name");
        setDcolor(colors[index].ColorName);
    };

    const body = {
        height: '100vh',
        background: Dcolor,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
    };

    const changeIndex = () => {
        setIndex((prevIndex) => {
            const newIndex = (prevIndex + 1) % colors.length;
            console.log((prevIndex + 1) % colors.length);
            return newIndex;
        });
    };
    console.log(colors[1].RGB)
    return (
        <div style={body}>
            <div className="box">
                <button className="button" onClick={() => { hex_handler(); changeIndex(); }}>Create HEX color</button>
                <button className="button" onClick={() => { rgb_handler(); changeIndex(); }}>Create RGB color</button>
                <button className="button" onClick={() => { color_name(); changeIndex(); }}>Create color</button>
                <Showcolor diffrentColor={Dcolor} differentColorName={Colorname} />
            </div>
        </div>
    );
};

export default Three_different_color;
