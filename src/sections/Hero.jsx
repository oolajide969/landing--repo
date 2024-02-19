import {Button, Card} from "../components"
import {card1, card2, card3} from "../assets/image";


const Hero = () => {
  return (
    <body className="p-6">
      <h1 className="font-inter font-semibold text-[32px] leading-10">Get started with VendBite</h1>
      <p className="font-inter font-medium text-[13px] leading-4 py-3">Going through the following guide will help you setup your account in less than 2 minutes.</p>
      <section className="flex gap-6">
        <Card imgUrl={card1} text="Create the menu of dishes you want to serve your guests" label="Create Menu"/>
        <Card imgUrl={card2} text="Add waiters & employees that will manage your events" label="Add Staff"/>
        <Card imgUrl={card3} text="Create your first event, deliver the best experience" label="Create Event"/>
      </section>
      <div className="w-[167px] text-center py-3">
        <Button label="Dismiss checklist"/>
      </div>




    </body>
  )
}

export default Hero