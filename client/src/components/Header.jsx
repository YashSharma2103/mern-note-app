import {FaSearch} from 'react-icons/fa';
import {Link} from 'react-router-dom'

export default function Header() {
  return (
    <header className='bg-gray-800 shadow-md p-3'>
      <div className='flex justify-between items-center mx-auto'>
        <Link to={'/'}>
          <h1 className='text-base sm:text-2xl font-bold flex flex-wrap ml-5 cursor-pointer'>
            <span className='text-slate-500'>Web</span>
            <span className='text-slate-600'>Notes</span>
          </h1>
        </Link>
        <form className='bg-slate-300 rounded p-2 flex items-center'>
          <input type='text' placeholder='Search Notes' className='bg-transparent focus:outline-none w-24 sm:w-64'/>
          <FaSearch type='submit' className='text-slate-500 text-xl cursor-pointer'/>
        </form>
        <Link to={'/sign-in'}>
          <h1 
          className='mr-12 font-semibold text-slate-400 text-base sm:text-lg cursor-pointer hover:underline'>
            Sign in
          </h1>
        </Link>
      </div>
    </header>
    
  )
}
