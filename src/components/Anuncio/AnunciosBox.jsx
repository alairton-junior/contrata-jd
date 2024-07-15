/* eslint-disable react/prop-types */
import React from 'react'
import { IconPin, IconMenuPoints } from '../../assets/icons';

const AnunciosBox = ({ title, description }) => {
  return (
    <div className='flex justify-between bg-[#FAFAFA] p-4 rounded-md border-[0.5px] mb-2'>
        <div>
            <h1 className='text-base text-[#303030] pb-2'>{title}</h1>
            <span className='text-xs'>{description}</span>
        </div>
        <div className='flex items-center gap-5 ml-2'>
            <IconPin />
            <IconMenuPoints />
        </div>
    </div>
  )
}

export default AnunciosBox
