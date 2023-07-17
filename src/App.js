
import {
  BrowserRouter as Router,
  Routes,
  Route,
 
} from "react-router-dom";
import Home from "./Pages/Home";
import BlockPage from "./Pages/BlockPage";
import TransactionPage from "./Pages/TransactionPage";
import Uncles from "./Pages/Uncles";
function App() {
  return (
   
    <>
     <Router>
     <Routes>
     <Route path="/" element={<Home/>} />
     <Route path="/blocks" element={<BlockPage/>} />
     <Route path="/transactions" element={<TransactionPage/>} />
     <Route path="/uncles" element={<Uncles/>} />

      </Routes>
     </Router>
    </>
  );
}

export default App;
