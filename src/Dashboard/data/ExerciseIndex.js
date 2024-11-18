import { Box, IconButton, Tooltip } from "@mui/material";
import Header from "../components/Header";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import { useParams } from "react-router-dom";
import { ActExerciseIndex } from "../../Redux/Dashboard/Plan/PlanSlice";
import Table from "../components/Table";
const ExerciseIndex = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(ActExerciseIndex(id));
  }, [dispatch, id]);
  const { exercises, loading } = useSelector((state) => state.plan);
  console.log(exercises);
  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "title",
      headerName: "Title",
      flex: 1,
    },
    {
      field: "description",
      headerName: "Description",
      flex: 1,
    },
    {
      field: "duration",
      headerName: "Duration",
      flex: 1,
    },
    {
      field: "day",
      headerName: "day",
      flex: 1,
      valueGetter: (value, exercises) => exercises.pivot.day,
    },
    {
      field: "week",
      headerName: "week",
      flex: 1,
      valueGetter: (value, exercises) => exercises.pivot.week,
    },
    {
      field: "event",
      headerName: "event",
      flex: 1,
      renderCell: (params) => (
        <strong>
          <Tooltip title="Delete" arrow placement="top">
            <IconButton
              variant="contained"
              size="small"
              style={{
                border: "1px solid red",
                padding: "5px",
                borderRadius: "8px",
              }}
              tabIndex={params.hasFocus ? 0 : -1}
            >
              <DeleteIcon className="delete" />
            </IconButton>
          </Tooltip>
          <Tooltip title="Update" arrow placement="top">
            <IconButton
              variant="contained"
              size="small"
              style={{
                marginLeft: 16,
                border: "1px solid green",
                padding: "5px",
                borderRadius: "8px",
              }}
              tabIndex={params.hasFocus ? 0 : -1}
            >
              <EditIcon className="update" />
            </IconButton>
          </Tooltip>
          <Tooltip title="Open" arrow placement="top">
            <IconButton
              variant="contained"
              size="small"
              style={{
                marginLeft: 16,
                border: "1px solid #aaa",
                padding: "5px",
                borderRadius: "8px",
              }}
              tabIndex={params.hasFocus ? 0 : -1}
            >
              <FolderOpenIcon className="open" />
            </IconButton>
          </Tooltip>
        </strong>
      ),
    },
  ];

  return (
    <Box m="20px">
      <Header title="INVOICES" subtitle="List of Invoice Balances" />
      <Table loading={loading} columns={columns} data={exercises} />
    </Box>
  );
};

export default ExerciseIndex;
