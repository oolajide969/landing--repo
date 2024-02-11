const ButtonIcon = ({
    iconURL,
    label
}) => {
  return (
    <button className="px-5 py-3 flex bg-buttonColor text-white border-buttonBorder border-2 rounded-2xl">
        <img 
            src={iconURL}
            alt="top nav icon"
        />
        {label}
    </button>

  )
}

export default ButtonIcon