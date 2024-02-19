import {Home, Events, Help, Menu, Staff, Branch, Root } from "../assets/icons";

const SideBar = () => {

  const Menus = [
    { title: "Home", src: Home },
    { title: "Events", src: Events },
    { title: "Dashboard", src: Branch, gap: true },
    { title: "Create Event ", src: Root },
    { title: "Menu", src: Menu },
    { title: "Staff", src: Staff },

  ];
  return (
    <div className="relative w-[340px]">
      <h1 className="pb-5 pt-3 pl-5 font-inter font-semibold text-[15px] leading-6">VendBite</h1>
      <ul className="pl-1 pt-1">
        {Menus.map((menu,index)=>(
          <li key={index} className="flex items-center gap-2 p-3">
            <img src= {`${menu.src}`}/>
            <span>{menu.title}</span>
          </li>
          ) )}
      </ul>
      <h1 className="absolute top-[95vh] pl-5">Help & getting started</h1>
    </div>
  )
}

export default SideBar