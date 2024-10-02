import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { SignUpScema , UseCheckEmail } from '../index'
import { ActAuthSignUp } from "../Redux/Auth/AuthSlice";
import { useDispatch, useSelector } from "react-redux";
const UseSignUp = () => {
    const dispatch = useDispatch();
    // call custem hooks
    const { status , enterEmail , checkEmail , ResetValue } = UseCheckEmail();
    const { error , loading , token } = useSelector((state) => state.auth)
    // call SignUpScema
    const {
      register,
      getFieldState ,
      trigger, 
      handleSubmit,
      formState: { errors },
  } = useForm({
      mode: "onBlur",
      resolver: zodResolver(SignUpScema),
  });
  // submit form sign up
  const onSubmit = async (data) => {
    dispatch(ActAuthSignUp(data)).unwrap().then(()=>{
      window.location.pathname = "/information";
    }).catch(()=>{})
  }
    // check if email exit 
    async function EmailOnBlurHandeler (e){
      await trigger('email')
      const value = e.target.value;
      const { isDirty , invalid } = getFieldState('email')
      console.log(isDirty , invalid)
      if (isDirty && !invalid && enterEmail !== value) {
        checkEmail(value)
      }
      if (enterEmail && isDirty && invalid) {
        ResetValue();
      }
    }
    return { EmailOnBlurHandeler , onSubmit , errors , handleSubmit , register , status , error , loading , token }
}
export default UseSignUp