import React from "react";

function GasPrice() {
  return (
    <>
      <div className="card-tran overflow-hidden bg-white h-full rounded-xl border border-gray-45 mb-3">
        <div className="flex h-full flex-col gap-[0.35rem]">
          <div className="flex items-center gap-2.5 p-6 pb-0">
            <div className="flex flex-grow flex-wrap items-center gap-2 text-steel">
              <div className="md:text-heading4 text-heading6 text-steel-darker font-semibold">
                Reference Gas Price
              </div>
            </div>
            <div dir="ltr" data-orientation="horizontal">
              <div
                role="tablist"
                aria-orientation="horizontal"
                className="flex items-center border-gray-45 gap-2"
                tabindex="0"
                data-orientation="horizontal"
                style={{outline: 'none'}}
              >
                <button
                  type="button"
                  role="tab"
                  aria-selected="true"
                  aria-controls="radix-:rb:-content-MIST"
                  data-state="active"
                  id="radix-:rb:-trigger-MIST"
                  className="border-b border-transparent -mb-px  text-steel-dark disabled:text-steel-dark disabled:pointer-events-none hover:text-steel-darker data-[state=active]:border-gray-65 text-captionSmall font-medium pb-0.5 disabled:opacity-40 data-[state=active]:text-steel-darker"
                  tabindex="-1"
                  data-orientation="horizontal"
                  data-radix-collection-item=""
                >
                  MIST
                </button>
                <button
                  type="button"
                  role="tab"
                  aria-selected="false"
                  aria-controls="radix-:rb:-content-SUI"
                  data-state="inactive"
                  id="radix-:rb:-trigger-SUI"
                  className="border-b border-transparent -mb-px font-semibold text-steel-dark disabled:text-steel-dark disabled:pointer-events-none hover:text-steel-darker data-[state=active]:border-gray-65 text-captionSmall font-medium pb-0.5 disabled:opacity-40 data-[state=active]:text-steel-darker"
                  tabindex="-1"
                  data-orientation="horizontal"
                  data-radix-collection-item=""
                >
                  SUI
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-6 px-6 lg:max-xl:gap-12">
            <div className="flex max-w-full flex-nowrap justify-between gap-1.5 flex-col">
              <div className="flex items-center justify-start gap-1 text-caption text-steel-dark hover:text-steel">
                <div className="flex-shrink-0">
                  <div className="break-words uppercase text-caption font-semibold text-steel-dark">
                    Current
                  </div>
                </div>
              </div>
              <div className="flex items-baseline gap-0.5">
                <div className="text-heading3 text-steel-darker font-semibold">
                  818
                </div>
                <div className="md:text-heading4 text-heading6 text-steel-darker font-medium">
                  MIST
                </div>
              </div>
            </div>
            <div className="flex max-w-full flex-nowrap justify-between gap-1.5 flex-col">
              <div className="flex items-center justify-start gap-1 text-caption text-steel-dark hover:text-steel">
                <div className="flex-shrink-0">
                  <div className="break-words uppercase text-caption font-semibold text-steel-dark">
                    7 epochs avg
                  </div>
                </div>
              </div>
              <div className="flex items-baseline gap-0.5">
                <div className="text-heading3 text-steel-darker font-semibold">
                  819
                </div>
                <div className="md:text-heading4 text-heading6 text-steel-darker font-medium">
                  MIST
                </div>
              </div>
            </div>
          </div>
          <div className="flex min-h-[150px] flex-1 flex-col items-center justify-center rounded-b-xl transition-colors">
            <div className="relative flex-1 self-stretch">
              <div className="absolute h-full w-full" >
                <div className="relative h-full w-full overflow-hidden">
                <canvas data-chart="historyChart" data-history_chart_paths="{
                        &quot;market&quot;:&quot;/market-history-chart&quot;

                        ,


                        &quot;transaction&quot;:&quot;/transaction-history-chart&quot;

}" data-history_chart_config="{&quot;transactions&quot;:[&quot;transactions_per_day&quot;]}" width="625" height="185" >
          </canvas>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default GasPrice;
