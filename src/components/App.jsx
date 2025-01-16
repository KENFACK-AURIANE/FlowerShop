import Banner from "./Banner"
import Cart from "./Cart"
import Footer from "./Footer"
import ShoppingList from "./ShoppingList"
import '../styles/Layout.css'
import { plantList } from '../datas/plantList'
import { useEffect, useState } from "react"

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
    <div>
      <Banner />
      <div className="lmj-layout-inner">
        <Cart cart = {cart} updateCart = {updateCart} categ = {categ} updateCateg = {updateCateg} categories={categorys}/>
        <ShoppingList cart = {cart} updateCart = {updateCart} categ = {categ} categories={categorys}/>
      </div>
      <Footer />
    </div>
  )
}

export default App