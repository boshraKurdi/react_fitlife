import { styled } from "@mui/material/styles";
const Components = () =>{
    const MyComponentHeroSubtitle = styled("p")(({ theme }) => ({
        backgroundColor: theme.palette.primary.secondy,
      }));
      const MyComponentHeroSubtitleA = styled("a")(({ theme }) => ({
        backgroundColor: theme.palette.primary.secondy,
      }));
      const MyComponentHeader = styled("header")(({ theme }) => ({
        color: "#fff",
        backgroundColor: theme.palette.primary.main,
      }));
      const MyComponentTitle = styled("h1")(({ theme }) => ({
        color: theme.palette.primary.title,
      }));
      const MyComponentTextP = styled("p")(({ theme }) => ({
        color: theme.palette.primary.contrastText,
      }));
    return { MyComponentHeroSubtitle , MyComponentHeader , MyComponentTitle , MyComponentTextP , MyComponentHeroSubtitleA }  
}
export default Components