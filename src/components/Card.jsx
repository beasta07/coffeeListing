import React from 'react'

const Card = ({data,category}) => {
    console.log(data,'data in Card')
  return (
    <>
            <div className='relative' key={data.id}>
              <img src={data.image} className=' rounded-2xl w-[20rem] object-cover' alt="Product Image" />
              <div className='flex my-2 justify-between'>
                <h2>{data.name}</h2>
                <span className='bg-green-50 p-2 rounded-xl text-black text-sm'>{data.price}</span>
              </div>
              <div className='flex justify-between'>
              <div className='flex gap-1 items-center'>
                <img src="../public/resources/Star_fill.svg" alt="star" />
                <h3 className='font-semibold'>{data.rating}</h3>
                <span className='text-gray-400 text-sm'>({data.votes} votes)</span>
                
              </div>
                {
                !data.available &&
                  <div className=' text-xs font-semibold text-red-400 p-2'>
                    Sold Out
                  </div>
              }
              </div>
              {
                data.popular &&
                  <div className='absolute top-2 left-2 rounded-full text-xs font-semibold bg-yellow-400 p-2'>
                    Popular
                  </div>
              }
            </div>

    </>
  )
}

export default Card
