import React from "react"
import { useSelector } from "react-redux";

function ResCalc2(){
    const result = useSelector((state)=>{
        return state.calculator2;
    });

    return  <div className="divItem1">
        {
            result.result === null
                ?  <div className="textDiv1"><p>{result.text}</p></div>
                :   (
                        <div className="texts">
                            <div className="textItem1">
                                <p>{result.text}</p>
                            </div>
                            <div className="textItem2">
                                <p>{result.result}</p>
                            </div>
                        </div>
                    )
        }
        </div>
}

export default ResCalc2;