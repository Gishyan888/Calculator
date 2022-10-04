import React, {useState, useEffect} from "react";
import { useDispatch } from 'react-redux';
import { updateText, backText, getResult, cleaR, getResultCos, getResultSin, getResultLog, getResultFac } from "../../../redux/slice/calcSlice/CalcReducer";
import "../../../scss/calc.scss";
import ResCalc1 from "./resultCalc";

function Calc(){
    const dispatch = useDispatch();

    return (
        <div className="calcDiv">
            <div className="calcMain">
                <ResCalc1 />
                <div className="divItem2">
                    <div className="btnItem1">
                        <div className="btnItem">
                            <div onClick={()=>{dispatch(getResultFac())}} >F</div>
                            <div onClick={()=>{dispatch(getResultLog())}} >log</div>
                            <div onClick={()=>{dispatch(getResultSin())}} >sin</div>
                        </div>
                        <div className="btnItem">
                            <div onClick={()=>{dispatch(cleaR())}} id="blueText">AC</div>
                            <div onClick={()=>{dispatch(backText())}} ><i className="fas fa-backspace" id="vector" ></i></div>
                            <div id="boxShadow" onClick={()=>{dispatch(updateText("/"))}}>/</div>
                        </div>
                        <div className="btnItem">
                            <div onClick={()=>{dispatch(updateText("7"))}} >7</div>
                            <div onClick={()=>{dispatch(updateText("8"))}} >8</div>
                            <div onClick={()=>{dispatch(updateText("9"))}} >9</div>
                        </div>
                        <div className="btnItem">
                            <div onClick={()=>{dispatch(updateText("4"))}} >4</div>
                            <div onClick={()=>{dispatch(updateText("5"))}} >5</div>
                            <div onClick={()=>{dispatch(updateText("6"))}} >6</div>
                        </div>
                        <div className="btnItem">
                            <div onClick={()=>{dispatch(updateText("1"))}} >1</div>
                            <div onClick={()=>{dispatch(updateText("2"))}} >2</div>
                            <div onClick={()=>{dispatch(updateText("3"))}} >3</div>
                        </div>
                        <div className="btnItem">
                            <div  onClick={()=>{dispatch(updateText("0"))}} >0</div>
                            <div  onClick={()=>{dispatch(updateText("."))}} >.</div>
                        </div>
                    </div>
                    <div className="btnItem2">
                        <div className="btnItem">
                            <div onClick={()=>{dispatch(getResultCos())}} >cos</div>
                        </div>
                        <div className="btnItem">
                            <div onClick={()=>{dispatch(updateText("*"))}} id="blueText" >*</div>
                        </div>
                        <div className="btnItem">
                            <div onClick={()=>{dispatch(updateText("-"))}} id="blueText" >-</div>
                        </div>
                        <div className="btnItem"><div onClick={()=>{dispatch(updateText("+"))}} id="blueText" >+</div></div>
                        <div className="btnItem"><div onClick={()=>{dispatch(getResult())}}>=</div></div>                       
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Calc;