import { useSelector } from "react-redux";
import { useState } from "react";
import { useSnackbar } from 'notistack';
import Category from "./Category";
import List from "./List";
import CloseIcon from '@mui/icons-material/Close';
export default function Dashboard({ meals }) {
  const { enqueueSnackbar } = useSnackbar();
  const { value } = useSelector((state) => state.mode);
  const [chipData, setChipData] = useState([
    {
      key: 0,
      label: meals[0]?.meal[0].title,
      contant: meals[0]?.meal[0].calories,
      img: meals[0]?.meal[0]?.media[0].original_url,
    },
    {
      key: 1,
      label: meals[0]?.meal[1].title,
      contant: meals[0]?.meal[1].calories,
      img: meals[0]?.meal[1]?.media[0].original_url,
    },
  ]);
  const handleDelete = (chipToDelete) => () => {
    setChipData((chips) =>
      chips.filter((chip) => chip.key !== chipToDelete.key)
    );
    enqueueSnackbar(`remove item successfully!`, { variant: 'error'});
  };
  const newData = chipData.map((data) => {
    return (
      <div className={`highlight-card ${value}`}>
        <CloseIcon onClick={handleDelete(data)} className="icon_dashboard" />
        <img className="highlight-img" src={data.img} alt="none" />
        <div className="highlight-desc">
          <h4>{data.label}</h4>
          <p>{data.contant + " calories"}</p>
        </div>
      </div>
    );
  });
  return (
    <>
      <div className="main-highlight">
        <div className="main-header">
          <h2 className="main-title">Recommendations</h2>
        </div>
        <div className="highlight-wrapper">{newData}</div>
      </div>
      <div class={`main-menus ${value}`}>
        <Category />
        <hr class="divider" />
        <List chipData={chipData} setChipData={setChipData} meals={meals} />
      </div>
    </>
  );
}