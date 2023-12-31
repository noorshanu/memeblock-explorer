
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
import Wallet2 from "./Pages/Wallet2";
import TxAddress from "./Pages/TxAddress";
import Pending from "./Pages/Pending";
import AllTokens from "./Pages/AllTokens";
import MembToken from "./Pages/MembToken";
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
     <Route path="/address2" element={<Wallet2/>} />
     <Route path="/tx" element={<TxAddress/>} />
     <Route path="/pending" element={<Pending/>} />
     <Route path="/alltoken" element={<AllTokens/>} />
     <Route path="/membtoken" element={<MembToken/>} />


      </Routes>
     </Router>
    </>
  );
}

export default App;
