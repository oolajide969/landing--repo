const SideBar = () => {

  const Menus = [
    { title: "Home", src: "Home" },
    { title: "Events", src: "Events" },
    { title: "Dashboard", src: "Dashboard", gap: true },
    { title: "Create Event ", src: "Event" },
    { title: "Menu", src: "Menu" },
    { title: "Staff", src: "Staff" },

  ];
  return (
    <div>

      <h1 className="pb-10 pt-3 pl-1 text-lg">Vendbite</h1>

    <ul className="pl-1">

  {Menus.map((menu,index)=>(

<li key={index}>
  {menu.title}
</li>

  ) )}
    </ul>




    </div>
  )
}

export default SideBar