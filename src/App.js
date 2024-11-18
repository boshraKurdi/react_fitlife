import Message from './Messages/Message'
import AppRouter from "./Routes/AppRouter";
import './Dashboard/style/style.css'
import "react-toastify/dist/ReactToastify.css"
function App() {
  return (
    <div className="App">
      <AppRouter />  
      <Message /> 
    </div>
  );
}

export default App;
