import React, {useState, useEffect} from "react";
import { useDispatch } from 'react-redux';
import { updateTextTwo, backTextTwo, getResultTwo, cleaRTwo, getResultCosTwo, getResultSinTwo, getResultLogTwo, getResultFacTwo } from "../../../redux/slice/calcSlice/CalcReducerTwo";
import "../../../scss/calc.scss";
import ResCalc2 from "./resultCalc";

function CalcDark(){
    const dispatch = useDispatch();

    return (
        <div className="calcDiv" id="darkBg">
            <div className="calcMain">
                <ResCalc2 />
                <div className="divItem2">
                    <div className="btnItem1">
                        <div className="btnItem">
                            <div onClick={()=>{dispatch(getResultFacTwo())}} >F</div>
                            <div onClick={()=>{dispatch(getResultLogTwo())}} >log</div>
                            <div onClick={()=>{dispatch(getResultSinTwo())}} >sin</div>
                        </div>
                        <div className="btnItem">
                            <div onClick={()=>{dispatch(cleaRTwo())}} id="blueText">AC</div>
                            <div onClick={()=>{dispatch(backTextTwo())}} ><i className="fas fa-backspace" id="vector" ></i></div>
                            <div id="boxShadow" onClick={()=>{dispatch(updateTextTwo("/"))}}>/</div>
                        </div>
                        <div className="btnItem">
                            <div onClick={()=>{dispatch(updateTextTwo("7"))}} >7</div>
                            <div onClick={()=>{dispatch(updateTextTwo("8"))}} >8</div>
                            <div onClick={()=>{dispatch(updateTextTwo("9"))}} >9</div>
                        </div>
                        <div className="btnItem">
                            <div onClick={()=>{dispatch(updateTextTwo("4"))}} >4</div>
                            <div onClick={()=>{dispatch(updateTextTwo("5"))}} >5</div>
                            <div onClick={()=>{dispatch(updateTextTwo("6"))}} >6</div>
                        </div>
                        <div className="btnItem">
                            <div onClick={()=>{dispatch(updateTextTwo("1"))}} >1</div>
                            <div onClick={()=>{dispatch(updateTextTwo("2"))}} >2</div>
                            <div onClick={()=>{dispatch(updateTextTwo("3"))}} >3</div>
                        </div>
                        <div className="btnItem">
                            <div  onClick={()=>{dispatch(updateTextTwo("0"))}} >0</div>
                            <div  onClick={()=>{dispatch(updateTextTwo("."))}} >.</div>
                        </div>
                    </div>
                    <div className="btnItem2">
                        <div className="btnItem" id="btns">
                            <div onClick={()=>{dispatch(getResultCosTwo())}} >cos</div>
                        </div>
                        <div className="btnItem">
                            <div onClick={()=>{dispatch(updateTextTwo("*"))}} id="blueText" >*</div>
                        </div>
                        <div className="btnItem">
                            <div onClick={()=>{dispatch(updateTextTwo("-"))}} id="blueText" >-</div>
                        </div>
                        <div className="btnItem"><div onClick={()=>{dispatch(updateTextTwo("+"))}} id="blueText" >+</div></div>
                        <div className="btnItem"><div onClick={()=>{dispatch(getResultTwo())}}>=</div></div>                       
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CalcDark;