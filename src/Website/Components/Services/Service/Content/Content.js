import { Link } from "react-router-dom";
import "./Content.css";
export default function Content({service}) {
  return (
    /* From Uiverse.io by Yaya12085 */
    <div className="card_service">
      <div className="content">
        <div className="title">{service.service}</div>
        <p className="subTitle">{service.duration}</p>
        <div className="price">$ {service.price}</div>
        <div className="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at
          posuere eros. Interdum et malesuada fames ac ante ipsum primis in
          faucibus.
        </div>
      </div>
      <Link to="payment" className="button">Buy now</Link>
    </div>
  );
}
