export default function numberReducer(state, action) {
    switch (action.type) {
        case 'number_add_2':
            return {...state, number: state.number + 2}
        case 'number_multi_7':
            return {...state, number: state.number * 7}
        case 'number_div_25':
            return {...state, number: state.number / 25}
        case 'number_int':
            return {...state, number: parseInt(state.number)}
        case 'number_add_n':
            return {...state, number: state.number + action.payload}
        default:
            return state
    }
}
