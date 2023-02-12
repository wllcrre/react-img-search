import React, { useState, useEffect } from 'react';
import Img from './Img';
import NoImgs from './NoImgs';

function Items({ currentItems,imgList }) {
  return (
    <div className = "items grid-layout mb-4">
      {currentItems && currentItems.map((item) => (
        <Img url={item.urls.small} key={item.id} imgID={item.id} display={item.display} imgList={imgList}/>
      ))}
    </div>
  );
}


export default function PaginatedImgs({ itemsPerPage, imgList ,addingState }) {
  
  const [currentItems, setCurrentItems] = useState(null);
  const [pageNum, setPageNum] = useState(1);
  const [itemOffset, setItemOffset] = useState(0);

  const [prevDisabled, setPrevDisabled] = useState('');
  const [nextDisabled, setNextDisabled] = useState('');

  let pageCount = 0;

  const onPrevClick = event => {
    if(pageNum != 1){
      setItemOffset(itemOffset - itemsPerPage);
      setPageNum(pageNum - 1);
    }
  };
  
  const onNextClick = event => {
    if (pageNum != pageCount) {
      setItemOffset(itemOffset + itemsPerPage);
      setPageNum(pageNum + 1);
    }
  };

  useEffect(() => {
    let endOffset = itemOffset + itemsPerPage;

    pageCount = Math.ceil(imgList.length / itemsPerPage)

    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    

    if (pageNum == 1){
      setPrevDisabled('disabled');
    }else{
      if (prevDisabled == 'disabled') {
        console.log('show prev');
        setPrevDisabled('');
      }
    }

    if (pageNum == pageCount) {
      setNextDisabled('disabled');
    }else{
      if (nextDisabled == 'disabled') {
        console.log('show next');
        setNextDisabled('');
      }
    }

    setCurrentItems(imgList.slice(itemOffset, endOffset));
  }, [pageNum, itemsPerPage, addingState]);

  if(imgList.length > 0){
    return (
      <>
        <Items currentItems={currentItems} imgList={imgList}/>      
        <button type="button" className="btn btn-outline-primary mr-3"
          onClick={onPrevClick} disabled={prevDisabled} 
        >Prev</button>
        <button type="button" className="btn btn-outline-primary mr-3"
          onClick={onNextClick} disabled={nextDisabled} 
        >Next</button>
        <span>{pageNum}</span>	        
      </>
    );
  }else{
    return (
      <NoImgs />     
    );
  }
}
