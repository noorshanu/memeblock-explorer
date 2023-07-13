import React from "react";

function BlockCard2() {
  const originalString =
    "0x868B132291e8b93AFbD10A799Ec0Da0CE17A2e350x868b13–7a2e35";
  const slicedString =
    originalString.slice(0, 6) + "..." + originalString.slice(-7);
  return (
    <>
      <div
        class="tile tile-type-block fade-up mb-4"
        style={{padding:'1rem 1rem 1rem 0rem'}}
        data-selector="block-tile"
        data-block-number="18897"
        data-block-hash="0xf48be09cecdbd9b38a12f0c85bc93758921367eeee55054096829c76bd06abb0"
      >
        <div class="flex justify-between gap-1">
          <div class="tile-transaction-type-block  flex flex-col p-12 ">
            <a
              class="tile-label"
              data-selector="block-number"
              href="/block/18897"
            >
              #18897
            </a>

            <span
              class="tile-status-label font-[400]"
              data-test="transaction_type"
            >
              Block
            </span>
          </div>
          <div class="flex justify-between">
            <div>
              {/* <!-- transactions --> */}
              <span class="mr-2">0 transactions</span>

              {/* <!-- size --> */}
              <span class="mr-2"> 610 bytes </span>

              {/* <!-- age --> */}
              <span data-from-now="2023-07-13T15:32:31.000000Z">
                2 hours ago
              </span>
            

            <div class="text-nowrap text-truncate mt-3 mt-md-0">
              {/* <!-- validator --> */}
              Miner
              <a
                data-test="address_hash_link"
                href="/address/0x868B132291e8b93AFbD10A799Ec0Da0CE17A2e35"
              >
                <span
                  class=""
                  data-address-hash={slicedString}
                >
                  <span class="hidden d-md-none d-xl-inline">
                  0x868B132291e8b93AFbD10A799Ec0Da0CE17A2e35
                  </span>
                  <span class="d-md-inline-block d-xl-none">
                    {" "}
                    0x868B132291e8b93AFbD10A799Ec0Da0CE17A2e35
                  </span>
                </span>
              </a>
            </div>
            </div>
          </div>
          <div class=" text-right flex flex-col items-end justify-end mt-0 mt-md-0">
            {/* <!-- Priority Fee --> */}
            <span> 0 MEMEB Priority Fees </span>
            {/* <!-- Burnt Fees --> */}
            <span> 0 MEMEB Burnt Fees </span>

            {/* <!-- Gas Limit --> */}
            <span> 30,000,000 Gas Limit </span>
            {/* <!-- Gas Used --> */}
            <div class=" mr-0">0 (0%) Gas Used</div>
            {/* <!-- Progress bar --> */}
            <div class="progress">
              <div
                class="progress-bar"
                role="progressbar"
                style={{ width: "0%" }}
                aria-valuenow="50"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BlockCard2;
