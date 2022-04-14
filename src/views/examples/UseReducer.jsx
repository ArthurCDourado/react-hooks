import React, {useReducer} from 'react'
import PageTitle from '../../components/layout/PageTitle'

const initialState = {
    cart: [],
    products: [],
    user: null,
    number: 0
}

function reducer(state, action) {
    switch (action.type) {
        case 'number_add_2':
            return {...state, number: state.number + 2}
        case 'login':
            return {...state, user: { name: action.payload }}
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

const UseReducer = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Uma outra forma de ter estado em componentes funcionais!"
            />

            <div className="center">
                {state.user ? <span className="text">{state.user.name}</span> : <span className="text">Sem Usuário</span>}

                <span className="text">{state.number}</span>
                <div>
                    <button className="btn" onClick={() => dispatch({type: 'login', payload: 'Arthur'})}>Login</button>
                    <button className="btn" onClick={() => dispatch({type: 'number_add_2'})}>+2</button>
                    <button className="btn" onClick={() => dispatch({type: 'number_multi_7'})}>* 7</button>
                    <button className="btn" onClick={() => dispatch({type: 'number_div_25'})}>/ 25</button>
                    <button className="btn" onClick={() => dispatch({type: 'number_int'})}>Int</button>
                    <button className="btn" onClick={() => dispatch({type: 'number_add_n', payload: 11})}>+11</button>
                </div>
            </div>
        </div>
    )
}

export default UseReducer
