import React, { useState } from 'react';

export default function Img(props) {
  const [isShow, setIsShow] = useState(true);

  const handleClick = () => {
    setIsShow(false);
  };

  var show = isShow ? 'block' : 'hide';

  return (
    <div className={'grid-item ' + show}>
      <button type="button" className="btn-close" aria-label="Close"
        onClick = {handleClick}
      ></button>      
      <img src={props.url} alt=""/>
    </div>
  );
}