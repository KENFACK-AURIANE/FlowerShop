
/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react"
import '../styles/Cart.css'
import Categories from "./Categories"

const Cart = ({cart, updateCart,categ, updateCateg,categories }) => {
    const monsteaprice = 8
    const containerRef = useRef(null)
    // const [cart, updateCart] = useState(0)
    const [isOpen, setIsOpen] = useState('false')
    const total = cart.reduce((acc, plantType) =>
      acc + plantType.amount * plantType.price,0
    )
  
    useEffect(() => {
      // document.title = `total: ${total}$`
      setTimeout(() =>{
        if(containerRef.current){
          containerRef.current.style.backgrondColor = "red"
        }
        
      },2000)
    },[categ])
    console.log(containerRef)
    
  return isOpen?(<div ref={containerRef} className="lmj-cart">
    <button className="lmj-cart-toggle-button"
      onClick={() => setIsOpen(false)}>fermer le panier </button>
      <button onClick={() => updateCart([])}>vider le pannier</button>
    <h2>Panier</h2>
    <div>
      Monstera: {monsteaprice}$
      {/* <button onClick={() => {updateCart(cart + 1)}}>Ajouter</button> */}
    </div>
    <h3>Total: {total}$</h3>
    <Categories categ = {categ} updateCateg = {updateCateg} categories={categories}/>
  </div>
  ) : (
    <div className="lmj-cart-closed">
      <button className="lmj-cart-toggle-button"
        onClick={() => setIsOpen(true)}>ouvrir le panier </button>
      {/* <button onClick={() => updateCart(0)}>vider le pannier</button> */}
    </div>
  )
}

export default Cart