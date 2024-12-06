import './PlanDetails.css'
import Exercises from '../../Components/PlanDetails/Exercises'
import Home from '../../Components/PlanDetails/Home'
import LastExercises from '../../Components/PlanDetails/LastExercises'
import Tips from '../../Components/PlanDetails/Tips'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
export default function PlanDetails(){
    const { id } = useParams();
    const [ data , setData ] = useState({day:1 , week:1 , id:id})
    return(
        <>
        <Home id={id} />
        <Tips />
        <Exercises setData={setData} data={data} id={id} />
        <LastExercises />
        </>
    )
}