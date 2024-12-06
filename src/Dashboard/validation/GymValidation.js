import * as yup from "yup";
export default function GymValidation(){

  const checkoutSchema = yup.object().shape({
    name: yup.string().required("required"),
    description: yup.string().required("required"),
    description_ar: yup.string().required("required"),
    open: yup.string().required("required"),
    close: yup.string().required("required"),
    price: yup.string().required("required"),
    type: yup.string().required("required"),
    media: yup.mixed().required("required")
});
const initialValues = {
    name: "",
    description: "",
    description_ar: "",
    open: "",
    close: "",
    price: '' ,
    type: '' ,
    media: null
};
return {checkoutSchema , initialValues }
}
