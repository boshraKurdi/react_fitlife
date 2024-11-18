import { Box, useTheme } from "@mui/material";
import { tokens } from "../theme";
import { DataGrid } from "@mui/x-data-grid";

export default function Table({data , loading , columns}){
    const theme = useTheme();
    const colors = tokens(theme.palette.mode)
    return(
        <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          boxShadow: `0px 0px 5px ${colors.primary[700]}` ,
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
            
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-container--top [role=row]": {
            backgroundColor: `${colors.greenAccent[700]} !important`,
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
           display: 'none'
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
            
          },
        }}
      >
        <DataGrid
          loading={loading === "pending" ? true : false}
          style={{ fontSize: "1.3rem" }}
          checkboxSelection
          rows={data}
          columns={columns}
        />
      </Box>
    )

}