import Banner from "./Banner"
import Cart from "./Cart"
import Footer from "./Footer"
import ShoppingList from "./ShoppingList"
// import '../styles/Layout.css'
import { plantList } from '../datas/PlantList'
import { useEffect, useState } from "react"
import Firstparty from "./Firstparty"
import Secondparty from "./Secondparty"

const App = () => {
  useEffect(() => {
    document.title = `la maison JUngle`
  },[])
  const saveCart = localStorage.getItem('cart')
  const [cart, updateCart] = useState(saveCart? JSON.parse(saveCart): [])
  const [categ, updateCateg] = useState('')
  const categorys = plantList.reduce(
		(acc, plant) =>
			acc.includes(plant.category) ? acc : acc.concat(plant.category),
		[]
	)
  useEffect(()=>{
    localStorage.setItem('cart', JSON.stringify(cart))
  },[cart])
  return (
    <div className=" gray-red-800 h-screen flex-col items-center ">
      <Banner />
      <Firstparty />
      <Secondparty />
      <div className=" flex  flex-col justify-between gap-10">
      <h1 className=" font-serif text-3xl text-black sm:text-4xl text-center"> Passez votre commande</h1>
        <Cart cart = {cart} updateCart = {updateCart} categ = {categ} updateCateg = {updateCateg} categories={categorys}/>
        <ShoppingList cart = {cart} updateCart = {updateCart} categ = {categ}/>
      </div>
      <Footer />
    </div>
  )
}

export default App