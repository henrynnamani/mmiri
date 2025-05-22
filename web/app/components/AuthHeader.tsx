import CustomButton from "./CustomButton"

const AuthHeader = () => {
  return (
    <div className="flex justify-between items-center sticky top-0">
      <div className="">Mmiri</div>
      <CustomButton label="Sign up"/>
    </div>
  )
}

export default AuthHeader
