import React from 'react';
import $ from 'jquery';
import WorkTabs from './WorkTabs'
const Work = () => {
    function closework(){
        $("#work_container").addClass("animated slideOutRight");
        setTimeout(function(){
            $("#work_container").removeClass("animated slideOutRight");
            $("#work_container").css("display","none");
        },800);
    }
    return( <div id="work_container" className="container">
    <div onClick={closework}><i className="fas fa-angle-right" /></div>
    <WorkTabs/>
  </div> 
  )
}

export default Work;