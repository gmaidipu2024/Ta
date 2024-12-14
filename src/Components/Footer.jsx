import React from "react";
import { Button } from "@nextui-org/react";

const FooterData = {
  socialIcon: [
    "./fb.png",
    "./Instagram.png",
    "./Youtube.png",
    "./Twitter.png",
    "Music.png",
    "./Linkidin.png",
  ],
  menus1: ["Home", "Eat", "Drink", "Event", "Club", "Recreation"],
  menus2: ["Blog", "Careers", "Contact", "FAQs"],
  menus3: [
    "Start Here",
    "Pay with Crypto",
    "Style Guide",
    "Password Protected",
    "Clu404 Not Found",
    "404 Not Found",
    "Licenses",
    "Changelog",
  ],
  sections: [
    // {
    //   title: "MENU",
    //   menus: [
    //     { items: ["Home", "Eat", "Drink", "Event", "Club", "Recreation"] },
    //     { items: ["Blog", "Careers", "Contact", "FAQs"] },
    //   ],
    // },
    // {
    //   title: "Utility Pages",
    //   menus: [
    //     {
    //       items: [
    //         "Start Here",
    //         "Pay with Crypto",
    //         "Style Guide",
    //         "Password Protected",
    //         "Clu404 Not Found",
    //         "404 Not Found",
    //         "Licenses",
    //         "Changelog",
    //       ],
    //     },
    //   ],
    // },
  ],

  partnerSection: {
    img: "./Campus.png",
    title: "Become a Partner",
    dis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Euismod pellentesque posuere.",
  },
  logo: "./title.svg",
  copyright: `@ All Right Reserve 2024`,
};

// const MenuSection = (title, menus) => {
//   return (
//     <div>
//       <p> {title} </p>
//       <div>
//         {menus.map((menu, index) => (
//           <ul key={index}>
//             {menu.items.map((item, idx) => (
//               <li key={idx}> {item} </li>
//             ))}
//           </ul>
//         ))}
//       </div>
//     </div>
//   );
// };

function Footer() {
  const {
    socialIcon,
    menus1,
    menus2,
    menus3,
    partnerSection,
    logo,
    copyright,
  } = FooterData;

  return (
    <footer className=" py-12 ">
      <div className=" container mx-auto overflow-hidden grid grid-cols-1  md:grid-cols-1  lg:grid-cols-3  items-start justify-center gap-12 ">
        <div className=" mx-auto lg:ms-0 col-span-1 ">
          <img className="w-fit" src={logo} alt="" />
          <p className="text-sm mb-4"> {copyright} </p>
          <div className="flex gap-4 items-center  mt-3 mb-5 ">
            {socialIcon.map((icon, indx) => (
              <a href="" key={indx}>
                <img className="w-5 h-5" src={icon} alt="" />
              </a>
            ))}
          </div>
        </div>
        {/* right section */}
        <div className="grid grid-cols-2 justify-center md:grid-cols-4 gap-32 mx-auto ">
          <div className="grid col-span-2  text-md">
            <div>
              <h1 className="text-[#26395C] text-xl font-bold mb-10 border-b "> MENU</h1>

              <div className="flex gap-3 items-start justify-around ">
                <div>
                  {menus1.map((item, i) => (
                    <ul key={i}>
                      <li className="mb-2">{item} </li>
                    </ul>
                  ))}
                </div>
                <div>
                  {menus2.map((item, i) => (
                    <ul key={i}>
                      <li className="mb-2">{item} </li>
                    </ul>
                  ))}
                </div>

              </div>

            </div>

          </div>
          {/* div part -2       */}
          <div className="col-span-2">
            <h1 className="text-[#26395C] text-xl font-bold mb-10 border-b "> Utility Pages</h1>
            {menus3.map((item, i) => (
                    <ul key={i}>
                      <li className="mb-2">{item} </li>
                    </ul>
                  ))}
          </div>
        </div>
          {/* last part */}
        <div className="bg-[#F5FAFF] rounded-lg px-16 py-10 mb-2 col-span-1">
          <img src={partnerSection.img} alt="" />
          <h2 className="text-[#26395C] text-3xl font-bold py-2">
            {" "}
            {partnerSection.title}
          </h2>
          <p className="text-[#656B89] text-xl mb-5">{partnerSection.dis}</p>
          <Button color="primary" className="w-full py-2">
            {" "}
            Join Now
          </Button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
