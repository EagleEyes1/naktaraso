import React from 'react'

const Awards = () => {
  return (
    <div className="mt-14 mx-auto px-52">
      <h1 className='text-lg font-semibold'>Penghargaan</h1>
      <p className='mt-3 mb-10'>Beberapa penghargaan yang telah diperoleh</p>
      <div className='flex flex-col text-center items-center justify-center'>
        <img className='h-[30rem] mb-3' src={require('../assets/award1.jpg')} alt='award1'/>
        <h2 className='mb-10'>Juara 1 Wirausaha Muda tahun 2019</h2>
      </div>
      <div className='flex flex-col text-center items-center justify-center'>
        <img className='h-[30rem] mb-3' src={require('../assets/award2.jpeg')} alt='award2'/>
        <h2 className='mb-10'>Juara 1 Wirausaha Muda tahun 2019</h2>
      </div>
      <div className='flex flex-col text-center items-center justify-center'>
        <img className='h-[30rem] mb-3' src={require('../assets/award3.jpeg')} alt='award3'/>
        <h2 className='mb-10'>Juara 1 Wirausaha Muda tahun 2019</h2>
      </div>
      <div className='flex flex-col text-center items-center justify-center'>
        <img className='h-[30rem] mb-3' src={require('../assets/award4.jpeg')} alt='award4'/>
        <h2 className='mb-10'>Juara 1 Wirausaha Muda tahun 2019</h2>
      </div>
      <div className='flex flex-col text-center items-center justify-center'>
        <img className='h-[30rem] mb-3' src={require('../assets/award5.jpeg')} alt='award5'/>
        <h2 className='mb-10'>Juara 1 Wirausaha Muda tahun 2019</h2>
      </div>
      <div className='flex flex-col text-center items-center justify-center'>
        <img className='h-[30rem] mb-3' src={require('../assets/award6.jpg')} alt='award6'/>
        <h2 className='mb-10'>Juara 1 Wirausaha Muda tahun 2019</h2>
      </div>
      <div className='flex flex-col text-center items-center justify-center'>
        <img className='h-[30rem] mb-3' src={require('../assets/award7.jpg')} alt='award7'/>
        <h2 className='mb-10'>Juara 1 Wirausaha Muda tahun 2019</h2>
      </div>
    </div>
  )
}

export default Awards
