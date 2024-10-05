import { Link } from "react-router-dom";
import "./Header.css";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import { useDispatch, useSelector } from "react-redux";
import { SetMode } from "../../Redux/Mode/ModeSlice";
import Components from "../../Style/Components/Components";
import { useTheme } from "@mui/material";
import Profile from "../../Components/Profile/Profile";
export default function Header() {
  const theme = useTheme()
  const { MyComponentHeader} = Components();
  const dispatch = useDispatch();
  // change mode 
  const { value } = useSelector((state) => state.mode)
  const { token } = useSelector((state) => state.auth)
  return (
    <MyComponentHeader className="header active">
      <div className="container">
        <a href="index" className="logo">
          <FitnessCenterIcon className="ion-icon" />
          <span style={{color:theme.palette.primary.title}} className="span">Fitlife</span>
        </a>

        <nav className="navbar">
          <button className="nav-close-btn"></button>

          <ul className="navbar-list">
            <li>
              <Link style={{color:theme.palette.primary.title}} to="/#home" className="navbar-link active">
                Home
              </Link>{" "}
            </li>

            <li>
              <Link style={{color:theme.palette.primary.title}} to="/#about" className="navbar-link">
                About Us
              </Link>{" "}
            </li>

            <li>
              <Link style={{color:theme.palette.primary.title}} to="/#class" className="navbar-link">
                classs
              </Link>
            </li>

            <li>
              <Link style={{color:theme.palette.primary.title}} to="/#blog" className="navbar-link">
                Blog
              </Link>
            </li>

            <li>
              <Link style={{color:theme.palette.primary.title}} to="/" className="navbar-link">
                Contact Us
              </Link>
            </li>
            <li>
            <Select value={value} onChange={(event) => dispatch(SetMode(event.target.value))}>
              <MenuItem style={{color:theme.palette.primary.title}} value="light">light</MenuItem>
              <MenuItem style={{color:theme.palette.primary.title}} value="dark">dark</MenuItem>
            </Select>
            </li>
          </ul>
        </nav>
        {token ? <Profile /> : <Link to="/login" className="btn btn-secondary">
          Join Now
        </Link>}
        <button className="nav-open-btn">
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </button>
      </div>
    </MyComponentHeader>
  );
}
