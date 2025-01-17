/* eslint-disable react/prop-types */
import { useState } from "react"
// import '../styles/Cart.css'

const Panier = ({cart, updateCart}) => {
    const monsteaprice = 8
    // const [cart, updateCart] = useState(0)
    const [isOpen, setIsOpen] = useState('false')
    const total = cart.reduce((acc, plantType) =>
      acc + plantType.amount * plantType.price,0
    )
    
  return isOpen?(<div className="bg-purple-200">
    <button className="lmj-cart-toggle-button"
      onClick={() => setIsOpen(false)}>fermer le panier </button>
      <button onClick={() => updateCart([])}>vider le pannier</button>
    <h2>Panier</h2>
    <div>
      Monstera: {monsteaprice}$
      {/* <button onClick={() => {updateCart(cart + 1)}}>Ajouter</button> */}
    </div>
    <h3>Total: {total}$</h3>
  </div>
  ) : (
    <div className="lmj-cart-closed">
      <button className="lmj-cart-toggle-button"
        onClick={() => setIsOpen(true)}>ouvrir le panier </button>
      {/* <button onClick={() => updateCart(0)}>vider le pannier</button> */}
    </div>
  )
}

export default Panier