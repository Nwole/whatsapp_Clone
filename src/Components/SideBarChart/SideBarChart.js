import React from 'react';
import './sidebarchart.css'
import pic from "../../images/face1.jpg"

const SideBarChart = ({name, msg, profile}) => {
  return (
    <div className='sidebarchart'>
      < img src={profile} alt="gee" className="sidebarImg"/>
      <div className='sidebarchart_info'>
          <h2 className='sidebarcharttitle'>{name}</h2>
          <p className='sidebarchartDis'>{msg}</p>
      </div>
      
    </div>
  );
};

SideBarChart.defaultProps = {
    name: "Room name",
    msg: "This is the last message",
    profile: pic

}
export default SideBarChart;
