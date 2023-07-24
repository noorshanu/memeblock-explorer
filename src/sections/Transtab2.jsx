import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import StateChange from "../components/StateChange";
import InternalTransactions from "../components/InternalTransactions";
import CoinBlance from "../components/CoinBlance";

function Transtab() {
  return (
    <section className=" mt-12">
      <div className="max-w-6xl mx-auto">
        <div className="card-tran bg-white h-full rounded-xl border border-gray-45  p-[2.1rem]">
        <Tabs>
          <TabList>
            <Tab>Transactions</Tab>
            <Tab>Internal Transactions</Tab>
            <Tab>Coin Balance History</Tab>
            <Tab>Blocks Validated</Tab>
          </TabList>

          <TabPanel>
            <div className=" p-[1rem]">
          
                <div className=" ">
                   <InternalTransactions/>

                </div>
            </div>
          </TabPanel>
          <TabPanel>
          <div className=" p-[1rem]">
                <h1 className=" mb-4">Internal Transactions</h1>
                <div className=" bg-[#f8f9fa] rounded-md px-2 py-3 text-center">
                    <p>There are no internal transactions for this address.</p>

                </div>
            </div>
          </TabPanel>


          <TabPanel>
          <div className=" p-[1rem]">
                <h1 className=" mb-4">Raw Trace</h1>
                <div className=" bg-[#f8f9fa] rounded-md px-2 py-3 text-center">
                   <CoinBlance/>

                </div>
            </div>
          </TabPanel>


          <TabPanel>
          <div className=" p-[1rem]">
                <h1 className=" mb-4">State changes</h1>
             
                   <StateChange/>

              
            </div>
          </TabPanel>
        </Tabs>
        </div>
       
      </div>
    </section>
  );
}

export default Transtab;
