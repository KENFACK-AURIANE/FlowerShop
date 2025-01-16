import logo from '../assets/logo.png'
import '../styles/Banner.css'
const Banner = () => {
  return (
  <div className="lmj-banner">
    <h1 className="lmj-title">
      La maison jungle
    </h1>
    <img className="lmj-logo" src={logo} alt="logo"/>

  </div>
  )
}

export default Banner
