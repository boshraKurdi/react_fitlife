import { useSelector } from 'react-redux';
import './Stepper.css'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
export default function Stepper({data , setData}){
    const { value } = useSelector((state) => state.mode)
    function HandelData(week , day){
        setData({...data , day:day ,week:week})
    }

   return(
    <div className="timeline">
        <div className="timeline_container right_container">
            <span className={`num_img ${value}`}>1</span>
            <div className={`text_body ${value}`}>
                <button onClick={(e)=>{
                    e.preventDefault()
                    HandelData(1 , 1)
                }} className="cycle_number active">1</button>
                <span className="ar"><ChevronRightIcon style={{color:'#ccc'}} /></span>
                <button onClick={(e)=>{
                    e.preventDefault()
                    HandelData(1 , 2)
                }} className="cycle_number">2</button>
                <span className="ar"><ChevronRightIcon style={{color:'#ccc'}} /></span>
                <button onClick={(e)=>{
                    e.preventDefault()
                    HandelData(1 , 3)
                }} className="cycle_number">3</button>
                <span className="ar"><ChevronRightIcon style={{color:'#ccc'}} /></span>
                <button onClick={(e)=>{
                    e.preventDefault()
                    HandelData(1 , 4)
                }} className="cycle_number">4</button>
                <span className="ar"><ChevronRightIcon style={{color:'#ccc'}} /></span>
                <button onClick={(e)=>{
                    e.preventDefault()
                    HandelData(1 , 5)
                }} className="cycle_number">5</button>
                <span className="ar"><ChevronRightIcon style={{color:'#ccc'}} /></span>
                <button onClick={(e)=>{
                    e.preventDefault()
                    HandelData(1 , 6)
                }} className="cycle_number">6</button>
                <span className="ar"><ChevronRightIcon style={{color:'#ccc'}} /></span>
                <button onClick={(e)=>{
                    e.preventDefault()
                    HandelData(1 , 7)
                }} className="cycle_number">7</button>
            </div>
        </div>
        <div className="timeline_container right_container">
            <span className={`num_img ${value}`}>2</span>
            <div className={`text_body ${value}`}>
                <button onClick={(e)=>{
                    e.preventDefault()
                    HandelData(2 , 1)
                }} className="cycle_number active">1</button>
                <span className="ar"><ChevronRightIcon style={{color:'#ccc'}} /></span>
                <button onClick={(e)=>{
                    e.preventDefault()
                    HandelData(2 , 2)
                }} className="cycle_number">2</button>
                <span className="ar"><ChevronRightIcon style={{color:'#ccc'}} /></span>
                <button onClick={(e)=>{
                    e.preventDefault()
                    HandelData(2 , 3)
                }} className="cycle_number">3</button>
                <span className="ar"><ChevronRightIcon style={{color:'#ccc'}} /></span>
                <button onClick={(e)=>{
                    e.preventDefault()
                    HandelData(2 , 4)
                }} className="cycle_number">4</button>
                <span className="ar"><ChevronRightIcon style={{color:'#ccc'}} /></span>
                <button onClick={(e)=>{
                    e.preventDefault()
                    HandelData(2 , 5)
                }} className="cycle_number">5</button>
                <span className="ar"><ChevronRightIcon style={{color:'#ccc'}} /></span>
                <button onClick={(e)=>{
                    e.preventDefault()
                    HandelData(2 , 6)
                }} className="cycle_number">6</button>
                <span className="ar"><ChevronRightIcon style={{color:'#ccc'}} /></span>
                <button onClick={(e)=>{
                    e.preventDefault()
                    HandelData(2 , 7)
                }} className="cycle_number">7</button>
            </div>
        </div>
        <div className="timeline_container right_container">
            <span className={`num_img ${value}`}>3</span>
            <div className={`text_body ${value}`}>
                <button onClick={(e)=>{
                    e.preventDefault()
                    HandelData(3 , 1)
                }} className="cycle_number active">1</button>
                <span className="ar"><ChevronRightIcon style={{color:'#ccc'}} /></span>
                <button onClick={(e)=>{
                    e.preventDefault()
                    HandelData(3 , 2)
                }} className="cycle_number">2</button>
                <span className="ar"><ChevronRightIcon style={{color:'#ccc'}} /></span>
                <button onClick={(e)=>{
                    e.preventDefault()
                    HandelData(3 , 3)
                }} className="cycle_number">3</button>
                <span className="ar"><ChevronRightIcon style={{color:'#ccc'}} /></span>
                <button onClick={(e)=>{
                    e.preventDefault()
                    HandelData(3 , 4)
                }} className="cycle_number">4</button>
                <span className="ar"><ChevronRightIcon style={{color:'#ccc'}} /></span>
                <button onClick={(e)=>{
                    e.preventDefault()
                    HandelData(3 , 5)
                }} className="cycle_number">5</button>
                <span className="ar"><ChevronRightIcon style={{color:'#ccc'}} /></span>
                <button onClick={(e)=>{
                    e.preventDefault()
                    HandelData(3 , 6)
                }} className="cycle_number">6</button>
                <span className="ar"><ChevronRightIcon style={{color:'#ccc'}} /></span>
                <button onClick={(e)=>{
                    e.preventDefault()
                    HandelData(3 , 7)
                }} className="cycle_number">7</button>
            </div>
        </div>
      
    </div>
   )
}