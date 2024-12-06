import "./ProfileCoach.css";
import { useDispatch, useSelector } from "react-redux";
import { ActStore } from "../../../Redux/Chat/ChatSlice";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { ActShow } from "../../../Redux/User/UserSlice";
export default function ProfileCoach() {
    const { value } = useSelector((state) => state.mode) 
    const { user , loading , error } = useSelector((state) => state.user)
    const { id } = useParams()
    const dispatch = useDispatch();
    console.log(error , loading)
    function HandelChat(){
      dispatch(ActStore(id))
    }
    useEffect(()=>{
      dispatch(ActShow(id))
    } ,[dispatch , id])
  return (
    <div className="about_section">
      <div className="about_coach">
        <img src={user.media && user.media[0].original_url} alt="none" className="about_img" />
        <div className="about_text">
          <h1>About {user?.name}</h1>
          <p className="p_profile_coach">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod amet
            sapiente optio maiores, quos veritatis atque, laudantium id beatae
            autem quaerat? Architecto, inventore! Ab?
          </p>
          {/* <h1>Skills</h1> */}
          <div className="skill">
        <div className={`bar ${value}`}>
          <div className="text">
            <p>UI UX DESIGN</p>
            <p>90%</p>
          </div>
          <div className="progress">
            <span className="ui"></span>
          </div>
        </div>
        <div className={`bar ${value}`}>
          <div className="text">
            <p>MARKETING</p>
            <p>80%</p>
          </div>
          <div className="progress">
            <span className="marketing"></span>
          </div>
        </div>
        <div className={`bar ${value}`}>
          <div className="text">
            <p>WEB DEVELOpMENT</p>
            <p>75%</p>
          </div>
          <div className="progress">
            <span className="web"></span>
          </div>
        </div>
        <div className={`bar ${value}`}>
          <div className="text">
            <p>SEO</p>
            <p>65%</p>
          </div>
          <div className="progress">
            <span className="seo"></span>
          </div>
        </div>
      </div>
          <div className="buttons">
            <button onClick={HandelChat} className="hire_me">
              start chat
            </button>
          </div>
        </div>
        
      </div>

    
    </div>
  );
}
