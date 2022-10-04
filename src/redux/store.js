import { createStore, combineReducers, applyMiddleware } from "redux";
import { initalCalculator1, calculator1 } from "./slice/calcSlice/CalcReducer";
import { initalCalculator2, calculator2 } from "./slice/calcSlice/CalcReducerTwo";

const store = createStore(combineReducers({
    calculator1,
    calculator2,
}), {
    calculator1: initalCalculator1,
    calculator2: initalCalculator2,
});

export default store;