import Navbar from './components/Navbar'
import BodyVo from './components/BodyVo';
import Footers from './components/Footers';

export default function App() {
  return (
    <div className='h-full flex flex-col gap-4'>
      <Navbar/>
     <BodyVo/>
     <Footers/>
    </div>
  );
}
