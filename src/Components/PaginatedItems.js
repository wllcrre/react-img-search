import ReactPaginate from 'react-paginate';
import React, { useState, useEffect } from 'react';
import Img from './Img';
import NoImgs from './NoImgs';

function Items({ currentItems }) {
  return (
    <div className = "items grid-layout">
      {currentItems && currentItems.map((item) => (
        <Img url={item.urls.small} key={item.id} />
      ))}
    </div>
  );
}

export default function PaginatedItems({ itemsPerPage, imgList  }) {
  // We start with an empty list of items.
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    // Fetch items from another resources.
    
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);

    console.log(imgList.length);
    setCurrentItems(imgList.slice(itemOffset, endOffset));

    console.log(imgList.slice(itemOffset, endOffset));

    setPageCount(Math.ceil(imgList.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = event.selected * itemsPerPage % imgList.length;
    console.log(`User requested page number ${event.selected}, which is offset ${newOffset}`);
    setItemOffset(newOffset);
  };


  if(imgList.length > 0){
    return (
      <>
        <Items currentItems={currentItems} />
        <ReactPaginate
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          marginPagesDisplayed={2}
          pageCount={pageCount}
          previousLabel="< previous"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          breakLabel="..."
          breakClassName="page-item"
          breakLinkClassName="page-link"
          containerClassName="pagination"
          activeClassName="active"
          renderOnZeroPageCount={null}
        />
      </>
    );
  }else{
    return (
      <NoImgs />     
    );
  }
}
