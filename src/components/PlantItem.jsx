/* eslint-disable react/prop-types */
import CareScale from './CareScale'
import '../styles/PlantItem.css'

const PlantItem = ({ id, cover, name, water, light })  => {

	// const quantite = () =>{
	// 	if(water === 1){
	// 		alert('Cette pante requiert peu d arrosage')
	// 	}else if(water === 2){
	// 		alert('Cette pante requiert moderement d arrosage')
	// 	}
	// 	else if(water === 3){
	// 		alert('Cette pante requiert beaucoup d arrosage')
	// 	}
	// 	if(light === 1){
	// 		alert('Cette pante requiert peu de lumiere')
	// 	}else if(light === 2){
	// 		alert('Cette pante requiert moderement de lumiere')
	// 	}
	// 	else if(light === 3){
	// 		alert('Cette pante requiert beaucoup de lumiere')
	// 	}
	// }
    
	return (
		<li key={id} className='lmj-plant-item' >
			<img className='lmj-plant-item-cover' src={cover} alt={`${name} cover`} />
			{name}
			<div>
				<CareScale careType='water' scaleValue={water}  />
				<CareScale careType='light' scaleValue={light} />
			</div>
		</li>
	)
}

export default PlantItem