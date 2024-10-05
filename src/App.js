import AppRouter from "./Website/Routes/AppRouter";
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"
function App() {
  return (
    <div className="App">
      <AppRouter />
      <ToastContainer position='bottom-right' />      
    </div>
  );
}

export default App;
