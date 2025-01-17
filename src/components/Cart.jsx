
/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react"
// import '../styles/Cart.css'
import Categories from "./Categories"

const Cart = ({cart, updateCart,categ, updateCateg,categories }) => {
    
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
    
  return isOpen?(<div ref={containerRef} className="flex flex-col gap-5 w-screen  sm:flex-row pt-6 pb-6 justify-between px-8">
    <button className="bg-gray-300 w-80 h-8 rounded-3xl" onClick={() => setIsOpen(false)}>fermer le panier </button>
    <button onClick={() => updateCart([])} className="bg-gray-300 w-80 h-8 rounded-3xl">vider le pannier</button>

    <h3 className=" text-green-700 box box-border border-green-600 border-4 w-80 text-center">Total: {total}$</h3>
    <Categories categ = {categ} updateCateg = {updateCateg} categories={categories}/>
  </div>
  ) : (
    <div className="flex justify-center">
      <button className="bg-gray-300 w-80 h-8 rounded-3xl"
        onClick={() => setIsOpen(true)}>ouvrir le panier </button>
      {/* <button onClick={() => updateCart(0)}>vider le pannier</button> */}
    </div>
  )
}

export default Cart