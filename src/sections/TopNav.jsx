import ButtonIcon from "../components/ButtonIcon"
import {avatarProfileLogo} from "../assets/image";
import {iconButton} from "../assets/icons"

const TopNav = () => {
  return (
    <nav className="flex items-center ">
      <div className="w-7/10">


      </div>
      <div className="flex gap-6">
          <ButtonIcon iconURL={iconButton} label='Create event'/>
          <img src={avatarProfileLogo}/>
      </div>

    </nav>
  )
}

export default TopNav