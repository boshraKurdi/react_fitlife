import { Link } from "react-router-dom";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import "./Content.css";
export default function Content({ service }) {
  return (
    <div class="plan_service">
      <div class="inner">
        <span class="pricing">
          <span>${service.price}</span>
        </span>
        <p class="title">{service.service}</p>
        <p class="info">
          This plan is for those who have a team already and running a large
          business.
        </p>
        <ul class="features">
          <li>
            <span class="icon">
              <CheckCircleIcon />
            </span>
            <span>
              <strong>{service.duration}</strong> duration service
            </span>
          </li>
          <li>
            <span class="icon">
              <CheckCircleIcon />
            </span>
            <span>
              Plan <strong>chat coach</strong>
            </span>
          </li>
          <li>
            <span class="icon">
              <CheckCircleIcon />
            </span>
            <span>File sharing</span>
          </li>
        </ul>
        <div class="action">
          <Link class="button" to="payment">
            payment
          </Link>
        </div>
      </div>
    </div>
  );
}
