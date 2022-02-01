import './App.css';
import SideBar from './Components/Sidebar/SideBar';
import Chart from './Components/Chart/Chart'
function App() {
  return (
    <div className="app">
      <div className='app_body'>
      <SideBar />
      <Chart />
      </div>
     
    </div>
  );
}

export default App;
