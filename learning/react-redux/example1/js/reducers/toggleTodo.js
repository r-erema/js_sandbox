import {TOGGLE_TODO} from "../constants";

const toggleTodo = (id) => {
    return {
        type: TOGGLE_TODO,
        id
    };
};

export default toggleTodo;