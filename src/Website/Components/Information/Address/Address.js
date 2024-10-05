import LocationOnIcon from "@mui/icons-material/LocationOn";
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { useDispatch, useSelector } from "react-redux";
import { ActAuthUpdate } from "../../../Redux/Auth/AuthSlice";
import CancelIcon from "@mui/icons-material/Cancel";
import ButtonLoading from "../../Loading/ButtonLoading/ButtonLoading";
import { useNavigate } from "react-router-dom";
export default function Address({ setBox, state, setState, form, setForm }) {
  const dispatch = useDispatch();
  const nav = useNavigate()
  const { error , loading } = useSelector((state) => state.auth)
  console.log(loading)
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
       nav("/");
      }).catch(()=>{})
      return () => {
        promise.abort();
      }
    }
  }
  return (
    <form onSubmit={HandelSignUp} className="login__create login__create_address" id="login-up">
      <h1 className="login__title">Create Account</h1>
      <div className="box_flex">
        <div className="box w-100">
          <div className={(form.addressError !== "" && form.address === "") ? "inputError login__box" : 'login__box'}>
            <LocationOnIcon style={{color: (form.addressError !== "" && form.address === "") && '#e35858'}} className="bx bx-at login__icon" />
            <input
              type="text"
              value={form.address}
              onChange={(e) => {
                HandelInput(e);
              }}
              name="address"
              placeholder="Address"
              className="login__input"
            />
          </div>
          <p
            style={{
              opacity: form.addressError !== "" && form.address === "" ? 1 : 0,
            }}
            className="error"
          >
            {form.addressError}
          </p>
        </div>
      </div>
      {error && (
        <span className="errorMessage">
          <CancelIcon style={{ marginRight: "15px", color: "#ff4900" }} />{" "}
          {error}
        </span>
      )}
      <div className="container_button">
        <button className="login__button">{loading === 'pending' ? <ButtonLoading /> : 'OK'}</button>
        <button onClick={ChangeSetting} className="login__button back">
        Back <KeyboardDoubleArrowRightIcon />
        </button>
      </div>
    </form>
  );
}
