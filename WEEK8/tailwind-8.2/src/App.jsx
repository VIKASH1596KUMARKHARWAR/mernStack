import {useState} from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App () {
  return (
    // <div className='flex justify-between'>
    //   <div className='bg-red-500'>hi</div>
    //   <div className='bg-green-500'>hi</div>
    //   <div className='bg-yellow-500'>hi</div>
    //   <div className='bg-pink-500'>hi</div>
    // </div>

    // <div className="grid grid-cols-3">
    //   <div className="bg-red-500">hi</div>
    //   <div className="bg-green-500">hi</div>
    //   <div className="bg-yellow-500">hi</div>
    // </div>

    // <div className="grid grid-cols-10">
    //   <div className="bg-red-500 col-span-4">hi</div>
    //   <div className="bg-green-500 col-span-4">hi</div>
    //   <div className="bg-yellow-500 col-span-2">hi</div>
    // </div>

    /*Default Class (bg-red-500):
This is applied to all screen sizes unless overridden by responsive classes. */
    // sm se uper wale m blue hoga wrna baaki sb mein toh red hi aayega

    // <div className="bg-red-500 sm:bg-blue-500 md:bg-yellow-600">
    //   hi their
    // </div>

    (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        <div className="bg-red-500">hi</div>
        <div className="bg-green-500">hi</div>
        <div className="bg-yellow-500">hi</div>
      </div>
    )
  );
}

export default App;
