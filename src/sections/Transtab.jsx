import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

function Transtab() {
  return (
    <section className=" mt-12">
      <div className="max-w-6xl mx-auto">
        <div className="card-tran bg-white h-full rounded-xl border border-gray-45  p-[2.1rem]">
        <Tabs>
          <TabList>
            <Tab>Internal Transactions</Tab>
            <Tab>Logs</Tab>
          </TabList>

          <TabPanel>
            <div className=" p-[1rem]">
                <h1 className=" mb-4">Internal Transactions</h1>
                <div className=" bg-[#f8f9fa] rounded-md px-2 py-3 text-center">
                    <p>There are no internal transactions for this transaction.</p>

                </div>
            </div>
          </TabPanel>
          <TabPanel>
            <h2>Any content 2</h2>
          </TabPanel>
        </Tabs>
        </div>
       
      </div>
    </section>
  );
}

export default Transtab;
