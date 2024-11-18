import { useNavigate } from "react-router-dom";
import UseGetAddress from "./UseGetAddress";
import { useDispatch, useSelector } from "react-redux";
import { ActAuthUpdate } from "../../Redux/Auth/AuthSlice";
import { SetOpen } from "../../Redux/Mode/ModeSlice";
export default function UseInformation({setBox, state, setState, form, setForm}){
    const dispatch = useDispatch();
    const nav = useNavigate()
    const { getLatALon , location , stats , setStats } = UseGetAddress({form, setForm});
    const { error , loading } = useSelector((state) => state.auth)
    function ChangeSetting() {
      setBox((prev) => !prev);
    }
    function HandelInput(e) {
      setForm({ ...form, [e.target.name]: e.target.value });
    }
    async function HandelSignUp(e) {
      e.preventDefault();
      let flag = false;
      let errors = {};
      setState({ ...state, loading: false });
  
      if (form.address === "") {
        errors.addressError = "the address is required";
      }
  
      if (Object.keys(errors).length > 0) {
        setForm({
          ...form,
          ...errors,
        });
        flag = true;
      } else {
        flag = false;
      }
      
      if (!flag) {
        const promise = dispatch(ActAuthUpdate(form)).unwrap().then(()=>{
         nav("/user");
         dispatch(SetOpen({message:'Hello in our website fitlife!' , type:'success'}));
        }).catch(()=>{})
        return () => {
          promise.abort();
        }
      }
    }
    return { location , stats , setStats , error , loading , ChangeSetting , HandelInput , HandelSignUp , getLatALon}
}