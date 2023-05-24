import { constants } from './constants';

const INITIALSTATE = {
    // example: JSON.parse(localStorage.getItem('example')) || [],

};

export function session(state = INITIALSTATE, action) {
    const nextState = { ...state };
    // if (state.clearance != "admin") {
        // localStorage.removeItem("example")
    // }
    switch (action.type) {
        // case constants.exampleSUCCESS:
        //     localStorage.setItem('example', JSON.stringify(action.example));
        //     return { ...state, example: action.example }
        default:
            return state;
    }
}
