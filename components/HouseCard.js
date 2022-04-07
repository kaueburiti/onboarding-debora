import React from 'react';
import kitchen from '../pages/kitchen.jpeg';
import Image from 'next/image';
import MapIcon from './icons/MapIcon';
import EllipseIcon from './icons/EllipseIcon';
import FavoriteIcon from './icons/FavoriteIcon';
import BedIcon from './icons/BedIcon';
import BathIcon from './icons/BathIcon';
import GroupIcon from './icons/GroupIcon';
import RectangleIcon from './icons/RectangleIcon';

export default function HouseCard() {
  return (
    <div className='bg-white border-transparent h-full pb-5 font-["Roboto"]  shadow-lg'>
      <div className='flex relative items-center'>
        <div className='flex items-center'>
          <Image src={kitchen} alt='kitchen-img' width={350} height={200} />
        </div>
        <div className='z-10 flex items-center justify-center left-6 top-6 absolute border bg-white rounded-sm w-24'>
          <EllipseIcon />
          <p className='font-normal text-base pl-1'>For Sale</p>
        </div>
        <div className='z-10 flex items-center justify-center right-6 top-6 absolute border rounded-full w-9 h-9 bg-white'>
          <FavoriteIcon />
        </div>
      </div>

      <div className='pl-6 pr-6'>
        <h4 className='text-xl pt-5 font-medium'>Duples Pent House</h4>
        <div className='flex h-full pt-2 border-b border-zinc-300 mr-0 w-full mb-0'>
          <MapIcon />
          <p className='w-40 font-normal text-sm not-italic text-zinc-400 pb-4 pl-1'>
            110 Ermin Street, wstrws
          </p>
        </div>
        <div className='flex justify-between font-light text-base pt-3 pb-3 border-b border-zinc-300 '>
          <div className='w-full flex justify-start items-center h-5'>
            <BedIcon />
            <p className='pl-2'>4 Bed</p>
          </div>
          <RectangleIcon />
          <div className='w-full flex justify-center items-center pr-2 pl-2 h-5'>
            <BathIcon />
            <p className='pl-2'>3 Bath</p>
          </div>
          <RectangleIcon />
          <div className='w-full flex justify-end items-center h-5'>
            <GroupIcon />
            <p className='pl-2'>1574 sq</p>
          </div>
        </div>
        <div className='flex justify-between pt-4 items-center'>
          <h4 className='font-medium text-xl'>$2400</h4>
          <button
            type='button'
            className='justify-center p-1 w-28 h-10 text-white bg-blue-600 border-transparent rounded-sm font-normal text-sm'
          >
            See Details
          </button>
        </div>
      </div>
    </div>
  );
}
