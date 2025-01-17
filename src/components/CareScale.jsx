/* eslint-disable react/prop-types */
import sun from '../assets/sun.svg'
import water from '../assets/water.svg'


const CareScale = ( {careType, scaleValue} ) => {
    const value = [1, 2, 3]

    const quantiteLabel = {
      1: 'peu',
      2: 'moderement',
      3: 'beaucoup'
    }

    const scareType  = careType ==='light'?(
      <img src={sun} alt='photo de soleil'/>
    ): (
      <img src={water} alt='photo de pluie'/>
    )

    const quantite = ()=> {
      alert(`cette plante requiert  ${quantiteLabel[scaleValue]} ${careType === 'light'? 'de lumiere' : "d'arrosage" }`)
    }
    
  return (
    <div  onClick={quantite} className=' p-1  flex'>
      {
        value.map((rangE) =>(
          scaleValue >= rangE? scareType:null
        ))}
    </div>
  )
}

export default CareScale