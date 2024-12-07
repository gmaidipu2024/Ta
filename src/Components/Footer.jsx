import React from "react";

const FooterData = {
  socialIcon: [
    "./fb.png",
    "./Instagram.png",
    "./Youtube.png",
    "./Twitter.png",
    "Music.png",
    "./Linkidin.png",
  ],
  section: [
    {
      title: "MENU",
      menus: [
        { items: ["Home", "Eat", "Drink", "Event", "Club", "Recreation"] },
        { items: ["Blog", "Careers", "Contact", "FAQs"] },
      ],
    },
    {
      title: "Utility Pages",
      menus: [
        { items: ["Start Here", "Pay with Crypto", "Style Guide", "Password Protected", "Clu404 Not Found", "404 Not Found","Licenses","Changelog"] },
      ],
    },
  ],
    partnarSection:{
      img: "./Campus.png",
      title: "Become a Partner",
      dis:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Euismod pellentesque posuere."

    },
    logo: "./title.svg",
    copyright: ` @ ${new date().getFullyear()} All Right Reserve`

};

const MenuSection= ((title,menus)=>{
  return(
    <div>
      <p> {title} </p>
      <div>
        {
        menus.menu((menu, index)=>(
          <ul key={index}>
           {
            menu.items.map((item, idx)=>(
              <li key={idx}> {item} </li>
            ))
           }
          </ul>
        ))}
      </div>
    </div>
  )
})

function Footer() {
  return (
  <footer className="container mx-auto">

  </footer>
  )
}

export default Footer;
