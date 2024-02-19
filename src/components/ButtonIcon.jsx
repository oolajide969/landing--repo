const ButtonIcon = ({
    iconURL,
    label
}) => {
  return (
    <button className="px-5 py-3 flex bg-buttonColor text-white border-buttonBorder border-2 rounded-2xl font-inter font-bold text-[15px] leading-6">
        <img 
            src={iconURL}
            alt="top nav icon"
        />
        {label}
    </button>

  )
}

export default ButtonIcon