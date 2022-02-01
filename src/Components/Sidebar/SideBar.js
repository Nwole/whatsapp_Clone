import React from 'react';
import "./sidebar.css"

import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import photo from '../../images/face2.jpg'
import bigPic from '../../images/ppp.jpg'
import selfPic from '../../images/ppg.jpg'

import { IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import SideBarChart from '../SideBarChart/SideBarChart';
const SideBar = () => {
  return (
    <div className='sidebar'>
        <div className='sidebar_header'>
        <img src={photo} alt="gee" className='sidebarImg'/>


        <div className='sidebar_headerRight'>
          <IconButton>
          <DonutLargeIcon />
          </IconButton>

          <IconButton>
          <ChatIcon />
          </IconButton>

          <IconButton>
          <MoreVertIcon />
          </IconButton>
        </div>
        </div>

        <div className='sidebar_search'>
          <div className='sidebar_searchContainer'>
            <SearchIcon />
            <input type="text" placeholder="search or start new chat" />
          </div>
        </div>
        
        <div className='sidebar_charts'>
          <SideBarChart name="Oluchukwu" msg="hello" />
          <SideBarChart name="Grace" msg="how are you doing" profile={selfPic}/>
          <SideBarChart profile={photo} name="how are you doing"/>
          <SideBarChart profile={bigPic}/>

        </div>
        
    </div>
  );
};

export default SideBar;
