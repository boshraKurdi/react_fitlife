import './Auth.css';
import imgAuth from '../../../img/img-login.svg'
import {Loading, Login , SignUp} from '../../index'
import { useState } from 'react';
export default function Auth(){
    const [state , setState] = useState({loading: false , errorValue: false});
    const [box , setBox] = useState(true)
    return(
        state.loading ?
        <Loading />
        : 
        <div className="login">
        <div className="login__content">
            <div className="login__img">
                <img src={imgAuth} alt="" />
            </div>
            <div className="login__forms">
                {box ? <Login state={state} setState={setState} setBox={setBox}/> : <SignUp state={state} setState={setState} setBox={setBox} /> }
            </div>
        </div>
    </div>
    )
}