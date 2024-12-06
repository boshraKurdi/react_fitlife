import { SwiperSlide } from "swiper/react";
import Level from "../../../Level/Level";
import Components from "../../../../Style/Components/Components";
export default function Content({ planLevel }) {
  const { MyComponentHeroSubtitleH3 } = Components();
  return (
    // <SwiperSlide key={planLevel.plan_levels && planLevel.plan_levels.plan.id}>
    //   <Card sx={{ display: 'flex' , maxWidth:'400px' , height:'100%' , justifyContent:'space-between' , borderRadius:'12px' , background:'#fff' , boxShadow: 'inset 0px 0px 2px #000000b5'}}>
    //   <Box sx={{ display: 'flex', flexDirection: 'column' }}>
    //     <CardContent sx={{ flex: '1 0 auto' }}>
    //       <Typography sx={{fontSize:'1.6rem'}} component="div" color="#000" variant="h5">
    //       {planLevel.plan_levels && planLevel.plan_levels.plan.title}
    //       </Typography>
    //       <Typography
    //         variant="subtitle1"
    //         component="div"
    //         sx={{ color: '#000' , fontSize:'1.2rem' }}
    //       >
    //         level : {planLevel.plan_levels?.level.title} <Level num={planLevel.plan_levels?.level.id} />
    //       </Typography>
    //     </CardContent>
    //     <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
    //       <Link to={`/planDetails/${planLevel.plan_levels.id}`} style={{color:'#000' , display:'flex' , alignItems:'center' , fontSize:'1.3rem' , padding:'0 1rem'}} aria-label="previous">
    //         show Details <KeyboardDoubleArrowRightIcon sx={{fontSize:'1.8rem'}} />
    //       </Link>
    //     </Box>
    //   </Box>
    //   <CardMedia
    //     component="img"
    //     sx={{ width: 151 }}
    //     image={planLevel.plan_levels.plan.media &&
    //       planLevel.plan_levels.plan.media[0].original_url}
    //     alt="Live from space album cover"
    //   />
    // </Card>
    // </SwiperSlide>
    <SwiperSlide  key={planLevel.plan_levels && planLevel.plan_levels.plan.id}>
        <li className="scrollbar-item">
          <div className="class-card">
            <figure className="card-banner img-holder">
              <img
                src={planLevel.plan_levels.plan.media && planLevel.plan_levels.plan.media[0].original_url}
                width="416"
                height="240"
                loading="lazy"
                alt="Cardio & Strenght"
                className="img-cover"
              />
            </figure>

            <div className="card-content">
              <div className="title-wrapper">
                <Level num={planLevel.plan_levels?.level.id} />

                <MyComponentHeroSubtitleH3 className="h3">
                  <a href={`/planDetails/${planLevel.plan_levels.id}`} className="card-title">
                  {planLevel.plan_levels && planLevel.plan_levels.plan.title}
                  </a>
                </MyComponentHeroSubtitleH3>
              </div>

              {/* <p className="card-text">{plan.plan && plan.plan.description}</p> */}

              {/* <div className="card-progress">
              <div className="progress-wrapper">
                <p className="progress-label">Class Full</p>

                <span className="progress-value">{plan.targets && plan.targets[0].rate}</span>
              </div>

              <div className="progress-bg">
                <div
                  className="progress-bar"
                  style={{ width: `${plan.targets && plan.targets[0].rate}` }}
                ></div>
              </div>
            </div> */}
            </div>
          </div>
        </li>
      </SwiperSlide>
  );
}
