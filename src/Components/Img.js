import React, { useState } from 'react';

export default function Img({url,imgID,display,imgList}) {
  const [isShow, setIsShow] = useState(display);

  const handleClick = () => {
    setIsShow('hide'); // hide the image 

    //save hide stat to imaList
    for (const img of imgList) {
      if (img.id == imgID) {
        img.display = 'hide';
      }
    }
  };

  return (
    <div className={'grid-item ' + isShow}>
      <button type="button" className="btn-close" aria-label="Close"
        onClick = {handleClick}
      ></button>      
      <img src={url} alt=""/>
    </div>
  );
}