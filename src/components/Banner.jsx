import logo from '../assets/logo.png'
// import '../styles/Banner.css'
const Banner = () => {
  return (
  <div className="bg-gray-200 flex justify-end flex-row h-8 pr-5">
    <h1 className="text-red-500 text-2xl mr-3" >
      La maison jungle
    </h1>
    <img className="w-5" src={logo} alt="logo"/>

  </div>
  )
}

export default Banner
