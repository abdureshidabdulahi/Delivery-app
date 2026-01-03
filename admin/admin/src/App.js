 
import './App.css';
import NavBar from './component/navBar/navBar';
import SideBar from './component/sideBar/sideBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <hr/>
      <div className='app-content'>
        <SideBar />
      </div>

    </div>
  );
}

export default App;
