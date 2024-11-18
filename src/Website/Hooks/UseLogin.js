import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { LoginScema } from '../index'
import { ActAuthLogin } from "../../Redux/Auth/AuthSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { SetOpen } from "../../Redux/Mode/ModeSlice";
const UseLogin = () => {
  const nav = useNavigate();
     // call dispatch
  const dispatch = useDispatch();
  const { error , loading , token } = useSelector((state) => state.auth)
  // call react hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
} = useForm({
    mode: "onBlur",
    resolver: zodResolver(LoginScema),
});
// submit form login
const onSubmit = async (data) => {
  
  const promise = dispatch(ActAuthLogin(data)).unwrap().then(()=>{
    nav('/user' , {replace: true})
    dispatch(SetOpen({message:'login successfully!' , type: 'success'}));
    }).catch(()=>{})
    return () => {
    promise.abort();
  }
}
  return { register , handleSubmit , onSubmit , errors , error , loading , token }

}
export default UseLogin