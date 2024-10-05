import { lazy, Suspense } from "react";
import Loading from "../../Components/Loading/Loading";
const Hero = lazy(() => import("../../Components/Home/Hero/Hero")),
     About = lazy(()=> import("../../Components/Home/About/About")) ,
     Goal = lazy(()=> import('../../Components/Home/Goal/Goal')) ,
     Plan = lazy(()=> import('../../Components/Home/Plan/Plan'))
export default function Home(){
    return(
        <Suspense fallback={<Loading />}>
            <main>
            <article>
                <Hero />
                <About />
                <Goal />
                <Plan />
            </article>
        </main>
        </Suspense>
    )
}