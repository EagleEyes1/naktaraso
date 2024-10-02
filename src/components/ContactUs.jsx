import React from 'react'

const ContactUs = () => {
  return (
    <div className="mt-14 mx-auto px-52">
      <h1>Kontak Kami</h1>
      <div>
      <h2>Rumah Produksi :</h2>
      <p>Jl. Jambu Air Angat, Padang Belimbing, Koto Sani, Kec. X Koto Singkarak, Kabupaten Solok, Sumatera Barat,
      Indonesia</p>
      </div>
      <div>
      <h2>Kantor :</h2>
      <p>Jl. Jambu Air Angat, Padang Belimbing, Koto Sani, Kec. X Koto Singkarak, Kabupaten Solok, Sumatera Barat,
      Indonesia</p>
      </div>
      <div>
      <h2>Distribution Point 1 :</h2>
      <p>Jl. Berok 3, No 323 C, Pasar Pandan Air Mati, Kec. Tanjung Harapan, Kota Solok, Sumatera Barat, Indonesia</p>
      </div>
      <div>
      <h2>Distribution Point 2 :</h2>
      <p>Dukuh Zamrud, Blok R No 1, Mustika Jaya, Kota Bekasi, Jawa Barat</p>
      </div>
      <div>
      <h2>Online Marketplace</h2>
      <div className='flex gap-x-3'>
        <a href='https://s.shopee.co.id/609CJ7KVyU?share_channel_code=1' target='_blank'>
        <img className='w-[15rem]' src={require('../assets/shopee.png')} alt=''/>
        </a>
        
        <img className='w-[15rem]' src={require('../assets/tokopedia.png')} alt=''/>
      </div>
      <h2>More Information</h2>
      <div className='grid grid-cols-2'>
        <div>
            <p>WhatsApp</p>
            <p>081275740024</p>
        </div>
        <div>
            <p>Email</p>
            <p>rendangnaktaraso@gmail.com</p>
        </div>
      </div>
      </div>
    </div>
  )
}

export default ContactUs
