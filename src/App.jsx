import { Link, useLoaderData } from 'react-router-dom'
// import './app.css'
import CoffeeCard from './assets/Components/CoffeeCard';
import { useState } from 'react';

function App() {

  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees);


  return (
    <>
      <div className='m-20 bg-[#FFF]'>
        <h1 className='text-4xl font-bold text-center'>Coffee Store {coffees.length} </h1>

        <div className='grid md:grid-cols-2 gap-4 my-12 lg:mx-12'>
          {
            coffees.map(coffee => <CoffeeCard
              key={coffee._id}
              coffee={coffee}
              coffees = {coffees}
              setCoffees = {setCoffees}
               >
            </CoffeeCard>)
          }
        </div>

        <div className='text-center'>
          <Link to='/addcoffee'><button className='btn bg-[#E3B577]  m-6'>Add Coffee</button></Link>
          <Link to='/signin'><button className='btn bg-[#E3B577]  m-6'>Login</button></Link>
          <Link to='/signup'><button className='btn bg-[#E3B577]  m-6'>Register</button></Link>
          <Link to='/user'><button className='btn bg-[#E3B577]  m-6'>Users</button></Link>

        
        </div>
      </div>
    </>
  )
}

export default App
