import { todoReducer } from "../todoreducer"

export const useTodo = () => {
    const initialState =[]
    const [todos, dispacht] = useReducer(todoReducer, initialState, init)
    const handleNewTodo = todo => {
        const action = {
            type: "Add Todo",
            payload: todo,
        }
        dispacht(action)
    }
}