import './PlanDetails.css'
import Exercises from '../../Components/PlanDetails/Exercises'
import Home from '../../Components/PlanDetails/Home'
import LastExercises from '../../Components/PlanDetails/LastExercises'
import Tips from '../../Components/PlanDetails/Tips'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ActShow } from '../../../Redux/MyPlan/MyPlanSlice'
export default function PlanDetails(){
    const { id } = useParams();
    const [ data , setData ] = useState({day:1 , week:1 , id:id})
    const [type] = useState({one:'weekly' , two:data.week})
     const dispatch = useDispatch()
        const { myplan , error , loading } = useSelector((state) => state.myPlan)
        useEffect(()=>{
          dispatch(ActShow({id:id , data:type})).unwrap().catch(()=>{console.log('error')})
        } , [dispatch , id , type])
    return(
        <>
        <Home data={data} myplan={myplan} loading={loading} error={error} />
        <Tips />
        <Exercises myplan={myplan} setData={setData} data={data} id={id} />
        <LastExercises />
        </>
    )
}