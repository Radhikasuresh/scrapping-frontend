

import './App.css';

import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Cards from './Cards';
import { BrowserRouter, Route ,Routes ,Link} from 'react-router-dom';






function App() {

  return (
    <div className="App">


<div className='titlebar'>
<span style={{color:"white"}}>PRICE<span style={{color:"gold"}}> HISTORY</span></span>


</div>

  <BrowserRouter>
<Routes>
<Route path="/" element={<Cards />}/>

</Routes>

</BrowserRouter>
  
    </div>
    
  );
}

export default App;