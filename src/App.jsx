import {Hero, TopNav, SideBar } from "./sections";
import {Button, Card} from "./components";

const App = () => (
  <main className="relative grid grid-cols-main h-screen grid-rows-up" >
        <section className="col-[2_/_span_3] bg-neutral flex align-center flex-row-reverse border border-main">

<TopNav />  
</section>
     
      <section className="col-[1_/_span_1] bg-neutral row-[1/13] ">
      <SideBar />   
    </section>
 
      
  
    <section className="col-[2_/_span_3] bg-main row-[2/13]">
      <Hero />
    </section>

  </main>
);

export default App;