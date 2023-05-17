import './App.css';
import Userinfo from './Userinfo';
import Cartitem from './Component/Cartitem';
import Menu from './Component/Menu';

function App() {
  return (

    <div className="App">
      <div className="wraper"> 
        <Menu/>
        <br>
        </br>
          <Userinfo/>
          <Cartitem/>
        </div>
    </div>
  );
}

export default App;
