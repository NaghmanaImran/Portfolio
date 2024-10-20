import React from 'react'
interface propsType{
    tittle:string;
}

const Heading:React.FC<propsType> = ({tittle}) => {
  return (
    <div className='text-center text-8xl pb-20'>
      <p className='border-b-4 inline-block pb-2'>{tittle}</p>
      
    </div>
  )
}

export default Heading
