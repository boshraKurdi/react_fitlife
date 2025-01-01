import Lottie from "lottie-react";
import "./Input.css";
import Lsleep from "../../../../lottiefiles/sleep.json";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ActStoreSleep } from "../../../../Redux/Target/TargetSlice";
import { useSnackbar } from 'notistack';
import ButtonLoading from "../../Loading/ButtonLoading/ButtonLoading";
export default function Input({data}) {
    const [sleep , setSleep] = useState(data.targets && data.targets[0]?.sleep);
    const {loading} = useSelector((state) => state.target)
    const { enqueueSnackbar } = useSnackbar();
    const dispatch = useDispatch()
  return (
    <section className="sleep_about section container" id="about">
      <div className="about__container grid">
        <Lottie className="about__img" animationData={Lsleep} />

        <div className="about__data">
          <h2 className="section__title about__title">
          Sleep duration & <br /> input field
          </h2>

          <p className="about__description">
            We have over 4000+ unbiased reviews and our customers trust our
            plant process and delivery service every time
          </p>
          <div className="about__details">
                <label>time sleep</label>
                <input type="text" style={{pointerEvents:'none'}} className="sleep_input" placeholder="enter your hours sleep" value={data.sleep + ' h'} />
            </div>
          <form >
            <div className="about__details">
                <label>time sleep</label>
                <input value={sleep} onChange={(e)=>{setSleep(e.target.value)}} type="number" className="sleep_input" placeholder="enter your hours sleep" />
            </div>

            <button onClick={(e)=>{
                e.preventDefault()
                dispatch(ActStoreSleep(sleep)).unwrap().then(()=>{
                    enqueueSnackbar(`save successfully!`, { variant: "success" });
    
                }).catch(()=>{
                    enqueueSnackbar(`save Faild!`, { variant: "error" });
                })
            }} disabled={loading === 'pending' ? true : false} className="button--link button--flex">
              Save {loading === 'pending' ? <ButtonLoading/> : ''} <i className="ri-arrow-right-down-line button__icon"></i>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
