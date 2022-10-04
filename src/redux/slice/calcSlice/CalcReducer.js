import CorrectValue from "./plugins/correctValue";
import Corr from "./plugins/corr";

export function calculator1(state={}, action){
    if(action.type === "updateText"){
        let sim = state.text.substring((state.text.length -1), state.text.length);
        if((sim === "+" || sim === "-" || sim === "*" || sim === "/") && (action.payload.key === "+" || action.payload.key === "-" || action.payload.key === "*" || action.payload.key === "/")){
            if(state.result === null){
                var txt = {
                    ...state,
                    text: state.text.substring(0, (state.text.length - 1)) + action.payload.key,
                };
            }else{
                var txt = {
                    result: null,
                    text: action.payload.key,
                };
            }
            return txt;
        }else{
            if(state.result === null){
               var text = {
                    ...state,
                    text: state.text + action.payload.key,
                }; 
            }else{
                var text = {
                    result: null,
                    text: action.payload.key,
                };
            }  
            return text;
        }
    }else if(action.type === "backText"){
        let x = state.text.substring(0, 3);
        if(x === "sin" || x === "cos" || x === "log" || x === "fac"){
            let text = {
                result: null,
                text: state.text.substring(4, (state.text.length -1)),
            };
            return text;
        }else{
            let text = {
                result: null,
                text: state.text.substring(0, (state.text.length -1)),
            };
            return text;
        }
    }else if(action.type === "getResult"){
        let val = {
            ...state,
            result: "=" + CorrectValue(eval(state.text)), 
        };
        return val;
    }else if(action.type === "cleaR"){
        let res = {
            result: null,
            text: "",
        };
        return res;
    }else if(action.type === "getResultCos"){
        let res = {
            result: "=" + Corr(Math.cos(eval(state.text))),
            text: "cos(" + state.text + ")",
        };
        return res;
    }else if(action.type === "getResultSin"){
        let res = {
            result: "=" + Corr(Math.sin(eval(state.text))),
            text: "sin(" + state.text + ")",
        };
        return res;
    }else if(action.type === "getResultLog"){
        let res = {
            result: "=" + Corr(Math.log(eval(state.text))),
            text: "log(" + state.text + ")",
        };
        return res;
    }else if(action.type === "getResultFac"){
        var x = eval(state.text);
        var y = 1;
        factorial();
        function factorial(){
            if(1 < x){
                y = y * x;
                x--;
                factorial();
            }else{
                return;
            }
        }
        let res = {
            result: "=" + CorrectValue(y),
            text: "fac(" + state.text + ")",
        };
        return res;
    }
    return state;
}

export const initalCalculator1 = {
    text:"",
    result: null,
};

export function updateText(txt){
    return {
        type: "updateText",
        payload: {
            key: txt,
        }
    }
}

export function backText(){
    return{
        type: "backText",
        payload:{}
    }
}

export function cleaR(){
    return {
        type: "cleaR",
        payload: {}
    }
}

export function getResult(){
    return {
        type: "getResult",
        payload: {}
    }
}

export function getResultCos(){
    return {
        type: "getResultCos",
        payload:{}
    }
}

export function getResultSin(){
    return {
        type: "getResultSin",
        payload:{}
    }
}

export function getResultLog(){
    return {
        type: "getResultLog",
        payload:{}
    }
}

export function getResultFac(){
    return {
        type: "getResultFac",
        payload:{}
    }
}