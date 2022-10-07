import {NavLink} from 'react-router-dom';
import { Paper } from '@mui/material';
import { UpperNav } from './Layout/UpperNav';
import { Contact } from './Contact';

import bgimage from '../assets/wallpaperflare.com_wallpaper.jpg'
import { MyInput } from '../components/MyInput';



export const Home= ()=> {

  return (
    <div className=
    'flex-col flex justify-center items-center gap-6 w-screen' >
 
  <img src={bgimage} className="h-{100px}" />
    
    <div  className=
    'flex-col flex justify-center p-5 place-content-center gap-6 md:flex-row'>

    <Paper elevation={3} className="flex p-8 justify-center items-center">
  <h2>Welcome to my page</h2>
    </Paper>

    <Paper elevation={3} className="flex-col p-8 text-center">
      <h2 className='text-xl font-bold'>About Me</h2>
  <p>My name is Muaz Khairi. Was involved in oil and gas industry, food and beverage, insurance & banking and production. Looking forward in building up my skills in coding. Aiming to play a significant role in enhancing people’s life by bringing the beneficial technology solution to the world.</p>
    </Paper>
    </div>

    <Paper elevation={3} className="flex-col p-8 text-center w-9/12">
      <h2 className='text-xl font-bold'>Lorem</h2>
  <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos suscipit accusantium iusto? Facere, officia ex dignissimos eius reiciendis impedit debitis ipsam adipisci ab aliquid cumque id tenetur repellendus consectetur aperiam."</p>
    </Paper>


<Paper className='md:hidden sm:flex'>

    <Contact/>
</Paper>
</div>


  )
};

