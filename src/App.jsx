
import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeCard from './CoffeCard';
import { useState } from 'react';

function App() {

  const loadedCoffees = useLoaderData();

  const [coffees, setCoffees] = useState(loadedCoffees);

  return (
    <div className='m-20'>
      <h1 className='text-6xl text-center my-20 text-purple-600'>HOT HOT COlD COFFEE: {coffees.length}</h1>
      <div className='grid md:grid-cols-2 gap-4'>
        {
          coffees.map(coffee => <CoffeCard
            key={coffee._id}

            coffee={coffee}

            coffees={coffees}
            setCoffees={setCoffees}

          ></CoffeCard>)
        }
      </div>
    </div>
  )
}

export default App
