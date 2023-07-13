import React from "react";

function TransactionBox() {
  return (
    <section className="mt-6">
      <div className="max-w-6xl mx-auto">
        <div className="card-tran">
            <div className="card-body">

           
        <div class="flex justify-between px-3 mb-3">
          <p class=" text-slate-600 mb-md-0 text-base font-semibold">
          Latest User Transactions
          </p>
          <div class="">
       <button className=" text-[#6984aa] bg-[#6984aa1a] border-transparent rounded-md px-2 py-1 font-medium text-base">View All</button>
          </div>
        </div>
        <div class="table-responsive mb-3">
          <table class="table mb-0">
            <thead class="thead-light">
              <tr class="small text-uppercase">
                <th scope="col" title="Version Transaction ID">
                  <a
                    class="mr-1"
                    href="/transactions?order=asc"
                    title="Sorted in descending order, click to sort by Ascending order"
                  >
                    TX ID
                  </a>
                  <strong>
                    <i class="fa fa-angle-down"></i>
                  </strong>
                </th>
                <th scope="col" title="Block Number">
                  Block
                </th>
                <th scope="col" title="UTC Time">
                  Timestamp
                </th>
                <th scope="col" title="Transaction Type">
                  Type
                </th>
                <th scope="col" width="200" title="Sender Address">
                  From
                </th>
                <th scope="col" width="20"></th>
                <th scope="col" width="200" title="Receiver Address">
                  To
                </th>
                <th scope="col" title="Transfer Amount">
                  Amount
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <a href="/version/579835396">579835396</a>
                </td>
                <td class="text-nowrap">
                  <a href="/block/103735193">103735193</a>
                </td>
                <td class="text-nowrap">
                  <span title="Jul-12-2023 11:49:09 AM">33 mins ago</span>
                </td>
                <td
                  class="font-size-1 text-muted text-nowrap"
                  title="state_checkpoint_transaction"
                >
                  State Checkpoint{" "}
                </td>
                <td colspan="4"></td>
              </tr>
              <tr>
                <td>
                  <a href="/version/579835395">579835395</a>
                </td>
                <td class="text-nowrap">
                  <a href="/block/103735193">103735193</a>
                </td>
                <td class="text-nowrap">
                  <span title="Jul-12-2023 11:49:09 AM">33 mins ago</span>
                </td>
                <td
                  class="font-size-1 text-muted text-nowrap"
                  title="user_transaction"
                >
                  User{" "}
                </td>
                <td class="text-nowrap">
                  <a
                    href="/address/0x1b6ee99b66c109e5fa43abf147b615ba8aaddf983aacbc50dea96224a03a9743"
                    title="0x1b6ee99b66c109e5fa43abf147b615ba8aaddf983aacbc50dea96224a03a9743"
                  >
                    0x1b6ee9....a03a9743
                  </a>
                </td>
                <td class="text-nowrap">
                  <span
                    class="badge badge-warning text-uppercase w-100"
                    title="Sent Transaction"
                  >
                    out
                  </span>
                </td>
                <td class="text-nowrap">n/a</td>
                <td class="text-nowrap">
                  0 <span class="text-muted">APT</span>
                </td>
              </tr>
              <tr>
                <td>
                  <a href="/version/579835394">579835394</a>
                </td>
                <td class="text-nowrap">
                  <a href="/block/103735193">103735193</a>
                </td>
                <td class="text-nowrap">
                  <span title="Jul-12-2023 11:49:09 AM">33 mins ago</span>
                </td>
                <td
                  class="font-size-1 text-muted text-nowrap"
                  title="block_metadata_transaction"
                >
                  Block Metadata{" "}
                </td>
                <td colspan="4"></td>
              </tr>
              <tr>
                <td>
                  <a href="/version/579835393">579835393</a>
                </td>
                <td class="text-nowrap">
                  <a href="/block/103735192">103735192</a>
                </td>
                <td class="text-nowrap">
                  <span title="Jul-12-2023 11:49:08 AM">33 mins ago</span>
                </td>
                <td
                  class="font-size-1 text-muted text-nowrap"
                  title="state_checkpoint_transaction"
                >
                  State Checkpoint{" "}
                </td>
                <td colspan="4"></td>
              </tr>
              <tr>
                <td>
                  <a href="/version/579835392">579835392</a>
                </td>
                <td class="text-nowrap">
                  <a href="/block/103735192">103735192</a>
                </td>
                <td class="text-nowrap">
                  <span title="Jul-12-2023 11:49:08 AM">33 mins ago</span>
                </td>
                <td
                  class="font-size-1 text-muted text-nowrap"
                  title="block_metadata_transaction"
                >
                  Block Metadata{" "}
                </td>
                <td colspan="4"></td>
              </tr>
              <tr>
                <td>
                  <a href="/version/579835391">579835391</a>
                </td>
                <td class="text-nowrap">
                  <a href="/block/103735191">103735191</a>
                </td>
                <td class="text-nowrap">
                  <span title="Jul-12-2023 11:49:08 AM">33 mins ago</span>
                </td>
                <td
                  class="font-size-1 text-muted text-nowrap"
                  title="state_checkpoint_transaction"
                >
                  State Checkpoint{" "}
                </td>
                <td colspan="4"></td>
              </tr>
              <tr>
                <td>
                  <a href="/version/579835390">579835390</a>
                </td>
                <td class="text-nowrap">
                  <a href="/block/103735191">103735191</a>
                </td>
                <td class="text-nowrap">
                  <span title="Jul-12-2023 11:49:08 AM">33 mins ago</span>
                </td>
                <td
                  class="font-size-1 text-muted text-nowrap"
                  title="block_metadata_transaction"
                >
                  Block Metadata{" "}
                </td>
                <td colspan="4"></td>
              </tr>
          
           
          
            
           
              <tr>
                <td>
                  <a href="/version/579835384">579835384</a>
                </td>
                <td class="text-nowrap">
                  <a href="/block/103735188">103735188</a>
                </td>
                <td class="text-nowrap">
                  <span title="Jul-12-2023 11:49:07 AM">33 mins ago</span>
                </td>
                <td
                  class="font-size-1 text-muted text-nowrap"
                  title="user_transaction"
                >
                  User{" "}
                </td>
                <td class="text-nowrap">
                  <a
                    href="/address/0x6cfe5d7aad9b4a570255f2a546d998d1d754416601106783e57e8633ba5992cc"
                    title="0x6cfe5d7aad9b4a570255f2a546d998d1d754416601106783e57e8633ba5992cc"
                  >
                    0x6cfe5d....ba5992cc
                  </a>
                </td>
                <td class="text-nowrap">
                  <span
                    class="badge badge-warning text-uppercase w-100"
                    title="Sent Transaction"
                  >
                    out
                  </span>
                </td>
                <td class="text-nowrap">n/a</td>
                <td class="text-nowrap">
                  0 <span class="text-muted">APT</span>
                </td>
              </tr>
        
          
            
            
              <tr>
                <td>
                  <a href="/version/579835377">579835377</a>
                </td>
                <td class="text-nowrap">
                  <a href="/block/103735185">103735185</a>
                </td>
                <td class="text-nowrap">
                  <span title="Jul-12-2023 11:49:07 AM">33 mins ago</span>
                </td>
                <td
                  class="font-size-1 text-muted text-nowrap"
                  title="user_transaction"
                >
                  User{" "}
                </td>
                <td class="text-nowrap">
                  <a
                    href="/address/0xb91d3fef0eeb4e685dc85e739c7d3e2968784945be4424e92e2f86e2418bf271"
                    title="0xb91d3fef0eeb4e685dc85e739c7d3e2968784945be4424e92e2f86e2418bf271"
                  >
                    0xb91d3f....418bf271
                  </a>
                </td>
                <td class="text-nowrap">
                  <span
                    class="badge badge-warning text-uppercase w-100"
                    title="Sent Transaction"
                  >
                    out
                  </span>
                </td>
                <td class="text-nowrap">
                  <i
                    class="far fa-file-alt text-secondary mr-1"
                    title="Function"
                  ></i>
                  <a
                    href="/address/0xb91d3fef0eeb4e685dc85e739c7d3e2968784945be4424e92e2f86e2418bf271"
                    title="0xb91d3fef0eeb4e685dc85e739c7d3e2968784945be4424e92e2f86e2418bf271"
                  >
                    0xb91d3f....418bf271
                  </a>
                </td>
                <td class="text-nowrap">
                  0 <span class="text-muted">APT</span>
                </td>
              </tr>
              <tr>
                <td>
                  <a href="/version/579835376">579835376</a>
                </td>
                <td class="text-nowrap">
                  <a href="/block/103735185">103735185</a>
                </td>
                <td class="text-nowrap">
                  <span title="Jul-12-2023 11:49:07 AM">33 mins ago</span>
                </td>
                <td
                  class="font-size-1 text-muted text-nowrap"
                  title="block_metadata_transaction"
                >
                  Block Metadata{" "}
                </td>
                <td colspan="4"></td>
              </tr>
            
          
 
           
            </tbody>
          </table>
        </div>
        </div>
        </div>
      </div>
    </section>
  );
}

export default TransactionBox;
