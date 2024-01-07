import tobi from '../assets/tobi.png'
import { IoCashOutline } from "react-icons/io5";
import { CiSettings } from "react-icons/ci";
import { CiCirclePlus } from "react-icons/ci";
import sv from '../assets/tabs.svg'
const Footers = () => {
  return (
    <div className='flex gap-6 bg-[#EBEBE9] h-32 pt-4 pl-4'>
      <div className='flex flex-col'>
        <img src={sv}  alt="Phone and computer icon"/>
        <p>Services</p>
      </div>
      <div className='flex flex-col'>
        <IoCashOutline size={38} color='gray'/>
        <p className='pt-4'>Cash</p>
      </div>
      <div className='h-20 w-20'>
        <img src={tobi} alt="Vodafone mario icon"/>
      </div>
      <div>
      <CiCirclePlus size={38} color='gray' />
        <p className='pt-4'>Bundles</p>
      </div>
      <div>
        <CiSettings size={38} color='gray'/>
        <p className='pt-4'>Settings</p>
      </div>
    </div>
  )
}

export default Footers
