import HomeComponent from "./components/Home/Home.js";
import "./App.css";
import EDA from "./components/EDA/EDA.js";
import Result from "./components/Result/Result.js";
import Model from "./components/Models/Model.js";
import Model1 from "./components/Models/Model1.js";
import Model2 from "./components/Models/Model2.js";
import Model3 from "./components/Models/Model3.js";
import Model4 from "./components/Models/Model4.js";
import Model5 from "./components/Models/Model5.js";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <div className="App">
    <Router>
   <Routes>
    <Route exact path="/"  element={<HomeComponent/>}/>
    <Route path="/EDA" element={<EDA/>}/>
    <Route path="/Result" element={<Result/>}/>
    <Route path="/Model" element={<Model/>}/>
    <Route path="/model1" element={<Model1/>}/>
    <Route path="/model2" element={<Model2/>}/>
    <Route path="/model3" element={<Model3/>}/>
    <Route path="/model4" element={<Model4/>}/>
    <Route path="/model5" element={<Model5/>}/>
    
   </Routes>
  </Router>

  </div>

  );
}

export default App;
