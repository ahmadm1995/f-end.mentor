import './App.css'
import React from 'react';

export default function App() {
 

  return (
    <div className="bg-customYellow min-h-screen flex justify-center items-center">
      <div className='bg-white w-[384px] h-[522px] border-solid border-2 rounded-3xl border-black flex flex-col justify-start items-center'>
        <img className="mt-6 rounded-2xl w-[336px] h-[200px]"src="/src/assets/images/illustration-article.svg"/>
          <div className='flex flex-col justify-center items-center ml-6'>
            <div className='bg-customYellow border-solid rounded-sm self-start mt-6'>
              <h1 className='ml-3 mr-3 mt-1 mb-1 font-figtree'>Learning</h1>
            </div>
            <h2 className='self-start mt-3 font-figtree font-light'>Published 21 Dec 2023</h2>
            <h1 className='self-start mt-3 font-figtree text-2xl font-extrabold'>HTML & CSS foundations</h1>
            <p className='self-start mt-3 font-figtree font-light'>These languages are the backbone of every website, defining structure, content, and presentation.</p>
          </div>

          <div className='flex items-center self-start mt-6 ml-6'>
            <img className="w-[32px] h-[32px]" src="/src/assets/images/avatar-svgrepo-com.svg"/>
            <h1 className='font-figtree ml-2 '>Greg Hooper</h1>
          </div>
          
      </div>
    </div>
  )
}


