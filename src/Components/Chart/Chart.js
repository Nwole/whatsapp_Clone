import React from 'react';
import "./chart.css"
import { Avatar, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import MicIcon from '@mui/icons-material/Mic';

const Chart = () => {
  return (
    <div className='chart'>
      <div className='chart_header'>
        <Avatar />
        <div className='chart_headerInfo'>
          <h3 className='chart_headerTitle'>SOS</h3>
          <p className='chart_headerDis'>Last seen at...</p>
        </div>
        <div className='chart_headerRight'>
          <IconButton>
            <SearchIcon />
          </IconButton>
          <IconButton>
            <AttachFileIcon/>
          </IconButton>
          <IconButton>
            <MoreVertIcon/>
          </IconButton>
        </div>
      </div>

      <div className='chart_body'>
        <p className='chart_message'>
          <span className='chart_name'>Oluchukwu</span>
          this is message
          <span className='chart_timeMap'>{new Date().toUTCString()}</span>
        </p>
        <p className='chart_message chart_receiver'>
          <span className='chart_name'>Ehis</span>
          this is message
          <span className='chart_timeMap'>{new Date().toUTCString()}</span>
        </p>
        <p className='chart_message'>
          <span className='chart_name'>Oluchukwu</span>
          this is message
          <span className='chart_timeMap'>{new Date().toUTCString()}</span>
        </p>
        <p className='chart_message chart_receiver'>
          <span className='chart_name'>Ehis</span>
          this is message
          <span className='chart_timeMap'>{new Date().toUTCString()}</span>
        </p>
      </div>

      <div className='chart_footer'>
        <IconButton>
        <InsertEmoticonIcon />
        </IconButton>
        <form className='chart__footerForm'>
          <input className='chart__footerInput' placeholder='type a message' type="text" />
          <button  className='chart__footerButton' type='submit'>
            send a message
          </button>
        </form>
        <IconButton>
        <MicIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default Chart;
