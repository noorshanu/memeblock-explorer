import React from "react";

function BlockCard() {
    const originalString = "0x868B132291e8b93AFbD10A799Ec0Da0CE17A2e350x868b13–7a2e35";
    const slicedString = originalString.slice(0, 6) + "..." + originalString.slice(-7);
  return (
    <>
      <div
        class="col-lg-3 fade-up-blocks-chain"
        data-selector="chain-block"
        data-block-number="17314"
      >
        <div class="tile tile-type-block n-p flex flex-col">
          <a
            class="tile-title text-[#3E6957]"
            data-selector="block-number"
            href="/block/17314"
          >
            17314
          </a>
          <div class="tile-bottom-contents">
            <div class="tile-transactions">
              <span class="mr-2">0 Transactions</span>
              <span
                class=" "
                data-from-now="2023-07-13T11:08:41.000000Z"
              >
                38 seconds ago
              </span>
            </div>

            <div class="text-truncate">
              Miner &nbsp;
              <a
                data-test="address_hash_link"
                href="/address/0x868B132291e8b93AFbD10A799Ec0Da0CE17A2e35"
              >
                <span
                  class=""
                  data-address-hash=""
                >
                  <span class="hidden ">
                     {slicedString}
                  </span>
                  <span class="d-md-inline-block d-xl-none">
                    {slicedString}
                  </span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BlockCard;
