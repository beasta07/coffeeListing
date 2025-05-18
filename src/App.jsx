import React, { use, useEffect, useState } from 'react'
import Card from './components/Card';

const App = () => {
  const [coffeeData, setCoffeeData] = useState([]);
  const [category, setCategory] = useState('All Products');



  useEffect(() => {
    fetch('https://raw.githubusercontent.com/devchallenges-io/curriculum/refs/heads/main/4-frontend-libaries/challenges/group_1/data/simple-coffee-listing-data.json').then((response) => response.json())
      .then((data) => {
        setCoffeeData(data);
        console.log("Fll coffee data here", data);
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  const filteredData = category === 'Available Now'
    ? coffeeData.filter(item => item.available === true)
    : coffeeData

  return (
    <div className='relative bg-black'>
      <img src="/resources/bg-cafe-lg.jpg" className='' alt="" />
      <div className='bg-[#1C1C1E] text-white font-poppins relative md:mx-80  md:-mt-28 z-20 rounded-3xl md:p-10 p-4'>
        <div className='flex flex-col items-center md:mx-40 justify-center'>
          <h1 className='text-2xl  font-semibold'>Our Collection</h1>
          <p className='text-gray-400 text-sm mt-4'>Introducing our Coffee Collection a selection of unique coffees from different roast type and origins , expertly roasted in small batched and fresh weekly</p>
        </div>
        <div className='my-4 text-sm flex justify-center gap-5'>

          <button onClick={() => setCategory('All Products')} className={`${category === 'All Products' ? 'bg-[#6E747C] text-white' : ''}  px-4 py-1 rounded-2xl font-medium`}>All Products</button>
          <button onClick={() => setCategory('Available Now')} className={`${category === 'Available Now' ? 'bg-[#6E747C] text-white' : ''}  px-4 py-1 rounded-2xl font-medium`}>Available Now</button>

        </div>
        <div className='grid md:grid-cols-3 gap-10'>

          {filteredData.map((data) => (
            <Card data={data} category={filteredData} />
          ))}
        </div>
      </div>


    </div>
  )
}

export default App
