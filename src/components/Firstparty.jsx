import menthe from '../assets/mint.jpg'
import pothos from '../assets/pothos.jpg'
import olivier from '../assets/olivier.jpg'
const Firstparty = () => {
  return (
    <div className=" bg-cover bg-no-repeat bg-center
    sm:w-full sm:h-screen  sm:flex sm:flex-col sm:justify-between" style={{backgroundImage: `URL(${olivier})`}}>
        <div className='flex justify-between'>
            <h1 className=' 
                text-3xl p-1 pt-2 text-white
                sm:text-white sm:text-5xl sm:font-mono sm:pl-6 sm:pt-40'>
            Livraison des plantes
            </h1>
            <img className=' sm: w-1/2 sm:h-64' src={pothos}  />
        </div>
        <div className='flex justify-between flex-row-reverse'>
            <h1 className=' 
                text-3xl p-1 pt-2 pb-0 text-white
                sm:text-white sm:text-5xl sm:font-mono sm:pl-6 sm:pt-40'>
            Decouvrez nos plantes au bon prix qualite
            </h1>
            <img className=' h-48
            sm:w-1/2 sm:h-96' src={menthe}  />
        </div>
    </div>
  )
}

export default Firstparty