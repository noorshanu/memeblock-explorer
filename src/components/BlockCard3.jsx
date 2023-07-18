import React from "react";

function BlockCard3() {
  const originalString =
    "0x868B132291e8b93AFbD10A799Ec0Da0CE17A2e350x868b13–7a2e35";
  const slicedString =
    originalString.slice(0, 6) + "..." + originalString.slice(-7);
  return (
    <>
      <div
        class="tile tile-type-block fade-up mb-4"
        style={{ padding: "1rem 1rem 1rem 0rem" }}
        data-selector="block-tile"
       
      >
        <div class="flex justify-between gap-1">
          <div class="tile-transaction-type-block  flex flex-col p-12 ">
            <a
              class="tile-label"
              data-selector="block-number"
              href="/block/18897"
            >
              Transactions
            </a>

            <span
              class="tile-status-label font-[400]"
              data-test="transaction_type"
            >
              Success
            </span>
          </div>
          <div class="flex justify-between">
            <div>
              {/* <!-- transactions --> */}
              <span class="mr-2">
                0x7e0778bfa42f7a96823be2ef3ca952acb51772c80cbd34f71bb65dd9463e776cs
              </span>

              {/* <!-- size --> */}
              <span class="ml-1 bs-label"> Transfer </span>

              {/* <!-- age --> */}

              <div class="text-nowrap text-truncate mt-3 mt-md-0">
                {/* <!-- validator --> */}
                0x868B132291e8b93AFbD10A799Ec0Da0CE17A2e35
                <a
                  data-test="address_hash_link"
                  href="/address/0x868B132291e8b93AFbD10A799Ec0Da0CE17A2e35"
                >
                  <span class="" >
                    
                    <span class="d-md-inline-block d-xl-none">
                     
                      → 0x868B132291e8b93AFbD10A799Ec0Da0CE17A2e35
                    </span>
                  </span>
                </a>
              </div>
              <span class="flex flex-row    items-center">
        <span class="mr-2 font-semibold text-black">
15 MEMEB
        </span>
        <span class="ml-0  text-nowrap">
0.000021000000147 TX Fee
        </span>
      </span>
            </div>
          </div>
          <div class=" text-right flex flex-col items-center justify-center mt-0 mt-md-0">
            {/* <!-- Priority Fee --> */}
            <span> Block #62536</span>
            {/* <!-- Burnt Fees --> */}
            <span> 6 hours ago </span>

            {/* <!-- Gas Limit --> */}

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

export default BlockCard3;
