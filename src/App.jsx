import { Link } from "react-router-dom";

function App() {
  return (
    <div className='bg-page min-h-screen w-full flex flex-col'>
      <div className='grid place-content-center grow'>
        <h1 className='text-display'>For the Culture</h1>
        <div className='h-[4px] w-full rounded-[2px] bg-primary divider-shadow'></div>
      </div>
      <div className='flex justify-end py-[25px]'>
        <Link to={'gallery'} className='text-nav px-[62px] py-[6px]'>Gallery</Link>
        <Link to={'about'} className='text-nav px-[62px] py-[6px]'>About</Link>
      </div>
    </div>
  )
}

export default App
