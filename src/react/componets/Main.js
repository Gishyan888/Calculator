import React, {useEffect} from "react";
import "../../scss/style.scss";
import imgHead from "../../images/X-6.png";
import imgFoot from "../../images/X-7.png";
import Logoui from "../../images/Logoui.png";
import Calc from "./calc1/calculator";
import CalcDark from "./calc2/calculatorDark";

function Main(){
    useEffect(() => {
        document.title = "Calculator"
     }, []);

    return (
        <div className="mainDiv">
            <div className="globalFlexDivs">
                <img src={imgHead} className="imgHead"></img>
            </div>
            <div className="globalFlexDivs">
                <div className="div1">
                    <div className="frame8">6</div>
                    <div className="circle1"></div>
                    <div className="logDiv">
                        <img src={Logoui}></img>
                        <p className="big">BIG SUR</p>
                        <div className="v">v1.0</div>
                    </div>
                    <div className="txtDiv">
                         <div><div>DESIGN FREEBIE</div></div>
                         <div>
                            Freebie: Calculator<br/>
                            App User Interface<br/>
                            Design. 🚀
                         </div>
                    </div>
                </div>
                <div className="div2">
                    <div className="bigCircle">
                        <Calc/>
                        <div className="boxShadowCalc"></div>
                        <CalcDark />
                        <div className="boxShadowCalcDark"></div>
                    </div>
                    <div className="circle2"></div>
                </div>
            </div>
            <div className="globalFlexDivs">
                <div className="circle3"></div>
                <div className="frame9">6</div>
                <div className="divImg">
                    <img src={imgFoot} className="imgFoot"></img>
                </div>
            </div>           
        </div>
    )
}

export default Main;