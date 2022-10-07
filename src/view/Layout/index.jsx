import { Diversity1Rounded } from '@mui/icons-material';
import { Paper } from '@mui/material';
import {NavLink,Outlet} from 'react-router-dom';
import { UpperNav } from './UpperNav';

export const Layout = () => {
    const style = ({ isActive }) => ({
      fontWeight: isActive ? 'bold' : 'normal',
      color:"black"
    });
  
    return (
    
        <div className="w-screen flex-col gap-5 text-sm md:text-base mb-16">
        <UpperNav/>
        <div className='flex mt-20'>
          <Outlet />
          </div>   
      
        </div>

    );
  };