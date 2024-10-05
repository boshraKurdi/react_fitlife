import "./Goal.css";
import { Goal_1 } from '../../../index'
import Content from "./Content/Content";
import UsePagination from "../../../Hooks/UsePagination";
export default function Goal() {
  return (
    <section
      className="section class has-bg-image"
      id="class"
      aria-label="class"
      style={{ backgroundImage: `url(${Goal_1})` }}
    >
      <div className="container" style={{ position: 'relative'}}>
        <p className="section-subtitle">Our Classes</p>

        <h2 className="h2 section-title text-center">
          Fitness Classes For Every Goal
        </h2>
          <ul className="class-list has-scrollbar">
            <Content />
          </ul>
        <UsePagination count='15' />
      </div>
    </section>
  );
}
