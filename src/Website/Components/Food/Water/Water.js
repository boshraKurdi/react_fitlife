import Lottie from 'lottie-react'
import './Water.css'
import water1 from '../../../../lottiefiles/water.json'
import { useSelector } from 'react-redux'
import ButtonLoading from '../../Loading/ButtonLoading/ButtonLoading'
export default function Water(){
    const { value } = useSelector((state)=>state.mode)
    return(
        <>
        <div className='water_title'>
            <h1>Water Quntity</h1>
        </div>
        <div className={`water ${value}`}>
            <div className='water_container'>
            <div className='water_img'>
            <Lottie className='water__img' animationData={water1} /> 
            </div>
            <div className='water_info'>
                <h2>Enter Quntety Water</h2>
                <p>asda sdkasnd askdnasdasd as,dnasd as,dnas,d</p>
                <form>
                <label>quntety water</label>
                <input className='water-input' style={{pointerEvents:"none"}} type='string' value={'2L - 3L'} />
                <label>quntety water</label>
                <input className='water-input' type='number' placeholder='enter leter' />
                <button className="button--link button--flex">
              Save {'dsd' === 'pending' ? <ButtonLoading/> : ''} <i className="ri-arrow-right-down-line button__icon"></i>
            </button>
                </form>
            </div>
            </div>
          
        </div>
        </>
    )
}