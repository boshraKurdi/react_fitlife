import { Box, IconButton, Tooltip } from "@mui/material";
import Header from "../components/Header";
import { useDispatch, useSelector } from "react-redux";
import { memo, useCallback, useEffect } from "react";
import { ActDestroy, ActIndex } from "../../Redux/Dashboard/Goal/GoalSlice";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import { Link } from "react-router-dom";
import Table from "../components/Table";
const GoalIndex = memo(() => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(ActIndex());
  }, [dispatch]);
  const { goals, loading } = useSelector((state) => state.Dgoal);
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
      field: "calories",
      headerName: "Calories",
      flex: 1,
    },
    {
      field: "duration",
      headerName: "Duration",
      flex: 1,
    },
    {
      field: "plan",
      headerName: " Plan",
      flex: 1,
      cellClassName: "name-column--cell",
      renderCell: (goals) => <Link to={"plan/" + goals.id}>plan</Link>,
    },
    {
      field: "event",
      headerName: "event",
      flex: 1,
      renderCell: (goals) => (
        <strong>
          <Tooltip title="Delete" arrow placement="top">
            <IconButton
              variant="contained"
              size="small"
              onClick={() => {
                HandelDestroy(goals.id);
              }}
              style={{
                border: "1px solid red",
                padding: "5px",
                borderRadius: "8px",
              }}
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
              onClick={()=>{window.location.pathname ='/dashboard/DetailsGoal/'+goals.id}}
            >
              <FolderOpenIcon className="open" />
            </IconButton>
          </Tooltip>
        </strong>
      ),
    },
  ];
  const HandelDestroy = useCallback(
    (id) => {
      dispatch(ActDestroy(id));
    },
    [dispatch]
  );

  return (
    <Box m="20px">
      <Header title="GOAL" subtitle="List of Goal Table" />
      <Table data={goals} columns={columns}  loading={loading} />
      
    </Box>
  );
});

export default GoalIndex;
