import { useDispatch, useSelector } from 'react-redux'
import Dashboard from '../../Components/Food/Dashboard'
import Search from '../../Components/Food/Search'
import {ActIndex} from '../../../Redux/Meal/MealSlice'
import './Food.css'
import { useEffect, useState } from 'react'
import SkeletonLoading from '../../Components/Loading/SkeletonLoading/SkeletonLoading'
export default function Food(){
    const [open , setOpen] = useState({breakfast:true , lunch: false , dinner:false , day:1 , week:1})
    const { meals , loading , error } = useSelector((state) => state.meal)
    const dispatch = useDispatch();
    useEffect(()=>{
      dispatch(ActIndex(open))
    } , [dispatch , open])
    return(
        <div style={{marginTop: '8rem'}} class="main">
            <Search open={open} setOpen={setOpen} />
            <SkeletonLoading loading={loading} error={error} type="meal">
            <Dashboard meals={meals} />
            </SkeletonLoading>
        </div>
    )
}