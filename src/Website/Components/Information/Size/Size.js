import WidthNormalIcon from "@mui/icons-material/WidthNormal";
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import HeightIcon from "@mui/icons-material/Height";
export default function Size({ setBox, state, setState, form, setForm }) {
  const regex = /^[0-9]+$/;
  function ChangeSetting(e) {
    e.preventDefault();
    let flag = false;
    let errors = {};
    setState({ ...state, loading: false });
    if (!regex.test(form.width) || !regex.test(form.height)) {
      if (form.width === "") {
        errors.widthError = "the width is required";
      } else if (!regex.test(form.width)) {
        errors.widthError = "the width must be numbers";
      }
      if (form.height === "") {
        errors.heightError = "the height is required";
      } else if (!regex.test(form.height)) {
        errors.heightError = "the height must be numbers";
      }
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
      setBox((prev) => !prev);
    }
  }
  function HandelInput(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  return (
    <form className="login__create login__create_size" id="login-up">
      <h1 className="login__title">Create Account</h1>
      <div className="box_flex">
        <div className="box">
          <div className={form.widthError !== "" && (form.width === "" || !regex.test(form.width)) ? "inputError login__box" : 'login__box'}>
            <WidthNormalIcon style={{color :form.widthError !== "" && (form.width === "" || !regex.test(form.width)) && '#e35858'}} className="bx bx-at login__icon" />
            <input
              type="text"
              name="width"
              value={form.width}
              onChange={(e) => {
                HandelInput(e);
              }}
              placeholder="Width"
              className="login__input"
            />
          </div>
          <p
            style={{
              opacity:
                form.widthError !== "" &&
                (form.width === "" || !regex.test(form.width))
                  ? 1
                  : 0,
            }}
            className="error"
          >
            {form.widthError}
          </p>
        </div>
        <div className="box">
          <div className={form.heightError !== "" && (form.height === "" || !regex.test(form.height)) ? "inputError login__box" : 'login__box'}>
            <HeightIcon style={{color: form.heightError !== "" && (form.height === "" || !regex.test(form.height)) && '#e35858'}} className="bx bx-at login__icon" />
            <input
              type="text"
              name="height"
              value={form.height}
              onChange={(e) => {
                HandelInput(e);
              }}
              placeholder="Height"
              className="login__input"
            />
          </div>
          <p
            style={{
              opacity:
                form.heightError !== "" &&
                (form.height === "" || !regex.test(form.height))
                  ? 1
                  : 0,
            }}
            className="error"
          >
            {form.heightError}
          </p>
        </div>
        <div className="mydict">
          <div>
            <label>
              <input type="radio" name="" checked />
              <span>Women</span>
            </label>
            <label>
              <input type="radio" name="radio" />
              <span>Men</span>
            </label>
          </div>
        </div>
      </div>
      <button onClick={ChangeSetting} className="login__button next">
      <KeyboardDoubleArrowLeftIcon />  Next
      </button>
    </form>
  );
}
