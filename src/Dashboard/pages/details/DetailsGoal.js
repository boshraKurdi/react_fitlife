import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import Header from "../../components/Header";
import UseDetalisGoal from "../../hooks/UseDetailsGoal";



const DetailsGoal = () => {
    const {goal , loadingShow ,error} = UseDetalisGoal()
  return (
    <Box m="20px">
    <Header title="CREATE GOAL" subtitle="Create a New Goal" />
    {loadingShow === 'pending' ? 'loading...' : <Card sx={{ display: "flex" , alignItems:'center', marginTop: '4rem' }}>
      <Box sx={{ display: "flex" , width:'100%' }}>
      <CardMedia
          sx={{ width: "300px" , minHeight:"300px", maxHeight:'100%' }}
          image={goal.media && goal.media[0].original_url}
          title="green iguana"
        />
        <CardContent sx={{flex:'1' , display:'flex' , flexWrap: 'wrap' , justifyContent: 'space-between'}}>
            <Box m="15px" sx={{width: '45%'}}>
            <Typography gutterBottom variant="h4" component="div">
            Title
          </Typography>
          <Typography variant="body1" color sx={{ color: "text.secondary" , fontSize: '1.4rem' , background: 'rgba(0, 0, 0, 0.3)' ,padding:'10px' , borderRadius:'8px' , maxWidth: '400px'}}>
           {goal.title}
          </Typography>

            </Box>
          <Box m="15px" sx={{width: '45%'}}>
          <Typography gutterBottom variant="h4" component="div">
            Description
          </Typography>
          <Typography variant="body1" color sx={{ color: "text.secondary" , fontSize: '1.4rem' , background: 'rgba(0, 0, 0, 0.3)' ,padding:'10px' , borderRadius:'8px' , maxWidth: '400px'}}>
          {goal.description}
          </Typography>
          </Box>
          <Box m="15px" sx={{width: '45%'}}>
          <Typography gutterBottom variant="h4" component="div">
            Duration          </Typography>
          <Typography variant="body1" color sx={{ color: "text.secondary" , fontSize: '1.4rem' , background: 'rgba(0, 0, 0, 0.3)' ,padding:'10px' , borderRadius:'8px' , maxWidth: '400px'}}>
          {goal.duration}
          </Typography>
          </Box >
          <Box m="15px" sx={{width: '45%'}}>
          <Typography gutterBottom variant="h4" component="div">
            Calories
          </Typography>
          <Typography variant="body1" color sx={{ color: "text.secondary" , fontSize: '1.4rem' , background: 'rgba(0, 0, 0, 0.3)' ,padding:'10px' , borderRadius:'8px' , maxWidth: '400px'}}>
          {goal.calories}
          </Typography>
          </Box>
        </CardContent>
      </Box>
    </Card>
}
    </Box>
  );
};
export default DetailsGoal;
