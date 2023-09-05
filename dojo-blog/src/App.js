import './App.css';
import Barra from './componentes/Barra';
import FormPropsTextFields from './componentes/FormPropsTextFields';

function App() {
  const title = "welcome to my blog";
  const likes = 50;
  const link = "https://www.google.com/"

  return (
    <div className="App">
        <Barra/>
        <FormPropsTextFields/>
    </div>
  );
}

export default App;
