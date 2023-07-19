
import {
  BrowserRouter as Router,
  Routes,
  Route,
 
} from "react-router-dom";
import Home from "./Pages/Home";
import BlockPage from "./Pages/BlockPage";
import TransactionPage from "./Pages/TransactionPage";
import Uncles from "./Pages/Uncles";
import Reorgs from "./Pages/Reorgs";
import Validate from "./Pages/Validate";
import Wallet from "./Pages/Wallet";
import TxAddress from "./Pages/TxAddress";
function App() {
  return (
   
    <>
     <Router>
     <Routes>
     <Route path="/" element={<Home/>} />
     <Route path="/blocks" element={<BlockPage/>} />
     <Route path="/transactions" element={<TransactionPage/>} />
     <Route path="/uncles" element={<Uncles/>} />
     <Route path="/reogrs" element={<Reorgs/>} />
     <Route path="/txs" element={<Validate/>} />
     <Route path="/address" element={<Wallet/>} />
     <Route path="/tx" element={<TxAddress/>} />

      </Routes>
     </Router>
    </>
  );
}

export default App;
