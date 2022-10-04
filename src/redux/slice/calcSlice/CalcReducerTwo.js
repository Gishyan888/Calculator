import CorrectValue from "./plugins/correctValue";
import Corr from "./plugins/corr";

export function calculator2(state={}, action){
    if(action.type === "updateTextTwo"){
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
    }else if(action.type === "backTextTwo"){
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
    }else if(action.type === "getResultTwo"){
        let res = "=" + eval(state.text);
        let val = {
            ...state,
            result: CorrectValue(res),  
        };
        return val;
    }else if(action.type === "cleaRTwo"){
        let res = {
            result: null,
            text: "",
        };
        return res;
    }else if(action.type === "getResultCosTwo"){
        let res = {
            result: "=" + Corr(Math.cos(eval(state.text))),
            text: "cos(" + state.text + ")",
        };
        return res;
    }else if(action.type === "getResultSinTwo"){
        let res = {
            result: "=" + Corr(Math.sin(eval(state.text))),
            text: "sin(" + state.text + ")",
        };
        return res;
    }else if(action.type === "getResultLogTwo"){
        let res = {
            result: "=" + Corr(Math.log(eval(state.text))),
            text: "log(" + state.text + ")",
        };
        return res;
    }else if(action.type === "getResultFacTwo"){
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

export const initalCalculator2 = {
    text:"",
    result: null,
};

export function updateTextTwo(txt){
    return {
        type: "updateTextTwo",
        payload: {
            key: txt,
        }
    }
}

export function backTextTwo(){
    return{
        type: "backTextTwo",
        payload:{}
    }
}

export function cleaRTwo(){
    return {
        type: "cleaRTwo",
        payload: {}
    }
}

export function getResultTwo(){
    return {
        type: "getResultTwo",
        payload: {}
    }
}

export function getResultCosTwo(){
    return {
        type: "getResultCosTwo",
        payload:{}
    }
}

export function getResultSinTwo(){
    return {
        type: "getResultSinTwo",
        payload:{}
    }
}

export function getResultLogTwo(){
    return {
        type: "getResultLogTwo",
        payload:{}
    }
}

export function getResultFacTwo(){
    return {
        type: "getResultFacTwo",
        payload:{}
    }
}