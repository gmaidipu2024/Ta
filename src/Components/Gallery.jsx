import React from 'react'

function Gallery() {
const Gallery=[
  {
    img: "./img1.png"
  },
  {
    img: "./img2.png"
  },
  {
    img: "./img3.png"
  },
  {
    img: "./img4.png"
  },
  {
    img: "./img5.png"
  },
  {
    img: "./img6.png"
  },

]

  return (
    <section className=' border p-9 mb-10'>
      <div className='container mx-auto'>
        <h3 className='text-[13px] md:text-2xl lg:text-3xl font-semibold py-5 text-[#26395C]'>See How people are chilling on <span className='text-[#0E8BFF]'>Chillsbay</span> </h3>
        <div className='grid grid-cols-3 md:grid-cols-3 lg:grid-cols-6'>
          {
            Gallery.map((source)=>(
                <div className='mt-5 '>
                  <img className='object-cover w-full h-full' src={source.img} alt="" />
                </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Gallery;
