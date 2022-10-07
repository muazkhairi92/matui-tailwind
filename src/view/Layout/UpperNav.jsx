import {NavLink} from 'react-router-dom';
import reactLogo from '../../assets/react.svg'


export const UpperNav = () => {

    // const style = ({ isActive }) => ({
    //     fontWeight: isActive ? 'bold' : 'normal',
    //     color:"black"
    //   });

    return (
        <div className="bg-slate-800 absolute top-0 p-3 flex w-screen justify-around shadow	justify-items-center">
        <NavLink to="/" className='hidden md:flex text-sm text-teal-600 lg:text-lg'>Home</NavLink>
        <NavLink to="/" className='sm:flex md:hidden lg:hidden'><img src={reactLogo} alt="React logo" /></NavLink>
        <NavLink to="contact" className='hidden md:flex text-sm text-teal-600 lg:text-lg'>Contact</NavLink>
        {/* <h3 className='text-gray-600 lg:hidden'>test</h3> */}
        {/* <h3 className='text-blue-900'>Main Page</h3> */}
 
    </div>
    )
}