import React from "react";

function StateChange() {
  return (
    <div class="addresses-table-container">
      <div class="stakes-table-container">
        <table>
          <thead>
            <tr>
              <th class="stakes-table-th">
                <div class="stakes-table-th-content">&nbsp;</div>
              </th>
              <th class="stakes-table-th">
                <div class="stakes-table-th-content">Address</div>
              </th>
              <th class="stakes-table-th">
                <div class="stakes-table-th-content">Balance before</div>
              </th>
              <th class="stakes-table-th">
                <div class="stakes-table-th-content">Balance after</div>
              </th>
              <th class="stakes-table-th">
                <div class="stakes-table-th-content">Change</div>
              </th>
            </tr>
          </thead>
          <tbody data-items="">
            <tr data-identifier-hash="0x58a8e1fa4d8b55515a355bd904d0f77670fdd433">
              <td class="stakes-td"></td>
              <td class="stakes-td">
                <a
                  data-test="address_hash_link"
                  href="/address/0x58a8e1Fa4d8b55515A355bD904d0F77670fDD433"
                >
                  <span
                    class=""
                    data-address-hash="0x58a8e1Fa4d8b55515A355bD904d0F77670fDD433"
                  >
                    <span class="d-none d-md-none d-xl-inline">
                      0x58a8e1Fa4d8b55515A355bD904d0F77670fDD433
                    </span>
                    <span class="d-md-inline-block d-xl-none">
                      0x58a8e1–fdd433
                    </span>
                  </span>
                </a>
              </td>

              <td class="stakes-td">
                <span>0 MEMEB</span>
              </td>
              <td class="stakes-td">
                <span>15 MEMEB</span>
              </td>

              <td class="stakes-td">
                <span class="mr-4 text-success">▲ 15 MEMEB</span>
              </td>
            </tr>

            <tr data-identifier-hash="0x868b132291e8b93afbd10a799ec0da0ce17a2e35">
              <td class="stakes-td">
                <dt class="text-muted">
                  <span
                    class="i-tooltip-2 "
                    data-boundary="window"
                    data-container="body"
                    data-html="true"
                    data-placement="top"
                    data-toggle="tooltip"
                    title="A block producer who successfully included the block onto the blockchain."
                  >
                    <i class="fa-solid fa-circle-info"></i>
                  </span>
                  Miner
                </dt>
              </td>
              <td class="stakes-td">
                <a
                  data-test="address_hash_link"
                  href="/address/0x868B132291e8b93AFbD10A799Ec0Da0CE17A2e35"
                >
                  <span
                    class=""
                    data-address-hash="0x868B132291e8b93AFbD10A799Ec0Da0CE17A2e35"
                  >
                    <span class="d-none d-md-none d-xl-inline">
                      0x868B132291e8b93AFbD10A799Ec0Da0CE17A2e35
                    </span>
                    <span class="d-md-inline-block d-xl-none">
                      0x868b13–7a2e35
                    </span>
                  </span>
                </a>
              </td>

              <td class="stakes-td">
                <span>5.192E+15 MEMEB</span>
              </td>
              <td class="stakes-td">
                <span>5.192E+15 MEMEB</span>
              </td>

              <td class="stakes-td">
                <span class="mr-4 text-danger">
                  ▼ 14.999999999999939095 MEMEB
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default StateChange;
