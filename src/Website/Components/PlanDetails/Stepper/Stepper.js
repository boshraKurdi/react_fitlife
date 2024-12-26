import { useSelector } from "react-redux";
import "./Stepper.css";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { memo, useEffect } from "react";

const Stepper = memo(({ indexOfToday, data, setData , myplan }) => {
  const { value } = useSelector((state) => state.mode);
  useEffect(() => {
    switch (indexOfToday) {
      case 0:
        setData({ ...data, day: 1, week: 1 });
        break;
      case 1:
        setData({ ...data, day: 2, week: 1 });
        break;
      case 2:
        setData({ ...data, day: 3, week: 1 });
        break;
      case 3:
        setData({ ...data, day: 4, week: 1 });
        break;
      case 4:
        setData({ ...data, day: 5, week: 1 });
        break;
      case 5:
        setData({ ...data, day: 6, week: 1 });
        break;
      case 6:
        setData({ ...data, day: 7, week: 1 });
        break;
      case 7:
        setData({ ...data, day: 1, week: 1 });
        break;
      case 8:
        setData({ ...data, day: 2, week: 2 });
        break;
      case 9:
        setData({ ...data, day: 3, week: 2 });
        break;
      case 10:
        setData({ ...data, day: 4, week: 2 });
        break;
      case 11:
        setData({ ...data, day: 5, week: 2 });
        break;
      case 12:
        setData({ ...data, day: 6, week: 2 });
        break;
      case 13:
        setData({ ...data, day: 7, week: 2 });
        break;
      default:
        setData({ ...data, day: 1, week: 1 });
    }
  }, [indexOfToday]);

  return (
    <div className="timeline">
      <div className="timeline_container right_container">
        <span className={`num_img ${value}`}>1</span>
        <div className={`text_body ${value}`}>
          <button
            className={
              indexOfToday === 0 ? `cycle_number active` : "cycle_number"
            }
          >
            1
          </button>
          <span className="ar">
            <ChevronRightIcon style={{ color: "#ccc" }} />
          </span>
          <button
            className={
              indexOfToday === 1 ? `cycle_number active` : "cycle_number"
            }
          >
            2
          </button>
          <span className="ar">
            <ChevronRightIcon style={{ color: "#ccc" }} />
          </span>
          <button
            className={
              indexOfToday === 2 ? `cycle_number active` : "cycle_number"
            }
          >
            3
          </button>
          <span className="ar">
            <ChevronRightIcon style={{ color: "#ccc" }} />
          </span>
          <button
            className={
              indexOfToday === 3 ? `cycle_number active` : "cycle_number"
            }
          >
            4
          </button>
          <span className="ar">
            <ChevronRightIcon style={{ color: "#ccc" }} />
          </span>
          <button
            className={
              indexOfToday === 4 ? `cycle_number active` : "cycle_number"
            }
          >
            5
          </button>
          <span className="ar">
            <ChevronRightIcon style={{ color: "#ccc" }} />
          </span>
          <button
            className={
              indexOfToday === 5 ? `cycle_number active` : "cycle_number"
            }
          >
            6
          </button>
          <span className="ar">
            <ChevronRightIcon style={{ color: "#ccc" }} />
          </span>
          <button
            className={
              indexOfToday === 6 ? `cycle_number active` : "cycle_number"
            }
          >
            7
          </button>
        </div>
      </div>
      <div className="timeline_container right_container">
        <span className={`num_img ${value}`}>2</span>
        <div className={`text_body ${value}`}>
          <button
            className={
              indexOfToday === 7 ? `cycle_number active` : "cycle_number"
            }
          >
            1
          </button>
          <span className="ar">
            <ChevronRightIcon style={{ color: "#ccc" }} />
          </span>
          <button
            className={
              indexOfToday === 8 ? `cycle_number active` : "cycle_number"
            }
          >
            2
          </button>
          <span className="ar">
            <ChevronRightIcon style={{ color: "#ccc" }} />
          </span>
          <button
            className={
              indexOfToday === 9 ? `cycle_number active` : "cycle_number"
            }
          >
            3
          </button>
          <span className="ar">
            <ChevronRightIcon style={{ color: "#ccc" }} />
          </span>
          <button
            className={
              indexOfToday === 10 ? `cycle_number active` : "cycle_number"
            }
          >
            4
          </button>
          <span className="ar">
            <ChevronRightIcon style={{ color: "#ccc" }} />
          </span>
          <button
            className={
              indexOfToday === 11 ? `cycle_number active` : "cycle_number"
            }
          >
            5
          </button>
          <span className="ar">
            <ChevronRightIcon style={{ color: "#ccc" }} />
          </span>
          <button
            className={
              indexOfToday === 12 ? `cycle_number active` : "cycle_number"
            }
          >
            6
          </button>
          <span className="ar">
            <ChevronRightIcon style={{ color: "#ccc" }} />
          </span>
          <button
            className={
              indexOfToday === 13 ? `cycle_number active` : "cycle_number"
            }
          >
            7
          </button>
        </div>
      </div>
    </div>
  );
});
export default Stepper;
