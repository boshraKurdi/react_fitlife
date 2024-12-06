import { Box, Button, TextField, Select, MenuItem, Paper } from "@mui/material";
import { Form, Formik } from "formik";
import Header from "../../components/Header";
import EditIcon from '@mui/icons-material/Edit';
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import Loading from "../../components/loading/Loading";
import UseUpdateGoal from "../../hooks/UseUpdateGoal";
const GoalUpdate = () => {
  const {
    setChipData,
    MenuProps,
    isNonMobile,
    value,
    newData,
    plans,
    loading,
    handleImageChange,
    handleFormSubmit,
    loadingStore,
    error,
    checkoutSchema,
    initialValues,
  } = UseUpdateGoal();
  return (
    <Box m="20px">
      <Header title="UPDATE GOAL" subtitle="Update a Goal" />
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
                label="Calories Min"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.calories_min}
                name="calories_min"
                error={!!touched.calories_min && !!errors.calories_min}
                helperText={touched.calories_min && errors.calories_min}
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
                label="Calories Max"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.calories_max}
                name="calories_max"
                error={!!touched.calories_max && !!errors.calories_max}
                helperText={touched.calories_max && errors.calories_max}
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
                name="PlanLevel"
                value={values.PlanLevel}
                variant="filled"
                onChange={handleChange}
                error={!!touched.PlanLevel && !!errors.PlanLevel}
                helperText={touched.PlanLevel && errors.PlanLevel}
                sx={{ gridColumn: "span 2", fontSize: "1.6rem" }}
                MenuProps={MenuProps}
              >
                {loading === "pending" ? (
                  <MenuItem value="0">loading...</MenuItem>
                ) : (
                  plans.map((e) => {
                    return (
                      <MenuItem
                        sx={{ fontSize: "1.5rem" }}
                        onClick={() => {
                          setChipData((prevChipData) => [
                            ...prevChipData,
                            { key: e.id, label: e.plan?.title },
                          ]);
                        }}
                        key={e.id}
                        value={e.id}
                      >
                        {e.plan?.title}
                      </MenuItem>
                    );
                  })
                )}
              </Select>
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
                  Update Goal <EditIcon sx={{ml:'1rem'}}/>
                </Button>
              </Loading>
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default GoalUpdate;
