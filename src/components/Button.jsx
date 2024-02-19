 const Button = ({
  label
 }) => {
  return (
    <button className="bg-neutral text-black border-primary border-2 rounded-2xl w-full h-12 font-inter font-bold text-[15px] leading-6">
        {label}
    </button>
  )
}

export default Button