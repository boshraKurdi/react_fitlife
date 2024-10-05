import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { LoginScema } from '../index'
import { ActAuthLogin } from "../Redux/Auth/AuthSlice";
import { useDispatch, useSelector } from "react-redux";
const UseLogin = () => {
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
    window.location.pathname = "/";
    }).catch(()=>{})
    return () => {
    promise.abort();
  }
}
  return { register , handleSubmit , onSubmit , errors , error , loading , token }

}
export default UseLogin