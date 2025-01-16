/* eslint-disable react/prop-types */
import { plantList } from '../datas/plantList'
import PlantItem from './PlantItem'
import '../styles/ShoppingList.css'

function ShoppingList({cart, updateCart,categ, categories}) {
	// const categories = plantList.reduce(
	// 	(acc, plant) =>
	// 		acc.includes(plant.category) ? acc : acc.concat(plant.category),
	// 	['toutes categories']
	// )
	const specificCategories = plantList.filter((plant) => plant.category === categ)
	const addToCart = (nom,price) =>{
		const currentPlant = cart.find((plant)=>
			plant.name === nom
		)
		if(currentPlant){
			const cartwithoutNom = cart.filter((plant)=>
				plant.name !== nom
			)
			updateCart([
				...cartwithoutNom,{nom, price, amount: currentPlant.amount + 1}
			])
		}else{
			updateCart([
				...cart,{nom, price, amount: 1}
			])
		}
	}

	return categ === '' || categ ==='toutes categories'?(
		<div>
			<ul>
				{categories.map((cat) => (
					<li key={cat}>{cat}</li>
				))}
			</ul>
			<ul className='lmj-plant-list'>
				{plantList.map(({ id, cover, name, water, light, price }) => (
					<div key={id}>
						<PlantItem key={id}
							id={id}
							cover={cover}
							name={name}
							water={water}
							light={light}
							
						/>
						 <button onClick={() => {addToCart(name, price)}}>Ajouter</button>
					</div>
					 
				))}
			</ul>
		</div>
	) : (
		<ul className='lmj-plant-list'>
			{specificCategories.map(({ id, cover, name, water, light, price }) => (
				<div key={id}>
					<PlantItem key={id}
						id={id}
						cover={cover}
						name={name}
						water={water}
						light={light}
							
					/>
					<button onClick={() => {addToCart(name, price)}}>Ajouter</button>
				</div>
					 
			))}
		</ul>
		
	)
}

export default ShoppingList