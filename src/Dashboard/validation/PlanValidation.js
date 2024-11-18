import * as yup from "yup";
export default function PlanValidation(){
//     const phoneRegExp =
//   /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

  const checkoutSchema = yup.object().shape({
    title: yup.string().required("required"),
    description: yup.string().required("required"),
    duration: yup.string().required("required"),
    muscle: yup
    .string().required("required"),
    media: yup.mixed().required("required")
});
const initialValues = {
    title: "",
    description: "",
    duration: "",
    muscle: "",
    levels: '1' ,
    media: null
};
return {checkoutSchema , initialValues }
}
// duration: yup.string().email("invalid email").required("required"),
// muscle: yup
// .string()
// .matches(phoneRegExp, "Phone number is not valid")
// .required("required"),
// });