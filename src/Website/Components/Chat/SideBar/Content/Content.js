import { Link } from "react-router-dom";

export default function Content({chat}){
    return(
        <Link to={`/services/chat/${chat.id}`} className="chat-box" id="Msg">
            <div className="chat-img">
              <img src={chat.coach.media && chat.coach.media[0].original_url} alt="" />
            </div>
            <div className="chat-details">
              <div className="chat-title">
                <h3>{chat.coach && chat.coach.name}</h3>
                <span>06:04 PM</span>
              </div>
              <div className="chat-msg">
                <p>{chat.lastMessage}</p>
                <span>1</span>
              </div>
            </div>
          </Link>
    )
}