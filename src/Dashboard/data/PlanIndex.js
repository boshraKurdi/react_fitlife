import { Box, IconButton, Tooltip } from "@mui/material";
import Header from "../components/Header";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import {
  ActGetPlanForGoal,
  PlanForGoalCleanUp,
} from "../../Redux/Dashboard/Plan/PlanSlice";
import { Link, useParams } from "react-router-dom";
import Table from "../components/Table";
const PlanIndex = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { plansForGoal, loading } = useSelector((state) => state.plan);
  useEffect(() => {
    dispatch(ActGetPlanForGoal(id));
    return () => {
      dispatch(PlanForGoalCleanUp());
    };
  }, [dispatch, id]);
  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "title",
      headerName: "Title goal",
      flex: 1,
      valueGetter: (value, plansForGoal) => plansForGoal.goals.title,
    },
    {
      field: "plan",
      headerName: "Title plan",
      flex: 1,
      valueGetter: (value, plansForGoal) => plansForGoal.plan_levels.plan.title,
    },
    {
      field: "description",
      headerName: "Description",
      flex: 1,
      valueGetter: (value, plansForGoal) =>
        plansForGoal.plan_levels.plan.description,
    },
    {
      field: "level",
      headerName: "Level",
      flex: 1,
      valueGetter: (value, plansForGoal) =>
        plansForGoal.plan_levels.level.title,
    },
    {
      field: "duration",
      headerName: "Duration",
      flex: 1,
      valueGetter: (value, plansForGoal) =>
        plansForGoal.plan_levels.plan.duration,
    },
    {
      field: "exercises",
      headerName: " exercises",
      flex: 1,
      cellClassName: "name-column--cell",
      renderCell: (plansForGoal) => {
        return (
          <Link to={"exercises/" + plansForGoal.row.plan_levels.id}>
            exercises
          </Link>
        );
      },
    },
    {
      field: "event",
      headerName: "event",
      flex: 1,
      renderCell: (plansForGoal) => (
        <strong>
           <Tooltip title="Delete" arrow placement="top">
          <IconButton
            variant="contained"
            size="small"
            style={{border: '1px solid red' , padding: '5px' , borderRadius: '8px' }}
          >
            <DeleteIcon className="delete"/>
          </IconButton>
          </Tooltip>
          <Tooltip title="Update" arrow placement="top">
          <IconButton
            variant="contained"
            size="small"
            style={{ marginLeft: 16 , border: '1px solid green' , padding: '5px' , borderRadius: '8px' }}
          >
            <EditIcon className="update" />
          </IconButton>
          </Tooltip>
          <Tooltip title="Open" arrow placement="top">
          <IconButton
            variant="contained"
            size="small"
            style={{ marginLeft: 16 , border: '1px solid #aaa' , padding: '5px' , borderRadius: '8px' }}
          >
            <FolderOpenIcon onClick={()=>{window.location.pathname="/dashboard/DetailsPlan/"+plansForGoal.row.plan_levels.id}} className="open" />
          </IconButton>
          </Tooltip>
        </strong>
      ),
    },
  ];

  return (
    <Box m="20px">
      <Header title="PLAN" subtitle="List of Plan Table" />
      <Table loading={loading} columns={columns} data={plansForGoal} />
    </Box>
  );
};

export default PlanIndex;
