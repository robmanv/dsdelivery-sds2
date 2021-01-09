import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './App.css';
import Routes from './Routes';

function App() {
  return (
    <>                           
    <div>
      <>
        <Routes />
        <ToastContainer />
      </>
    </div>
    </>
  );
}

export default App;



/* <> é o fragment pra importar 2 ou mais elementos no RETURN */