import { Box, Button, TextField, Select, MenuItem } from "@mui/material";
import { Form, Formik } from "formik";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import PlanValidation from "../../validation/PlanValidation";
import { useDispatch, useSelector } from "react-redux";
import { ActStore } from "../../../Redux/Dashboard/Plan/PlanSlice";
import { SetOpen } from "../../../Redux/Mode/ModeSlice";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { useNavigate } from "react-router-dom";
import Loading from "../../components/loading/Loading";
// import { useEffect, useState } from "react";
// import { ActIndex } from "../../../Redux/Exercise/ExerciseSlice";
// import { useTheme } from "@emotion/react";

const PlanForm = () => {
  const nav = useNavigate();
  const { value } = useSelector((state) => state.mode);
  const { loadingStore , error } = useSelector((state) => state.Dplan)
  const { checkoutSchema, initialValues } = PlanValidation();
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const dispatch = useDispatch();
  const handleFormSubmit = (values) => {
    const formData = new FormData();
    formData.append("title", values.title);
    formData.append("description", values.description);
    formData.append("duration", values.duration);
    formData.append("levels", values.levels);
    formData.append("muscle", values.muscle);
    formData.append("media", values.media);
    dispatch(ActStore(formData)).unwrap().then(() => {
      nav('/dashboard')
      dispatch(SetOpen({message:"create Plan successfully!" , type:'success'}));
    }).catch(()=>{
        dispatch(SetOpen({message:"create Plan faild!" , type:'error'}));
    });
  };
  const handleImageChange = (event, setFieldValue) => {
    const file = event.currentTarget.files[0];
    setFieldValue("media", file);
  };
  // const { myExercise } = useSelector((state) => state.exercise)
  // useEffect(()=>{
  //   dispatch(ActIndex())
  // } ,[dispatch])
  // const ListItem = styled('li')(({ theme }) => ({
  //   margin: theme.spacing(0.5),
  // }));
  // const [chipData, setChipData] = useState([
  //   { key: 0, label: "Angular" },
  //   { key: 1, label: "jQuery" },
  //   { key: 2, label: "Polymer" },
  //   { key: 3, label: "React" },
  //   { key: 4, label: "Vue.js" },
  // ]);

  // const handleDelete = (chipToDelete) => () => {
  //   setChipData((chips) =>
  //     chips.filter((chip) => chip.key !== chipToDelete.key)
  //   );
  // };
  // const newData = chipData.map((data) => {
  //   return (
  //     <ListItem key={data.key}>
  //       <Chip
  //         label={data.label}
  //         onDelete= {handleDelete(data)}
  //       />
  //     </ListItem>
  //   );
  // });

  return (
    <Box m="20px">
      <Header title="CREATE PLAN" subtitle="Create a New Plan" />
      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={checkoutSchema}
      >
        {({
          values,
          errors,
          touched,
          setFieldValue,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <Form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Title"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.title}
                name="title"
                error={!!touched.title && !!errors.title}
                helperText={touched.title && errors.title}
                sx={{ gridColumn: "span 2" }}
                InputProps={{
                  sx: { fontSize: "1.5rem" },
                }}
                InputLabelProps={{
                  sx: {
                    fontSize: "1.6rem",
                    color: value === "dark" ? "#fff" : "#000",
                    "&.Mui-focused": {
                      color: value === "dark" ? "#fff" : "#000",
                    },
                  },
                }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Description"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.description}
                name="description"
                error={!!touched.description && !!errors.description}
                helperText={touched.description && errors.description}
                sx={{ gridColumn: "span 2" }}
                InputProps={{
                  sx: { fontSize: "1.5rem" },
                }}
                InputLabelProps={{
                  sx: {
                    fontSize: "1.6rem",
                    color: value === "dark" ? "#fff" : "#000",
                    "&.Mui-focused": {
                      color: value === "dark" ? "#fff" : "#000",
                    },
                  },
                }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Duration"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.duration}
                name="duration"
                error={!!touched.duration && !!errors.duration}
                helperText={touched.duration && errors.duration}
                sx={{ gridColumn: "span 4" }}
                InputProps={{
                  sx: { fontSize: "1.5rem" },
                }}
                InputLabelProps={{
                  sx: {
                    fontSize: "1.6rem",
                    color: value === "dark" ? "#fff" : "#000",
                    "&.Mui-focused": {
                      color: value === "dark" ? "#fff" : "#000",
                    },
                  },
                }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Muscle"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.muscle}
                name="muscle"
                error={!!touched.muscle && !!errors.muscle}
                helperText={touched.muscle && errors.muscle}
                sx={{ gridColumn: "span 4" }}
                InputProps={{
                  sx: { fontSize: "1.5rem" },
                }}
                InputLabelProps={{
                  sx: {
                    fontSize: "1.6rem",
                    color: value === "dark" ? "#fff" : "#000",
                    "&.Mui-focused": {
                      color: value === "dark" ? "#fff" : "#000",
                    },
                  },
                }}
              />
              <Select
                fullWidth
                name="levels"
                value={values.levels}
                label={"levels"}
                variant="filled"
                onChange={handleChange}
                onBlur={handleBlur}
                error={!!touched.muscle && !!errors.muscle}
                helperText={touched.muscle && errors.muscle}
                sx={{ gridColumn: "span 4", fontSize: "1.6rem" }}
              >
                <MenuItem sx={{ fontSize: "1.5rem" }} value={"1"}>
                  weak
                </MenuItem>
                <MenuItem sx={{ fontSize: "1.5rem" }} value={"2"}>
                  middle
                </MenuItem>
                <MenuItem sx={{ fontSize: "1.5rem" }} value={"3"}>
                  strong
                </MenuItem>
              </Select>
              <div className="uploadfile" style={{ gridColumn: "span 4" }}>
                <label htmlFor="file" class="labelFile">
                  <span>
                    <CloudUploadIcon />
                  </span>
                  <p>
                    drag and drop your image here or click to select a image!
                  </p>
                </label>
                <input
                  fullWidth
                  variant="filled"
                  id="file"
                  type="file"
                  label="media"
                  onChange={(event) => handleImageChange(event, setFieldValue)}
                  name="media"
                  sx={{ gridColumn: "span 4" }}
                />
              </div>

              {/* <Select
                fullWidth
                name="levels"
                value={values.levels}
                variant="filled"
                onChange={handleChange}
                error={!!touched.muscle && !!errors.muscle}
                helperText={touched.muscle && errors.muscle}
                sx={{ gridColumn: "span 4" }}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {myExercise.map((e)=>{
                    return(
                        <MenuItem onClick={()=>{setChipData(prevChipData => [...prevChipData,{ key: e.id, label: e.title }])}} key={e.id} value={e.id}>{e.title}</MenuItem>
                    )
                })}
              </Select> */}
              {/* <Paper
                fullWidth
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  flexWrap: "wrap",
                  listStyle: "none",
                  gridColumn: "span 4",
                  p: 0.5,
                  m: 0,
                }}
                component="ul"
              >
                {newData}
              </Paper> */}
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
            <Loading loading={loadingStore} error={error}>
              <Button
                className={value === "dark" ? "newR dark" : "newR light"}
                sx={{ marginRight: "auto", padding: "1.5rem 2rem" }}
                type="submit"
                color="secondary"
                variant="contained"
              >
              Create New Plan +
              </Button>
              </Loading>
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default PlanForm;
