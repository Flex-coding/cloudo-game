import React from 'react'

function Plans() {
  return (
    <div className='plan-container w-full h-lvh rounded-3xl flex-col'>
        <h1 className='plans-title'>HERE'S OUR PLANS</h1>
        
        <div className='plan-content flex gap-2.5 justify-around'>
            <div className='plan-box'>
                <div className='plan-box-fix'>
                    <h3 className='plan-info-title text-3xl'>FREE</h3>
                    <h2 className='plan-price'>$0,00</h2>
                    <p className='plan-info-text'>get the best out of our services for free!</p>
                    <button className='plan-btn' type="button">Get it!</button>
                </div>
            </div>

            <div className='plan-box'>
                <div className='plan-box-fix'>
                    <h3 className='plan-info-title text-3xl'>MONTHLY</h3>
                    <h2 className='plan-price'>$24,00</h2>
                    <p className='plan-info-text'>It's a great choice for casal players.</p>
                    <button className='plan-btn' type="button">Get it!</button>
                </div>
            </div>

            <div className='plan-box'>
                <div className='plan-box-fix'>
                    <h3 className='plan-info-title text-3xl'>YEARLY</h3>
                    <h2 className='plan-price'>$70,00</h2>
                    <p className='plan-info-text'>Go with all our strength and enjoy it without worries!</p>
                    <button className='plan-btn' type="button">Get it!</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Plans
