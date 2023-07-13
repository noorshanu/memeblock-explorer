import React from "react";

function GasPrice() {
  return (
    <>
      <div className="card-tran overflow-hidden bg-white h-full rounded-xl border border-gray-45 mb-3">
        <div className="flex h-full flex-col gap-1">
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
                  className="border-b border-transparent -mb-px font-semibold text-steel-dark disabled:text-steel-dark disabled:pointer-events-none hover:text-steel-darker data-[state=active]:border-gray-65 text-captionSmall font-medium pb-0.5 disabled:opacity-40 data-[state=active]:text-steel-darker"
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
                  <svg width="100%" height="150">
                    <line
                      x1="0"
                      y1="5"
                      x2="0"
                      y2="160"
                      className="stroke-steel/30 opacity-0"
                      stroke-width="1"
                      transform=""
                    ></line>
                    <line
                      x1="0"
                      y1="0"
                      x2="452.390625"
                      y2="0"
                      className="stroke-steel/30 opacity-0"
                      stroke-width="1"
                      transform=""
                    ></line>
                    <path
                      className="visx-linepath"
                      d="M15,124.58333333333333L29.565193965517242,124.58333333333333L44.13038793103448,124.58333333333333L58.69558189655172,124.58333333333333L73.26077586206895,124.58333333333333L87.8259698275862,124.58333333333333L102.39116379310344,72.5L116.9563577586207,72.5L131.52155172413794,72.5L146.08674568965517,72.5L160.6519396551724,72.5L175.21713362068965,72.5L189.7823275862069,72.5L204.34752155172416,20.41666666666667L218.9127155172414,20.41666666666667L233.47790948275863,20.41666666666667L248.04310344827584,20.41666666666667L262.6082974137931,20.41666666666667L277.17349137931035,20.41666666666667L291.73868534482756,62.08333333333333L306.3038793103448,72.5L320.86907327586204,72.5L335.4342672413793,72.5L349.99946120689657,72.5L364.5646551724138,72.5L379.12984913793105,72.5L393.6950431034483,72.5L408.2602370689655,72.5L422.8254310344828,72.5L437.390625,93.33333333333334"
                      fill="transparent"
                      stroke-linecap="round"
                      stroke="#F2BD24"
                      width="1"
                      fill-rule="nonzero"
                    ></path>
                    <path
                      className="visx-area-closed"
                      d="M15,124.58333333333333L29.565193965517242,124.58333333333333L44.13038793103448,124.58333333333333L58.69558189655172,124.58333333333333L73.26077586206895,124.58333333333333L87.8259698275862,124.58333333333333L102.39116379310344,72.5L116.9563577586207,72.5L131.52155172413794,72.5L146.08674568965517,72.5L160.6519396551724,72.5L175.21713362068965,72.5L189.7823275862069,72.5L204.34752155172416,20.41666666666667L218.9127155172414,20.41666666666667L233.47790948275863,20.41666666666667L248.04310344827584,20.41666666666667L262.6082974137931,20.41666666666667L277.17349137931035,20.41666666666667L291.73868534482756,62.08333333333333L306.3038793103448,72.5L320.86907327586204,72.5L335.4342672413793,72.5L349.99946120689657,72.5L364.5646551724138,72.5L379.12984913793105,72.5L393.6950431034483,72.5L408.2602370689655,72.5L422.8254310344828,72.5L437.390625,93.33333333333334L437.390625,135L422.8254310344828,135L408.2602370689655,135L393.6950431034483,135L379.12984913793105,135L364.5646551724138,135L349.99946120689657,135L335.4342672413793,135L320.86907327586204,135L306.3038793103448,135L291.73868534482756,135L277.17349137931035,135L262.6082974137931,135L248.04310344827584,135L233.47790948275863,135L218.9127155172414,135L204.34752155172416,135L189.7823275862069,135L175.21713362068965,135L160.6519396551724,135L146.08674568965517,135L131.52155172413794,135L116.9563577586207,135L102.39116379310344,135L87.8259698275862,135L73.26077586206895,135L58.69558189655172,135L44.13038793103448,135L29.565193965517242,135L15,135Z"
                      fill="#F2BD24"
                      fill-opacity="0.1"
                      stroke="transparent"
                    ></path>
                    <rect
                      x="0"
                      y="124.58333333333333"
                      width="15"
                      fill="#F2BD24"
                      fill-opacity="0.1"
                      stroke="transparent"
                      height="10.416666666666671"
                    ></rect>
                    <line
                      x1="0"
                      y1="124.58333333333333"
                      x2="15"
                      y2="124.58333333333333"
                      stroke="#F2BD24"
                    ></line>
                    <rect
                      x="437.390625"
                      y="93.33333333333334"
                      width="15"
                      fill="#F2BD24"
                      fill-opacity="0.1"
                      stroke="transparent"
                      height="41.66666666666666"
                    ></rect>
                    <line
                      x1="437.390625"
                      y1="93.33333333333334"
                      x2="452.390625"
                      y2="93.33333333333334"
                      stroke="#F2BD24"
                    ></line>
                    <rect
                      x="0"
                      y="135"
                      width="452.390625"
                      height="45"
                      fill="#F2BD24"
                      fill-opacity="0.1"
                      stroke="none"
                    ></rect>
                    <g>
                      <g>
                        <text
                          x="444.890625"
                          y="114.16666666666667"
                          text-anchor="end"
                          alignment-baseline="middle"
                          className="fill-steel font-sans text-subtitleSmall font-medium"
                        >
                          816
                        </text>
                        <text
                          x="444.890625"
                          y="72.5"
                          text-anchor="end"
                          alignment-baseline="middle"
                          className="fill-steel font-sans text-subtitleSmall font-medium"
                        >
                          820
                        </text>
                        <text
                          x="444.890625"
                          y="30.83333333333333"
                          text-anchor="end"
                          alignment-baseline="middle"
                          className="fill-steel font-sans text-subtitleSmall font-medium"
                        >
                          824
                        </text>
                      </g>
                      <g>
                        <circle
                          cx="444.890625"
                          cy="135"
                          r="1"
                          className="fill-steel transition-all ease-ease-out-cubic opacity-0"
                        ></circle>
                        <circle
                          cx="444.890625"
                          cy="93.33333333333334"
                          r="1"
                          className="fill-steel transition-all ease-ease-out-cubic opacity-0"
                        ></circle>
                        <circle
                          cx="444.890625"
                          cy="51.66666666666667"
                          r="1"
                          className="fill-steel transition-all ease-ease-out-cubic opacity-0"
                        ></circle>
                        <circle
                          cx="444.890625"
                          cy="10"
                          r="1"
                          className="fill-steel transition-all ease-ease-out-cubic opacity-0"
                        ></circle>
                      </g>
                    </g>
                    <g
                      className="visx-group visx-axis visx-axis-bottom"
                      transform="translate(0, 150)"
                    >
                      <g
                        className="visx-group visx-axis-tick"
                        transform="translate(0, 0)"
                      >
                        <svg
                          x="0"
                          y="0.25em"
                          font-size="none"
                          style={{ overflow: "visible" }}
                        >
                          <text
                            transform=""
                            x="29.565193965517242"
                            y="18"
                            font-family="none"
                            font-size="none"
                            fill="none"
                            stroke="none"
                            className="text-subtitleSmall font-medium fill-steel font-sans"
                            text-anchor="middle"
                          >
                            <tspan x="29.565193965517242" dy="0em">
                              62
                            </tspan>
                          </text>
                        </svg>
                      </g>
                      <g
                        className="visx-group visx-axis-tick"
                        transform="translate(0, 0)"
                      >
                        <svg
                          x="0"
                          y="0.25em"
                          font-size="none"
                          style={{ overflow: "visible" }}
                        >
                          <text
                            transform=""
                            x="58.69558189655172"
                            y="18"
                            font-family="none"
                            font-size="none"
                            fill="none"
                            stroke="none"
                            className="text-subtitleSmall font-medium fill-steel font-sans"
                            text-anchor="middle"
                          >
                            <tspan x="58.69558189655172" dy="0em">
                              64
                            </tspan>
                          </text>
                        </svg>
                      </g>
                      <g
                        className="visx-group visx-axis-tick"
                        transform="translate(0, 0)"
                      >
                        <svg
                          x="0"
                          y="0.25em"
                          font-size="none"
                          style={{ overflow: "visible" }}
                        >
                          <text
                            transform=""
                            x="87.8259698275862"
                            y="18"
                            font-family="none"
                            font-size="none"
                            fill="none"
                            stroke="none"
                            className="text-subtitleSmall font-medium fill-steel font-sans"
                            text-anchor="middle"
                          >
                            <tspan x="87.8259698275862" dy="0em">
                              66
                            </tspan>
                          </text>
                        </svg>
                      </g>
                      <g
                        className="visx-group visx-axis-tick"
                        transform="translate(0, 0)"
                      >
                        <svg
                          x="0"
                          y="0.25em"
                          font-size="none"
                          style={{ overflow: "visible" }}
                        >
                          <text
                            transform=""
                            x="116.9563577586207"
                            y="18"
                            font-family="none"
                            font-size="none"
                            fill="none"
                            stroke="none"
                            className="text-subtitleSmall font-medium fill-steel font-sans"
                            text-anchor="middle"
                          >
                            <tspan x="116.9563577586207" dy="0em">
                              68
                            </tspan>
                          </text>
                        </svg>
                      </g>
                      <g
                        className="visx-group visx-axis-tick"
                        transform="translate(0, 0)"
                      >
                        <svg
                          x="0"
                          y="0.25em"
                          font-size="none"
                          style={{ overflow: "visible" }}
                        >
                          <text
                            transform=""
                            x="146.08674568965517"
                            y="18"
                            font-family="none"
                            font-size="none"
                            fill="none"
                            stroke="none"
                            className="text-subtitleSmall font-medium fill-steel font-sans"
                            text-anchor="middle"
                          >
                            <tspan x="146.08674568965517" dy="0em">
                              70
                            </tspan>
                          </text>
                        </svg>
                      </g>
                      <g
                        className="visx-group visx-axis-tick"
                        transform="translate(0, 0)"
                      >
                        <svg
                          x="0"
                          y="0.25em"
                          font-size="none"
                          style={{ overflow: "visible" }}
                        >
                          <text
                            transform=""
                            x="175.21713362068965"
                            y="18"
                            font-family="none"
                            font-size="none"
                            fill="none"
                            stroke="none"
                            className="text-subtitleSmall font-medium fill-steel font-sans"
                            text-anchor="middle"
                          >
                            <tspan x="175.21713362068965" dy="0em">
                              72
                            </tspan>
                          </text>
                        </svg>
                      </g>
                      <g
                        className="visx-group visx-axis-tick"
                        transform="translate(0, 0)"
                      >
                        <svg
                          x="0"
                          y="0.25em"
                          font-size="none"
                          style={{ overflow: "visible" }}
                        >
                          <text
                            transform=""
                            x="204.34752155172416"
                            y="18"
                            font-family="none"
                            font-size="none"
                            fill="none"
                            stroke="none"
                            className="text-subtitleSmall font-medium fill-steel font-sans"
                            text-anchor="middle"
                          >
                            <tspan x="204.34752155172416" dy="0em">
                              74
                            </tspan>
                          </text>
                        </svg>
                      </g>
                      <g
                        className="visx-group visx-axis-tick"
                        transform="translate(0, 0)"
                      >
                        <svg
                          x="0"
                          y="0.25em"
                          font-size="none"
                          style={{ overflow: "visible" }}
                        >
                          <text
                            transform=""
                            x="233.47790948275863"
                            y="18"
                            font-family="none"
                            font-size="none"
                            fill="none"
                            stroke="none"
                            className="text-subtitleSmall font-medium fill-steel font-sans"
                            text-anchor="middle"
                          >
                            <tspan x="233.47790948275863" dy="0em">
                              76
                            </tspan>
                          </text>
                        </svg>
                      </g>
                      <g
                        className="visx-group visx-axis-tick"
                        transform="translate(0, 0)"
                      >
                        <svg
                          x="0"
                          y="0.25em"
                          font-size="none"
                          style={{ overflow: "visible" }}
                        >
                          <text
                            transform=""
                            x="262.6082974137931"
                            y="18"
                            font-family="none"
                            font-size="none"
                            fill="none"
                            stroke="none"
                            className="text-subtitleSmall font-medium fill-steel font-sans"
                            text-anchor="middle"
                          >
                            <tspan x="262.6082974137931" dy="0em">
                              78
                            </tspan>
                          </text>
                        </svg>
                      </g>
                      <g
                        className="visx-group visx-axis-tick"
                        transform="translate(0, 0)"
                      >
                        <svg
                          x="0"
                          y="0.25em"
                          font-size="none"
                          style={{ overflow: "visible" }}
                        >
                          <text
                            transform=""
                            x="291.73868534482756"
                            y="18"
                            font-family="none"
                            font-size="none"
                            fill="none"
                            stroke="none"
                            className="text-subtitleSmall font-medium fill-steel font-sans"
                            text-anchor="middle"
                          >
                            <tspan x="291.73868534482756" dy="0em">
                              80
                            </tspan>
                          </text>
                        </svg>
                      </g>
                      <g
                        className="visx-group visx-axis-tick"
                        transform="translate(0, 0)"
                      >
                        <svg
                          x="0"
                          y="0.25em"
                          font-size="none"
                          style={{ overflow: "visible" }}
                        >
                          <text
                            transform=""
                            x="320.86907327586204"
                            y="18"
                            font-family="none"
                            font-size="none"
                            fill="none"
                            stroke="none"
                            className="text-subtitleSmall font-medium fill-steel font-sans"
                            text-anchor="middle"
                          >
                            <tspan x="320.86907327586204" dy="0em">
                              82
                            </tspan>
                          </text>
                        </svg>
                      </g>
                      <g
                        className="visx-group visx-axis-tick"
                        transform="translate(0, 0)"
                      >
                        <svg
                          x="0"
                          y="0.25em"
                          font-size="none"
                          style={{ overflow: "visible" }}
                        >
                          <text
                            transform=""
                            x="349.99946120689657"
                            y="18"
                            font-family="none"
                            font-size="none"
                            fill="none"
                            stroke="none"
                            className="text-subtitleSmall font-medium fill-steel font-sans"
                            text-anchor="middle"
                          >
                            <tspan x="349.99946120689657" dy="0em">
                              84
                            </tspan>
                          </text>
                        </svg>
                      </g>
                      <g
                        className="visx-group visx-axis-tick"
                        transform="translate(0, 0)"
                      >
                        <svg
                          x="0"
                          y="0.25em"
                          font-size="none"
                          style={{ overflow: "visible" }}
                        >
                          <text
                            transform=""
                            x="379.12984913793105"
                            y="18"
                            font-family="none"
                            font-size="none"
                            fill="none"
                            stroke="none"
                            className="text-subtitleSmall font-medium fill-steel font-sans"
                            text-anchor="middle"
                          >
                            <tspan x="379.12984913793105" dy="0em">
                              86
                            </tspan>
                          </text>
                        </svg>
                      </g>
                      <g
                        className="visx-group visx-axis-tick"
                        transform="translate(0, 0)"
                      >
                        <svg
                          x="0"
                          y="0.25em"
                          font-size="none"
                          style={{ overflow: "visible" }}
                        >
                          <text
                            transform=""
                            x="408.2602370689655"
                            y="18"
                            font-family="none"
                            font-size="none"
                            fill="none"
                            stroke="none"
                            className="text-subtitleSmall font-medium fill-steel font-sans"
                            text-anchor="middle"
                          >
                            <tspan x="408.2602370689655" dy="0em">
                              88
                            </tspan>
                          </text>
                        </svg>
                      </g>
                      <g
                        className="visx-group visx-axis-tick"
                        transform="translate(0, 0)"
                      >
                        <svg
                          x="0"
                          y="0.25em"
                          font-size="none"
                          style={{ overflow: "visible" }}
                        >
                          <text
                            transform=""
                            x="437.390625"
                            y="18"
                            font-family="none"
                            font-size="none"
                            fill="none"
                            stroke="none"
                            className="text-subtitleSmall font-medium fill-steel font-sans"
                            text-anchor="middle"
                          >
                            <tspan x="437.390625" dy="0em">
                              90
                            </tspan>
                          </text>
                        </svg>
                      </g>
                    </g>
                    <defs>
                      <marker
                        id="marker-circle"
                        markerWidth="3"
                        markerHeight="3"
                        markerUnits="strokeWidth"
                        refX="1"
                        refY="1.5"
                        orient="auto-start-reverse"
                        stroke-width="1"
                        className="fill-steel"
                      >
                        <circle r="1" cx="1.5" cy="1.5"></circle>
                      </marker>
                    </defs>
                    <path
                      className="visx-linepath transition-all ease-ease-out-cubic opacity-0"
                      d="M15,175L29.565193965517242,175L44.13038793103448,175L58.69558189655172,175L73.26077586206895,175L87.8259698275862,175L102.39116379310344,175L116.9563577586207,175L131.52155172413794,175L146.08674568965517,175L160.6519396551724,175L175.21713362068965,175L189.7823275862069,175L204.34752155172416,175L218.9127155172414,175L233.47790948275863,175L248.04310344827584,175L262.6082974137931,175L277.17349137931035,175L291.73868534482756,175L306.3038793103448,175L320.86907327586204,175L335.4342672413793,175L349.99946120689657,175L364.5646551724138,175L379.12984913793105,175L393.6950431034483,175L408.2602370689655,175L422.8254310344828,175L437.390625,175"
                      fill="transparent"
                      stroke-linecap="round"
                      stroke="transparent"
                      marker-start="url(#marker-circle)"
                      marker-mid="url(#marker-circle)"
                      marker-end="url(#marker-circle)"
                    ></path>
                    <rect
                      x="0"
                      y="10"
                      width="100%"
                      height="150"
                      fill="transparent"
                      stroke="none"
                    ></rect>
                  </svg>
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
