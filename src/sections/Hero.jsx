import React from 'react'
import CurrentEpoch from '../components/CurrentEpoch'
import NetworkTps from '../components/NetworkTps'
import GasPrice from '../components/GasPrice'
import AverageBlock from '../components/AverageBlock'

function Hero() {
  return (
    <section className='mt-12'>
      <div className='max-w-6xl mx-auto'>
        <div className='flex items-center justify-between'>
          <div>
            <NetworkTps/>
              <CurrentEpoch/>
          </div>
          <div>
      <GasPrice/>
      <AverageBlock/>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Hero