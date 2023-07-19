import React from "react";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip as ReactTooltip } from "react-tooltip";
function TransactionDetails() {
  return (
    <section className="mt-4">
      <div className="max-w-6xl mx-auto">
        <div className="card-tran bg-white h-full rounded-xl border border-gray-45  p-[2.1rem]   mb-2">
          <div className="flex justify-between items-center mb-3">
            <h1>Transaction Details</h1>
          </div>
          <div className="flex flex-col  justify-between  gap-2 sm:gap-0">
            <dl class="row">
              <dt class="col-sm-3 col-lg-2 text-muted">
                <span
                  class="i-tooltip-2 "
                  data-boundary="window"
                  data-container="body"
                  data-html="true"
                  data-placement="top"
                  data-toggle="tooltip"
                  title="Unique character string (TxID) assigned to every verified transaction."
                >
                  <i class="fa-solid fa-circle-info"></i>
                </span>
                Transaction Hash
              </dt>
              <dd class="col-sm-9 col-lg-10" style={{ wordBreak: "break-all" }}>
                <span
                  class="transaction-details-address"
                  data-test="transaction_detail_hash"
                >
                  0x7e0778bfa42f7a96823be2ef3ca952acb51772c80cbd34f71bb65dd9463e776c{" "}
                </span>
                <span
                  aria-label="Copy Transaction Hash"
                  data-clipboard-text="0x7e0778bfa42f7a96823be2ef3ca952acb51772c80cbd34f71bb65dd9463e776c"
                  id="app-title"
                  class="btn-copy-icon btn-copy-icon-small btn-copy-icon-custom btn-copy-icon-no-borders"
                  data-placement="top"
                  data-toggle="tooltip"
                  title="Copy Txn Hash"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32.5 32.5"
                    width="32"
                    height="32"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M23.5 20.5a1 1 0 0 1-1-1v-9h-9a1 1 0 0 1 0-2h10a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1zm-3-7v10a1 1 0 0 1-1 1h-10a1 1 0 0 1-1-1v-10a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1zm-2 1h-8v8h8v-8z"
                    ></path>
                  </svg>
                </span>

                <ReactTooltip
        anchorId="app-title"
        place="bottom"
        content="copy"
      />
              </dd>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TransactionDetails;
