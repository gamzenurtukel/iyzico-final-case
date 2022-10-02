import React from "react";
import Lottie from 'react-lottie';
import notFound from "../lottie/notFound.json"

function NotFound() {

    return (
        <div>
            <Lottie
                height={700}
                width={800}
                options={{
                    animationData: notFound,
                    loop: true,
                    autoplay: true,
                }}
            />
        </div>
    );
}
export default NotFound;