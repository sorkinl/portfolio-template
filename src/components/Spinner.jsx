import React from 'react';
import classNames from 'classnames';
const Spinner = () => {
  const [removeClass, setRemoveClass] = React.useState(false);
  const [addFadeOut, setAddFadeOut] = React.useState(false);
//test commit
    setTimeout(function(){
        setAddFadeOut(true);
        setTimeout(function(){
          setRemoveClass(true);
        },1000);
    },1500);
    
    return (<div><div id="loading" className={classNames({
      animated: addFadeOut,
      fadeOut: addFadeOut
    })}
    style={removeClass?{display:'none'}:{}}
    >
    <div id="spinner"></div>
</div>
</div>)
}

export default Spinner;