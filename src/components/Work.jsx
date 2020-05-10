import React from 'react';
import WorkTabs from './WorkTabs'
import classNames from "classnames";
const Work = ({showWork, setShowFalse, slideInRight}) => {
    const [animated, setAnimated] = React.useState(false);
    function closework(){
        setAnimated(true);
        setTimeout(() => {
            setAnimated(false);
            setShowFalse()
          },950);
        /* $("#work_container").addClass("animated slideOutRight");
        setTimeout(function(){
            $("#work_container").removeClass("animated slideOutRight");
            $("#work_container").css("display","none");
        },800); */
    }
    return( <div id="work_container" className={classNames("container",{
        animated:animated || slideInRight,
        slideOutRight:animated,
        slideInRight:slideInRight
    })}
    style={showWork?{display:'inherit'}:{display:'none'}}
    >
    <div onClick={closework}><i className="fas fa-angle-right" /></div>
    <WorkTabs/>
  </div> 
  )
}

export default Work;