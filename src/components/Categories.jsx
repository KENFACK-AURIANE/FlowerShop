/* eslint-disable react/prop-types */


const Categories = ({categ, updateCateg, categories}) => {
    // const categorys = plantList.reduce((acc,plant) =>
    //     acc.includes(plant.category)? acc : acc.concat(plant.category),['toutes categories']
    // )
    // const update= (e) =>{
    //     updateCateg(e.target.value)
    // }

  return (<div>
            <select value={categ}  onChange={(e) => updateCateg(e.target.value) }>
            <option>toutes categories</option>
        {
            categories.map((plant,index) =>(
               
                <option key = {`${plant}-${index}`} >
                    {plant}
                </option>
                 
            ))
        }
    </select>
    <button onClick={() => {updateCateg('')}}>Reinitialiser</button>
    <span>{categ}</span>
  </div>
    
  )
}

export default Categories