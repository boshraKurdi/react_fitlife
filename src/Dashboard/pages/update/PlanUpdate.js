import { Box, Button, TextField, Select, MenuItem } from "@mui/material";
import { Form, Formik } from "formik";
import Header from "../../components/Header";
import EditIcon from '@mui/icons-material/Edit';
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import Loading from "../../components/loading/Loading";
import UseUpdatePlan from "../../hooks/UseUpdatePlan";
const PlanUpdate = () => {
  const {
    isNonMobile,
    value,
    handleImageChange,
    handleFormSubmit,
    loadingStore,
    error,
    checkoutSchema,
    initialValues,
  } = UseUpdatePlan();
  return (
    <Box m="20px">
      <Header title="UPDATE PLAN" subtitle="Update a Plan" />
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
               sx={{display:'none'}}
                type="hidden"
                name="id"
                value={values.id}
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
                label="Muscle"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.muscle}
                name="muscle"
                error={!!touched.muscle && !!errors.muscle}
                helperText={touched.muscle && errors.muscle}
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
                 <Select
                fullWidth
                name="levels"
                value={values.levels}
                label={"levels"}
                variant="filled"
                onChange={handleChange}
                onBlur={handleBlur}
                error={!!touched.levels && !!errors.levels}
                helperText={touched.levels && errors.levels}
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
                  Update Plan <EditIcon sx={{ml:'1rem'}}/>
                </Button>
              </Loading>
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default PlanUpdate;
