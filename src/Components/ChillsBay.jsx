import React from "react";

function ChillsBay() {
  const cards = [
    {
      imges: "./shop.png",
      hid: " Your  entire  trip in one checkout!",
      pera: "Add multiple experiences to your cart and checkout on one click.",
    },
    {
      imges: "./card.png",
      hid: " Pay with Crypto on the go",
      pera: "Enjoy the freedom of universal payments for a seamless marketplace experience.",
    },
    {
      imges: "./ticket.png",
      hid: " Free Cancellation and ticket transfer",
      pera: "Resell your tickets or cancel your reservations at zero cost 24 hours before.",
    },
  ];

  return (
    <section>
      <h2 className="text-xl text-center lg:text-4xl mt-16 mb-16 text-[#26395C] font-semibold ">
        Why Use Chillsbay?
      </h2>
      <div className="container bg-[#189EFF0F] grid grid-cols-1 lg:grid-cols-3 mx-auto rounded-xl shadow-xl py-12 gap-4 mb-10">
        {cards.map((card, i) => (
          <div key={i}>
            <img className="w-fit mx-auto py-6 " src={card.imges} alt="" />
            <div className="w-[60%] mx-auto text-center">
              <h2 className="  text-2xl lg:text-3xl font-bold text-[#000000] mt-2 mb-2">{card.hid}</h2>
              <p className="text-md lg:text-lg mt-3 mb-3">{card.pera} </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ChillsBay;
