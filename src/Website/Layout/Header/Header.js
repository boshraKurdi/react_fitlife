import { Link } from "react-router-dom";
import "./Header.css";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import { useDispatch, useSelector } from "react-redux";
import { SetMode } from "../../../Redux/Mode/ModeSlice";
import Components from "../../Style/Components/Components";
import { IconButton, useTheme } from "@mui/material";
import Profile from "../../Components/Profile/Profile";

import { useState } from "react";
export default function Header() {
  const [ open , setOpen ] = useState(false)
  const theme = useTheme()
  const { MyComponentHeader} = Components();
  const dispatch = useDispatch();
  // change mode 
  const { value } = useSelector((state) => state.mode)
  const { token } = useSelector((state) => state.auth)
  function HandelNav(){
    setOpen(prev => !prev);
  }
  const [activeLink, setActiveLink] = useState('home');
  return (
    <MyComponentHeader className="header active">
      <div className="container">
        <a href="index" className="logo">
          <FitnessCenterIcon className="ion-icon" />
          <span style={{color:theme.palette.primary.title}} className="span">Fitlife</span>
        </a>

        <nav className={open ? (value === 'dark' ? 'navbar open dark' : 'navbar open light') : (value === 'dark'? "navbar dark" : 'navbar light')}>
          <button className="nav-close-btn"></button>

          <ul className="navbar-list">
          <li onClick={()=>{setOpen(false)}}>
              <a href="/#home" onClick={()=>{setActiveLink('home')}} className={activeLink === 'home' ? `navbar-link ${value} active` : `navbar-link ${value}`}>
                Home
              </a>{" "}
            </li>

            <li onClick={()=>{setOpen(false)}}>
              <a href="/#about" onClick={()=>{setActiveLink('about')}} className={activeLink === 'about' ? `navbar-link ${value} active` : `navbar-link ${value}`}>
                About Us
              </a>{" "}
            </li>

            <li onClick={()=>{setOpen(false)}}>
              <a href="/#goal" onClick={()=>{setActiveLink('goal')}} className={activeLink === 'goal' ? `navbar-link ${value} active` : `navbar-link ${value}`}>
                Goals
              </a>
            </li>

            <li onClick={()=>{setOpen(false)}}>
              <a  href="/#contact" onClick={()=>{setActiveLink('contact')}} className={activeLink === 'contact' ? `navbar-link ${value} active` : `navbar-link ${value}`}>
                Contact Us
              </a>
            </li>
            {/* <li onClick={()=>{setOpen(false)}}>
            <Link to="/login" className={`navbar-link ${value} btn-login`}>
                Login
              </Link>
            </li> */}
            <li onClick={()=>{setOpen(false)}}>
            <IconButton>
              {value === 'dark' ? <DarkModeIcon style={{fontSize:'2.2rem',cursor:'pointer'}} value={value} onClick={() => dispatch(SetMode('light'))} /> :
              <LightModeIcon style={{fontSize:'2.2rem', cursor:'pointer'}} onClick={() => dispatch(SetMode('dark'))} />}
              </IconButton>
            </li>
          </ul>
        </nav>
        {token ? <Profile /> : <Link to="/login" className="btn btn-secondary">
          Join Now
        </Link>}
        <button className="nav-open-btn" onClick={HandelNav}>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </button>
      </div>
    </MyComponentHeader>
  );
}
