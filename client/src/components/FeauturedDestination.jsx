import React from 'react'
import { roomsDummyData } from '../assets/assets'
import HotelCard from './HotelCard'
import Title from './Title'
import { useNavigate } from 'react-router-dom'

const FeauturedDestination = () => {
  const navigate = useNavigate();

  return (
    <div className='flex flex-col items-center px-6 md:px-16 lg:px-24 bg-slate-50 py-20 '>
      <Title
        title='Featured Destination'
        subTitle='Discover our handpicked selection of exceptional properties around the world, offering unparalleled luxury and unforgettable experiences.'
      />

      <div className='flex flex-wrap justify-center gap-6 mt-20 md:flex-nowrap'>
        {roomsDummyData.slice(0, 4).map((room, index) => (
          <div key={room._id} className='w-full md:w-1/4 bg-white  rounded-xl shadow-md overflow-hidden cursor-pointer'>
            <HotelCard room={room} index={index} />
          </div>
        ))}
      </div>

      <button
        onClick={() => {
          navigate('/rooms');
          scrollTo(0, 0);
        }}
        className='my-16 px-4 py-2 text-sm font-medium border border-gray-300 rounded bg-white hover:bg-gray-50 transition-all cursor-pointer'
      >
        View All Destinations
      </button>
    </div>
  )
}

export default FeauturedDestination
