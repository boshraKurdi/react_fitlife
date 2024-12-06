import {
  Box,
  Button,
  TextField,
  Select,
  MenuItem,
  Paper,
  Chip,
  styled,
} from "@mui/material";
import { Form, Formik } from "formik";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import GoalValidation from "../../validation/GoalValidation";
import { useDispatch, useSelector } from "react-redux";
import { ActIndex } from "../../../Redux/Dashboard/Plan/PlanSlice";
import { SetOpen } from "../../../Redux/Mode/ModeSlice";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { useEffect, useState } from "react";
import { ActStore } from "../../../Redux/Dashboard/Goal/GoalSlice";
import { useNavigate } from "react-router-dom";
import Loading from "../../components/loading/Loading";

const GoalForm = () => {
  const nav = useNavigate();
  const { value } = useSelector((state) => state.mode);
  const { loadingStore, error } = useSelector((state) => state.Dgoal);
  const { checkoutSchema, initialValues } = GoalValidation();
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const dispatch = useDispatch();
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: "150px",
        width: 250,
      },
    },
  };

  const handleFormSubmit = (values) => {
    const formData = new FormData();
    formData.append("title", values.title);
    formData.append("description", values.description);
    formData.append("duration", values.duration);
    chipData.forEach(element => {
      formData.append("PlanLevel[]", element.key);
    });
    formData.append("calories_max", values.calories_max);
    formData.append("calories_min", values.calories_min);
    formData.append("media", values.media);
    dispatch(ActStore(formData))
      .unwrap()
      .then(() => {
        nav("/dashboard");
        dispatch(SetOpen({message:"create Goal successfully!" , type:'success'}));
        }).catch(()=>{
            dispatch(SetOpen({message:"create Goal faild!" , type:'error'}));
        });
  };
  const handleImageChange = (event, setFieldValue) => {
    const file = event.currentTarget.files[0];
    setFieldValue("media", file);
  };
  const { plans, loading } = useSelector((state) => state.Dplan);
  useEffect(() => {
    dispatch(ActIndex());
  }, [dispatch]);
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
          label={data.label}
          onDelete={handleDelete(data)}
        />
      </ListItem>
    );
  });

  return (
    <Box m="20px">
      <Header title="CREATE GOAL" subtitle="Create a New Goal" />
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
                fullWidth
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
                name="PlanLevel"
                value={values.levels}
                variant="filled"
                onChange={handleChange}
                error={!!touched.muscle && !!errors.muscle}
                helperText={touched.muscle && errors.muscle}
                sx={{ gridColumn: "span 2", fontSize: "1.6rem" }}
                MenuProps={MenuProps}
              >
                {loading === 'pending'
                  ? <MenuItem value="0">loading...</MenuItem>
                  : plans.map((e) => {
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
                    })}
              </Select>
              {newData.length > 0 && (
                <Paper
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
                  Update New Goal +
                </Button>
              </Loading>
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default GoalForm;
