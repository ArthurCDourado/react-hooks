import React, {useReducer} from 'react'
import PageTitle from '../../components/layout/PageTitle'
import {initialState} from "../../store";
import reducer from "../../store/reducers";
import { numberAdd2, login } from '../../store/actions'

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
                    <button className="btn" onClick={() => login(dispatch, 'Arthur')}>Login</button>
                    <button className="btn" onClick={() => numberAdd2(dispatch)}>+2</button>
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
