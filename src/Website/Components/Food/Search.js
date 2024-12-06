import { useSelector } from "react-redux";

export default function Search({open , setOpen}) {
  const { value } = useSelector((state) => state.mode)
  return (
    <div className="main-navbar">
      <div className={`search ${value}`}>
        <div className="input_time"></div>
        <button onClick={()=>{
          setOpen({...open , breakfast: true,  lunch: false , dinner:false})
        }} className={open.breakfast ? `search-btn active` : 'search-btn'}>breakfast</button>
      </div>
      <div className={`search ${value}`}>
        <div className="input_time"></div>
        <button onClick={()=>{
          setOpen({...open , breakfast: false,  lunch: true , dinner:false})
        }} className={open.lunch ? `search-btn active` : 'search-btn'}>lunch</button>
      </div>
      <div className={`search ${value}`}>
        <div className="input_time"></div>
        <button onClick={()=>{
          setOpen({...open , breakfast: false,  lunch: false , dinner:true})
        }} className={open.dinner ? `search-btn active` : 'search-btn'}>dinner</button>
      </div>
    </div>
  );
}
