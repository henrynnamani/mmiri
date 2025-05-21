import CustomButton from "./CustomButton"

const Header = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="">Mmiri</div>
      <div className="flex gap-10">
        <span>Home</span>
        <span>About us</span>
        <span>Contact</span>
      </div>
      <CustomButton label="Get Started"/>
    </div>
  )
}

export default Header
