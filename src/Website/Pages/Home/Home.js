import { Hero , About , Goal , Plan } from '../../index'
export default function Home(){
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