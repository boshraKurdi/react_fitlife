import { useSelector } from 'react-redux'
import { Hero , About , Goal , Plan } from '../../index'
export default function Home(){
    const { user } = useSelector((state) => state.auth)
    console.log(user)
    return(
        <main>
            <article>
                <Hero />
                <About />
                <Goal />
                <Plan />
            </article>
        </main>
    )
}