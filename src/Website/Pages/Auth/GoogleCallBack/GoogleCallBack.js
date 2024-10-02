import axios from "axios";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { GOOGLE_CALL_BACK } from "../../../../Api/Api";
import Loading from "../../../Components/Loading/Loading";
import { useDispatch } from "react-redux";
import { SetAuth } from "../../../Redux/Auth/AuthSlice";
export default function GoogleCallBack(){
    const dispatch = useDispatch()
    const location = useLocation()
    useEffect(()=>{
        async function GoogleCall(){
            try {
                const res = await axios.get(`/${GOOGLE_CALL_BACK}${location.search}`)
                dispatch(SetAuth(res.data.access_token))
                if (res.data.status === 'login') {
                    window.location.pathname = "/";  
                }else{
                    window.location.pathname = "/information";
                } 
            } catch (error) {
                console.log(error)     
                window.location.pathname = '/login'       
            }
        }
        GoogleCall();
    } , [location ,dispatch])
    return <Loading />
}