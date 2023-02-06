import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './App.css';
import ImgList from './Components/ImgList';
import SearchForm from './Components/SearchForm';
// import cred from './cred.js';

import PaginatedItems from './Components/PaginatedItems';

const APP_ID = '6JJbm2PGIBx0oU-on2vqjzF9cwIAJ-EGMyjtf0KkToc';

function App() {

	const [res, setRes] = useState([]);
	const [loadingState, setLoadingState] = useState(true);

	const [addingState, setAddingState] = useState(true);

	const fetchImageList = (query = 'sun') => {
		axios
			.get(
				`https://api.unsplash.com/search/photos/?page=1&per_page=10&query=${query}&client_id=${APP_ID}`
			)
			.then(data => {

				var imgList = data.data.results.map(img => {
					img.display = 'block';
					return img;
				})

				setRes(imgList);
				setLoadingState(false);
			})
			.catch(err => {
				console.log('Error happened during fetching!', err);
			});
	};

	const addImage = (query = 'bird') => {
		axios
			.get(
				`https://api.unsplash.com/photos/random/?query=${query}?=&client_id=${APP_ID}`
			)
			.then(data => {

				var img = data.data;
				img.display = 'block';

				setAddingState(false);
				res.push(img);
			})
			.catch(err => {
				console.log('Error happened during fetching!', err);
			});
	};

  useEffect(() => {
		fetchImageList();
		console.log("fetchImageList");
  }, []);

  const onAddImgClick = event => {
		addImage();
		console.log("addImage");
		setAddingState(true);// clear value
  };

	return (
		<div>
			<div className="main-header hide">
				<div className="inner">
					<h1 className="main-title">ImageSearch</h1>
				</div>
			</div>
			<div className="main-content">
				<div className="fbox">
					<div>
						<button type="button" className="btn btn-primary"
							onClick={onAddImgClick}
						>Add Image</button>						
						{loadingState
							? <p>Loading</p>
							: <PaginatedItems itemsPerPage={5} imgList={res} addingState={addingState}/>
						}				
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;

