import { useDispatch } from "react-redux";
import { Goal_3 } from "../../../../index"
import Components from "../../../../Style/Components/Components";
import { ActStore } from "../../../../../Redux/Chat/ChatSlice";
export default function Content({coach}){
    const { MyComponentHeroSubtitleH3 } = Components();
    const dispatch = useDispatch();
    function HandelChat(){
      dispatch(ActStore(coach.id))
    }
    return(
        <li className="scrollbar-item">
      <div className="class-card">
        <figure className="card-banner img-holder">
          <img
            src={coach.media && coach.media[0].original_url}
            width="416"
            height="240"
            loading="lazy"
            alt="Cardio & Strenght"
            className="img-cover"
          />
        </figure>

        <div className="card-content">
          <div className="title-wrapper">
            <img
              src={Goal_3}
              width="52"
              height="52"
              aria-hidden="true"
              alt=""
              className="title-icon"
            />

            <MyComponentHeroSubtitleH3 className="h3">
              <a href="index" className="card-title">
                {coach.name}
              </a>
            </MyComponentHeroSubtitleH3>
          </div>

          <p className="card-text">lorem sfmksdmf dsfkmdsf sdkfmsdkmf sdkfmksd</p>

          <button onClick={HandelChat} style={{background: 'var(--coquelicot)'}} className="btn" >Start Chat</button>
        </div>
      </div>
    </li>
    )
}