import React from "react";
import Lottie from 'react-lottie';
import lf30_editor_j15qrcmh from "../lottie/lf30_editor_j15qrcmh.json"

function Home() {
    return (
        <div>
            <h2 style={{ color: "#1890ff", fontSize: "30px" }}>WELCOME TO STARSHIPS PAGE</h2>
            <p style={{ fontWeight: "500" }}>
                Click "starships list" for a list of starships.
            </p>
            <br />
            <Lottie
                height={500}
                width={500}
                options={{
                    animationData: lf30_editor_j15qrcmh,
                    loop: true,
                    autoplay: true,
                }}
            />
        </div>
    );
};
export default Home;