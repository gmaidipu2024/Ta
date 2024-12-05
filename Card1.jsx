import React from 'react'

function Card1() {
  
    const cards =[
      { images: "./Bilding.png", title :"Sight Seeing" },
      { images: "./football.png",title :"Volley Ball Game"},
      { images: "./hand.png", title :"Wizkit Show"},
      { images: "./hand.png",title :"Wizkit Show"},
    ]
    return (
     <section className='bg-[#189EFF0F]'>
        <h1 className=' text-[#26395C] text-2xl md:text-3xl lg:text-4xl font-semibold pt-10 mb-5 ml-20'>Top things to do in Lagos</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-5 container mx-auto p-4 '>
          {
          cards.map((card, index)=>(
              <div key={index} className='flex flex-col items-center overflow-hidden' >
              <img className=' ' src={card.images} />
              <div>
              <h2 className='text-center text-[#26395C] font-bold text-xl sm:text-2xl'>{card.title}</h2>   
              </div>
              </div>
            ))}
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-5 container mx-auto p-4 '>
          {
          cards.map((card, index)=>(
              <div key={index} className='flex flex-col items-center overflow-hidden' >
             <img className=' ' src={card.images} />
              <div>
              <h2 className='text-center text-[#26395C] font-bold text-xl sm:text-2xl'>{card.title}</h2>   
              </div>
              </div>
            ))}
        </div>
     </section>
  )
}
export default Card1;
