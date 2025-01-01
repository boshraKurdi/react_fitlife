import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useSnackbar } from 'notistack';
import Category from "./Category";
import List from "./List";
import CloseIcon from '@mui/icons-material/Close';
import { ActStore } from "../../../Redux/Target/TargetSlice";
export default function Dashboard({ meals , id , open }) {
  const dispatch = useDispatch()
  const { enqueueSnackbar } = useSnackbar();
  const { value } = useSelector((state) => state.mode);
  const { loading } = useSelector((state) => state.target)
  const [check , setCheck] = useState([]);
  const [calories , setCalories] = useState([]);
  const [chipData, setChipData] = useState([]);
  const totalCalories = chipData.reduce((accumulator, current) => {
    return accumulator + current.calories;
  }, 0);
  const handleDelete = (chipToDelete) => () => {
    setChipData((chips) =>
      chips.filter((chip) => chip.id !== chipToDelete.id)
    );
    setCheck((checks) =>
      checks.filter((check) => check !== chipToDelete.id)
    );
    setCalories((calories) =>
      calories.filter((calorie) => calorie !== chipToDelete.calories)
    );
    enqueueSnackbar(`remove item successfully!`, { variant: 'error'});
  };
 console.log(calories , check)
  useEffect(() => {
    const matchedRecords = meals[0]?.meal && meals[0]?.meal?.filter(item1 =>
      meals[0]?.targets && meals[0]?.targets?.some(item2 => item2.check === item1.id)
    );
    
    setChipData(matchedRecords);
    const ids = matchedRecords.map(item => item.id);
    setCheck(ids);
    const calories = matchedRecords.map(item => item.calories);
    setCalories(calories);
  }, [meals]); 
  const newData = chipData.length > 0 && chipData.map((data) => {
    return (
      <div className={`highlight-card ${value}`}>
        <CloseIcon onClick={handleDelete(data)} className="icon_dashboard" />
        <img className="highlight-img" src={data.media[0].original_url} alt="none" />
        <div className="highlight-desc">
          <h4>{data.title}</h4>
          <p>{data.calories + " calories"}</p>
        </div>
      </div>
    );
  });
  const time = open.breakfast ? 'breakfast' : open.lunch ? 'lunch' : open.dinner ? 'dinner' : 'snack';
  console.log(time)
  return (
    <>
      <div className="main-highlight">
        <div style={{display:'flex' , alignItems:'center' , justifyContent:'space-between'}} className="main-header">
          <h2 className="main-title">Recommendations</h2>
          <div className="avg" style={{display:'flex' , alignItems:'center'}}>
            <p>totle calories: {totalCalories}</p>
          <button onClick={()=>{
            dispatch(ActStore({calories:calories , id:id[0]?.id , check:check , time:time}))
            .unwrap()
            .then(()=>{
              enqueueSnackbar(`We wish you healthy food and a delicious meal ❤️😍`, { variant: 'success'});
            })
            .catch()
          }} className='save_food' disabled={loading === 'pending' ? true : false}>{loading === 'pending' ? 'loading...' : "Save"}</button>
          </div>
        </div>
        <div className="highlight-wrapper">{newData}</div>
      </div>
      <div className={`main-menus ${value}`}>
        <Category />
        <hr class="divider" />
        <List calories={calories} setCalories={setCalories} check={check} setCheck={setCheck} chipData={chipData} setChipData={setChipData} meals={meals} />
      </div>
    </>
  );
}
