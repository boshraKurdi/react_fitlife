import "./Plan.css";
import Content from "./Content/Content";
import UsePagination from '../../../Hooks/UsePagination';
export default function Plan() {
  return (
    <section className="section blog" id="blog" aria-label="blog">
      <div className="container" style={{ position: 'relative'}}>
        <p className="section-subtitle">Our News</p>

        <h2 className="h2 section-title text-center">Latest Blog Feed</h2>
        <ul className="blog-list has-scrollbar">
          <Content />
        </ul>
        <UsePagination count='3' />
      </div>
    </section>
  );
}
