import * as yup from "yup";
export default function GoalValidation(children){

  const checkoutSchema = yup.object().shape({
    title: yup.string().required("required"),
    description: yup.string().required("required"),
    duration: yup.string().required("required"),
    calories_min: yup
    .string().required("required"),
    calories_max: yup
    .string().required("required"),
    // media: yup.mixed().required("required")
});
const initialValues = {
    title: children ? children.goal.title: '',
    description: children ? children.goal.description: '',
    duration: children ? children.goal.duration: '',
    calories_min:children ? children.goal.calories_min: '',
    calories_max:children ? children.goal.calories_max: '',
    PlanLevel: '',
    media: null ,
    id: children ? children.goal.id: ''
};
return {checkoutSchema , initialValues }
}
