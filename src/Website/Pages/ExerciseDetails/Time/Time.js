import { useSelector } from "react-redux"
import Heading from "../../../Components/Heading/Heading";
import { useState } from "react";
import SwiperComponent from "../../../Components/Swiper/SwiperComponent";

export default function Time({calories}){
    const { value } = useSelector((state) => state.mode);
    const [ data ] = useState([
        {title: '1 time' , calories:`${calories} calories burns`} ,
        {title: '2 time' , calories:`${2*calories} calories burns`} ,
        {title: '3 time' , calories:`${3*calories} calories burns`} ,
        {title: '4 time' , calories:`${4*calories} calories burns`} ,
        {title: '5 time' , calories:`${5*calories} calories burns`} ,
        {title: '6 time' , calories:`${6*calories} calories burns`} ,
        {title: '7 time' , calories:`${7*calories} calories burns`} ,
        {title: '8 time' , calories:`${8*calories} calories burns`} ,
        {title: '9 time' , calories:`${9*calories} calories burns`} ,
        {title: '10 time' , calories:`${10*calories} calories burns`} ,
    ]) 
    const newData = data.map((d)=>{
        return(
            <div style={{width:'275px'}} className={`e_service__card ${value}`}>
            <h4>{d.title}</h4>
            <p>
            {d.calories}
            </p>
            <span style={{borderRadius:'8px'}}>
              save
            </span>
          </div>
        )
    })
    return(
        <section className="section__container e_service__container" id="e_service">
            <Heading title={'custome repetitions'} subTitle={'custome repetitions for exercise'} />
        <div style={{display:'flex'}} className="e_service__grid">
        <SwiperComponent data={newData} />
          
        </div>
      </section>
    )
}