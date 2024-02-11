import {Hero, TopNav, SideBar } from "./sections";
import {Button, Card} from "./components";

const App = () => (
  <main className="relative">
    <TopNav />    
    <section>
      <SideBar />   
    </section>
    <section>
      <Hero />
    </section>
    <section>
      <Card />
    </section>
    <section>
      <Card />
    </section>
    <section>
      <Card />  
    </section>
    <section>
      <Button />    
    </section>
  </main>
);

export default App;