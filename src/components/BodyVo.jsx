import hostspot from '../assets/hotspot.png';
import { FaGift } from "react-icons/fa6";
import { FiSmartphone } from "react-icons/fi";
import { CiCirclePlus } from "react-icons/ci";
import { RiSimCardLine } from "react-icons/ri";
import { BsStars } from "react-icons/bs";
import { CiCreditCard1 } from "react-icons/ci";

const BodyVo = () => {
  return (
    <div className='pl-4 pr-4'>
     <div className='grid grid-cols-2 gap-4'>
     <div className='bg-gray-100 w-full pl-6 pt-2 pb-2 rounded-2xl'>
        <img src={hostspot} className='h-6' alt="Hotspot icon"/>
        <p className='pt-6'>Your data</p>
        <p className='font-semibold'>20.34 <span className='text-xs'>GB</span></p>
      </div>
      <div className='bg-gray-100 w-full pl-6 pt-2 pb-2 rounded-2xl'>
      <RiSimCardLine color="#E60000" />
        <p className='pt-6'>Your airtime balance</p>
        <p>₵ 4.32</p>
      </div>
      <div className='bg-gray-100 w-full pl-6 pt-2 pb-2 rounded-2xl'>
      <CiCreditCard1 color="#E60000"  />
        <p className='pt-6 font-semibold'>Pay Bill</p>
        <p>Make payments for your postpaid services</p>
      </div>
     </div>
     <div className='pt-4'>
        <h3 className='font-bold pb-4'>Manage</h3>
       <div className='grid grid-cols-2 gap-4'>
       <div className='bg-gray-100 w-full pl-6 pt-2 pb-2 rounded-2xl pr-4 h-40 w-40'>
        <CiCirclePlus className='mt-2' color='gray' size={24}/>
        <p className='pt-14 font-semibold'>Top Up Airtime Or Data</p>
        </div>
        <div className='bg-gray-100 w-full pl-6 pt-2 pb-2 rounded-2xl  pr-4 h-40 w-40'>
        <FiSmartphone className='mt-2'color='gray' size={24} />
        <p className='pt-14 font-semibold'>My Subscriptions</p>
        </div>
        <div className='bg-gray-100 w-full pl-6 pt-2 pb-2 rounded-2xl pr-4 h-40 w-40'>
        <BsStars className='mt-2'color='gray' size={24} />
        <p className='pt-14 font-semibold'>Valued-Added Services</p>
        </div>
        <div className='bg-gray-100 w-full pl-6 pt-2 pb-2 rounded-2xl pr-4 h-40 w-40'>
        <FaGift className='mt-2' color='gray' size={24}/>
        <p className=' font-semibold pt-14'>Red Loyalty Rewards</p>
        </div>
       </div>
     </div>
    </div>
  )
}

export default BodyVo
