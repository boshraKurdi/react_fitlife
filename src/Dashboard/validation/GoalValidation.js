import * as yup from "yup";
export default function GoalValidation(){

  const checkoutSchema = yup.object().shape({
    title: yup.string().required("required"),
    description: yup.string().required("required"),
    duration: yup.string().required("required"),
    calories: yup
    .string().required("required"),
    media: yup.mixed().required("required")
});
const initialValues = {
    title: "",
    description: "",
    duration: "",
    calories: "",
    PlanLevel: '' ,
    media: null
};
return {checkoutSchema , initialValues }
}
