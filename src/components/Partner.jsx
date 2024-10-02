import React from 'react'

const Partner = () => {
  return (
    <div className='mx-auto px-52'>
      <div className="pb-32">
        <h1 className="pt-16 text-center text-3xl font-bold">Mitra Kami</h1>
        <div className="grid grid-cols-4 items-center">
          <img src={require("../assets/mitra1.png")} alt="lulu" />
          <img src={require("../assets/mitra2.png")} alt="budiman" />
          <img src={require("../assets/mitra3.png")} alt="pasarbuah" />
          <img src={require("../assets/mitra4.png")} alt="oleholeh" />
          <img src={require("../assets/mitra5.png")} alt="christine" />
          <img src={require("../assets/mitra6.png")} alt="chip" />
          <img src={require("../assets/mitra7.png")} alt="miniku" />
          <img src={require("../assets/mitra8.png")} alt="haiswal" />
        </div>
        <div className="flex items-center justify-center text-center mx-auto">
          <img
            className="w-80"
            src={require("../assets/mitra9.png")}
            alt="haimart"
          />
        </div>
      </div>
    </div>
  )
}

export default Partner
