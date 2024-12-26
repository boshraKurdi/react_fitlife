import LineChart from "../../Chart/LineChart";
import { Box } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import EditIcon from "@mui/icons-material/Edit";
import Cycle from "../../Cycle/Cycle";
import BarChart from "../../Chart/BarChart";
import EmailIcon from '@mui/icons-material/Email';
import DeleteIcon from '@mui/icons-material/Delete';
// import LocationOnIcon from '@mui/icons-material/LocationOn';
export default function Content() {
  return (
    <div className="main-body">
      <div className="headtittle">
        <div>
        <span className="greeeting">Boshra Kurdi,</span>
        <h2 style={{display:'flex' ,alignItems:'center'}}><EmailIcon style={{marginRight:'.5rem'}} />boshra@gmail.com</h2>
        {/* <h2><LocationOnIcon/> syria , aleppo</h2> */}
        </div>
        <div style={{display:'flex' , alignItems:'center'}}>
      <button className="btn_profile"><EditIcon />edit profile</button>
      <button className="btn_profile_delete"><DeleteIcon />delete account</button>
      </div>
      </div>

      <div className="cards">
        <div
          style={{ marginBottom: "3rem", justifyContent: "center" }}
          className="row_profile_2 row-1"
        >
          <div className="col">
            <div className="balance-card">
              <h3 className="cardtittle">Calories</h3>
              <div style={{ display: "flex", alignItems: "center" }}>
                <h2 className="balance">500 - 1000</h2>
                <Cycle num="40" />
              </div>
            </div>
          </div>

          {/* <div className="col">
            <div className="debit-card">
              <h3 className="cardtittle">My card</h3>
              <h3 className="cardnumber">1234 5678 9101 1123</h3>
              <h3 className="cardholder">Robert Downey</h3>
            </div>
          </div> */}

          <div className="col">
            <div className="total-invoice">
              <h3 className="cardtittle">Healthy Weight</h3>
              <div style={{ display: "flex", alignItems: "center" }}>
                <h2 className="balance">50kg / 160cm</h2>
                <Cycle num="20" />
              </div>
            </div>
          </div>
          <div className="col">
            <div className="paid-invoice">
              <h3 className="cardtittle">Sleep</h3>
              <div style={{ display: "flex", alignItems: "center" }}>
                <h2 className="balance">8h - 7h</h2>
                <Cycle num="60" />
              </div>
            </div>
          </div>
        </div>
        <div
          style={{ justifyContent: "center", marginBottom: "3rem" }}
          className="row_profile row-1"
        >
          <div className="col">
            <div className="latest-activity">
              <h3 className="cardtittle">Latest activity exercises</h3>
              <Box height="250px" m="-20px 0 0 0">
                <LineChart isDashboard={true} />
              </Box>
            </div>
          </div>
          <div className="col">
            <div className="latest-activity">
              <h3 className="cardtittle">Latest activity meals</h3>
              <Box height="250px" m="-20px 0 0 0">
                <LineChart isDashboard={true} />
              </Box>
            </div>
          </div>
        </div>
        <div style={{ justifyContent: "center" }} className="row_profile row-1">
          <div className="col">
            <div className="latest-activity">
              <h3
                className="cardtittle"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                Weekly Schedule <EditIcon className="edit_week_day" />
              </h3>
              <div className="pather_day_week">
                <div className="day_week">
                  <CheckCircleIcon className="true" />
                  <span>monday</span>
                </div>
                <div className="day_week">
                  <CheckCircleIcon className="true" />
                  <span>tuesday</span>
                </div>
                <div className="day_week">
                  <CancelIcon className="false" />
                  <span>wednesday</span>
                </div>
                <div className="day_week">
                  <CheckCircleIcon className="true" />
                  <span>thrusday</span>
                </div>
                <div className="day_week">
                  <CancelIcon className="false" />
                  <span>friday</span>
                </div>
                <div className="day_week">
                  <CheckCircleIcon className="true" />
                  <span>saturday</span>
                </div>
                <div className="day_week">
                  <CancelIcon className="false" />
                  <span>sunday</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="latest-activity">
              <h3 className="cardtittle">Latest activity water</h3>
              <Box height="250px" mt="-20px">
                <BarChart isDashboard={true} />
              </Box>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
