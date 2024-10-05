import axios from "axios";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { GOOGLE_CALL_BACK } from "../../../../Api/Api";
import Loading from "../../../Components/Loading/Loading";
import { useDispatch } from "react-redux";
import { SetAuth } from "../../../Redux/Auth/AuthSlice";
export default function GoogleCallBack(){
    const dispatch = useDispatch()
    const location = useLocation()
    const nav = useNavigate()
    useEffect(()=>{
        async function GoogleCall(){
            try {
                const res = await axios.get(`/${GOOGLE_CALL_BACK}${location.search}`)
                dispatch(SetAuth(res.data.access_token))
                if (res.data.status === 'login') {
                   nav("/");  
                }else{
                   nav("/information");
                } 
            } catch (error) {
                console.log(error)     
                nav('/login')       
            }
        }
        GoogleCall();
    } , [location ,dispatch , nav])
    return <Loading />
}