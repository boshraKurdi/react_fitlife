import Lottie from "lottie-react";
import notFound from '../../../../lottiefiles/404.json'
import empty from '../../../../lottiefiles/empty.json'
import error from '../../../../lottiefiles/error.json'
import loading from '../../../../lottiefiles/loading.json'
const lottieFilesMap = {
    notFound: notFound,
    empty: empty ,
    error: error,
    loading: loading
}
console.log('LottieFiles empty')
const LottieFiles = ({type , message}) => {
    return(
        <div style={{display:"flex" , alignItems:"center" , justifyContent:"center" , margin: 'auto'}}>
            <div style={{width:"250px" , height:"250px"}}>
                <Lottie animationData={lottieFilesMap[type]} />
                {message && <h3 style={{margin: "-15px auto", textAlign: "center" ,fontSize: "1.5rem"}}>{message}</h3>}
            </div>
        </div>
    )
}
export default LottieFiles