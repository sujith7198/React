import logo from './logo.svg';
import './App.css';
import NaBAR from './Navbar.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import CARDS from './Cards';
import BODY from './Body';
import FORM from './Form';
import pop1 from './img/icon1.png';
import pop2 from './img/icon2.png';
import pop3 from './img/icon3.png';
import pop4 from './img/icon4.png';
import SLIDE from './Slide';
import END from './End';
import ICON from './Icon';
import CONT from './cont';
import DEMO from './Demo';


function App() {
  let data={
    title:"raja",
    para:"There are many variations of passages of Lorem Ipsum available, but the",
    bnt:"submit",
    ima:pop1
  }
  let aero={
    title:"sujith",
    para:"There are many variations of passages of Lorem Ipsum available, but the",
    bnt:"result",
    ima:pop2
  }
  return (
    <div className="App">
       <NaBAR/> 
     <CONT /> 
     <CARDS mykey={data} /> 
     <BODY />
    <FORM />
    <SLIDE />
    <END />
    {/* <ICON />  */}
     {/* <DEMO isGoal={false} /> */}
    </div>
  );
}

export default App;
