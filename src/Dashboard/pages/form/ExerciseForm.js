import {
    Box,
    Button,
    TextField,
    Paper,
    Chip,
    styled,
  } from "@mui/material";
  import AddIcon from '@mui/icons-material/Add';
  import { Form, Formik } from "formik";
  import useMediaQuery from "@mui/material/useMediaQuery";
  import Header from "../../components/Header";
  import ExerciseValidation from "../../validation/ExerciseValidation";
  import { useDispatch, useSelector } from "react-redux";
  import CloudUploadIcon from "@mui/icons-material/CloudUpload";
  import { ActStore } from "../../../Redux/Dashboard/Exercise/ExerciseSlice";
  import { useNavigate } from "react-router-dom";
  import { useSnackbar } from "notistack";
  import Loading from "../../components/loading/Loading";
import { useState } from "react";
let index = 0;
  const ExerciseForm = () => {
    const { enqueueSnackbar } = useSnackbar();
    const nav = useNavigate();
    const { value } = useSelector((state) => state.mode);
    const { loadingStore, error } = useSelector((state) => state.Dexercise);
    const { checkoutSchema, initialValues } = ExerciseValidation();
    const isNonMobile = useMediaQuery("(min-width:600px)");
    const dispatch = useDispatch();
  
    const handleFormSubmit = (values) => {
      const formData = new FormData();
      formData.append("title", values.title);
      formData.append("title_ar", values.title_ar);
      formData.append("description", values.description);
      formData.append("description_ar", values.description_ar);
      formData.append("duration", values.duration);
      formData.append("calories", values.calories);
      chipData.forEach((step, index) => {
        formData.append(`steps[${index}][content]`, step.content);
        formData.append(`steps[${index}][content_ar]`, step.content_ar);
    });
      formData.append("counter", values.counter);
      formData.append("media", values.media);
      dispatch(ActStore(formData))
        .unwrap()
        .then(() => {
          nav("/dashboard");
          enqueueSnackbar(`Update Exercise successfully!`, { variant: "success" });
          }).catch((error)=>{
            enqueueSnackbar(`Update Exercise faild!`, { variant: "error" });
          });
    };
    const [preview, setPreview] = useState('');
    
    const handleImageChange = (event, setFieldValue) => {
      const file = event.currentTarget.files[0];
      setFieldValue("image", file);
  
      // إنشاء معاينة للصورة
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setPreview(reader.result);
        };
        reader.readAsDataURL(file);
      }
    };

    const ListItem = styled("li")(({ theme }) => ({
        margin: theme.spacing(0.5),
      }));
    const [chipData, setChipData] = useState([]);

    const handleDelete = (chipToDelete) => () => {
      setChipData((chips) =>
        chips.filter((chip) => chip.key !== chipToDelete.key)
      );
    };
    const newData = chipData.map((data) => {
      return (
        <ListItem key={data.key}>
          <Chip
            sx={{ fontSize: "1.5rem" }}
            label={data.content}
            onDelete={handleDelete(data)}
          />
        </ListItem>
      );
    });
    return (
      <Box m="20px">
        <Header title="CREATE EXERCISE" subtitle="Create a New Exercise" />
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
                
                  variant="filled"
                  type="text"
                  label="Title AR"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.title_ar}
                  name="title_ar"
                  error={!!touched.title_ar && !!errors.title_ar}
                  helperText={touched.title_ar && errors.title_ar}
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
                
                  variant="filled"
                  type="text"
                  label="Description AR"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.description_ar}
                  name="description_ar"
                  error={!!touched.description_ar && !!errors.description_ar}
                  helperText={touched.description_ar && errors.description_ar}
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
                
                  variant="filled"
                  type="text"
                  label="Calories"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.calories}
                  name="calories"
                  error={!!touched.calories && !!errors.calories}
                  helperText={touched.calories && errors.calories}
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
                
                  variant="filled"
                  type="text"
                  label="Duration"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.duration}
                  name="duration"
                  error={!!touched.duration && !!errors.duration}
                  helperText={touched.duration && errors.duration}
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
                
                variant="filled"
                type="text"
                label="Counter"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.counter}
                name="counter"
                error={!!touched.counter && !!errors.counter}
                helperText={touched.counter && errors.counter}
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
                
                variant="filled"
                type="text"
                label="Steps"
             
                onChange={handleChange}
                onBlur={(e) => {
                    setChipData((prevChipData) => [
                      ...prevChipData,
                      { key: index++, content: e.target.value , content_ar: e.target.value },
                    ]);
                    values.steps = ''
                  }}
                value={values.steps}
                name="steps"
                error={!!touched.steps && !!errors.steps}
                helperText={touched.steps && errors.steps}
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
              
              
            {newData.length > 0 && (
              <Paper            
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
              </Paper>
            )}
                 <div className="uploadfile" style={{ border: '2px dashed #ccc' ,gridColumn: "span 4" , display:'flex' , alignItems:'center' }}>
                {preview && <img style={{width:'25%' , marginRight:'1rem'}} src={preview} alt="none" />}
                <label htmlFor="file" class="labelFile">
                  <span>
                    <CloudUploadIcon />
                  </span>
                  <p>
                    drag and drop your image here or click to select a image!
                  </p>
                </label>
                <input
                  variant="filled"
                  id="file"
                  type="file"
                  label="media"
                  onChange={(event) => handleImageChange(event, setFieldValue)}
                  name="media"
                  sx={{ gridColumn: "span 4" }}
                />
              </div>
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
                    Create New Exercise <AddIcon sx={{ml:'1rem'}}/>
                  </Button>
                </Loading>
              </Box>
            </Form>
          )}
        </Formik>
      </Box>
    );
  };
  
  export default ExerciseForm;
  