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

	const fetchRequest = (query = 'sun') => {
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

  useEffect(() => {
		fetchRequest();
		console.log("fetchRequest");
  }, []);

	return (
		<div>
			<div className="main-header">
				<div className="inner">
					<h1 className="main-title">ImageSearch</h1>
				</div>
			</div>
			<div className="main-content">
				<div className="fbox">
					<div>
						<button type="button" className="btn btn-primary">Add Image</button>						
						{loadingState
							? <p>Loading</p>
							: <PaginatedItems itemsPerPage={5} imgList={res} />
						}				
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;

