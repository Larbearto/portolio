import React from 'react'

function About() {
  return (
    <div
      name='about'
      className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'
    >
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
            About
          </p>
        </div>

        <p className='text-xl mt-20'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut nam magnam
          tempora beatae similique ex natus minima odit ratione quaerat quidem,
          reiciendis alias exercitationem velit, repellat dolorem doloribus
          porro blanditiis?
        </p>

        <br />

        <p className='text-xl'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          natus quisquam eum! Ipsum nam vel consequuntur. Praesentium repellat
          cupiditate sequi neque perferendis, et in sunt itaque culpa, ipsum
          omnis adipisci?
        </p>
      </div>
    </div>
  )
}

export default About
