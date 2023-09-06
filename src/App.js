import './App.css';
import Barra from './componentes/Barra';
import FormPropsTextFields from './componentes/FormPropsTextFields';
import QR from './componentes/qr';
import Drawer from './componentes/Drawer';

function App() {
  const title = "welcome to my blog";
  const likes = 50;
  const link = "https://www.google.com/"

  return (
    <div className="App">
        <Barra/>
        <br />
        <br />
        <br />
        <br />
        <QR/>
        <br />
        <br />
        <br />
        <br />
        <Drawer/>
    </div>
  );
}

export default App;
