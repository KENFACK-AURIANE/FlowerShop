import { useState } from "react"
import '../styles/Footer.css'
const Footer = () => {
    const [inputValue, setInputValue] = useState('')
    const Submit = (e) =>{
        setInputValue(e.target.value)
    }
    const fBlur = () =>{
        if(!inputValue.includes('@')){
            alert('cette adresse ne peut être accepté car elle ne contient pas  @')
        }
    }    
  return (
    <footer className="lmj-footer">
      <div className="lmj-footer-elem">Pour les passionnés de plantes ♣☻</div>
      <div className="lmj-footer-elem">laissez nous un mail: ♣☻
      <input 
        placeholder="Entrez votre adresse e-mail"
        value={inputValue}
        onChange={Submit}
        onBlur={fBlur}
      />
      </div>
      {inputValue}
    </footer>
  )
}

export default Footer