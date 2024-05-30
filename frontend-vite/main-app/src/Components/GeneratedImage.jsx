import { useState } from "react";

function GeneratedImages({Images}){

    return(
        <>
            {Images && Images.map( (ImageData, index) => (
                <div key={index} className="m-5">
                    <img 
                    className="rounded-3xl" 
                    src={`data:image/png;base64,${ImageData.image}`} 
                    width={ImageData.width} 
                    height={ImageData.height} 
                    style={{
                        marginLeft: ImageData.margin.left,
                        marginTop: ImageData.margin.top,
                    }}/>
                </div>
               
            ) )}
        </>
    );
}

export {GeneratedImages};