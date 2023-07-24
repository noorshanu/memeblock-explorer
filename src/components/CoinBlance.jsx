import React from 'react'

function CoinBlance() {
  return (
    <section>
        <div className='max-w-6xl mx-auto'>
            <div>
                <h1>Balances</h1>

            </div>

<div>
<div data-chart-container="" class="mb-4" >
          <canvas data-chart="coinBalanceHistoryChart" data-coin_balance_history_data_path="/address/0x868B132291e8b93AFbD10A799Ec0Da0CE17A2e35/coin-balances/by-day" width="1510" height="656" style={{display: 'block', boxSizing: 'border-box', height: '525px', width: '1208px'}}></canvas>
        </div>
</div>
        </div>
    </section>
  )
}

export default CoinBlance