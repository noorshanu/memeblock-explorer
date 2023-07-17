
import {
  BrowserRouter as Router,
  Routes,
  Route,
 
} from "react-router-dom";
import Home from "./Pages/Home";
import BlockPage from "./Pages/BlockPage";
import TransactionPage from "./Pages/TransactionPage";
function App() {
  return (
   
    <>
     <Router>
     <Routes>
     <Route path="/" element={<Home/>} />
     <Route path="/blocks" element={<BlockPage/>} />
     <Route path="/transactions" element={<TransactionPage/>} />

      </Routes>
     </Router>
    </>
  );
}

export default App;
