import {Button} from "../components"

const Card = ({
  imgUrl,
  text,
  label
}) => {
  return (
    <div className="w-[329.33px] h-[413px] gap-8 bg-neutral rounded-lg shadow-xl">
      <div className="font-inter font-medium text-[15px] leading-6">
        <img
            src={imgUrl}
            alt={label}
            width={329.33}
            height={245}
        />
      </div>
      <div className="px-6 pb-6 pt-5">
        <p>{text}</p>
        <div className="py-6">
         <Button label={label}/>
        </div>
      </div>

    </div>
  )
}

export default Card