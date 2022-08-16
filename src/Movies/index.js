import React, { useEffect, useState } from 'react';
import axios from "axios";
import MovieCard from '../components/MovieCard';
// import _ from "lodash";
import "./index.scss";

const url = 'https://the-one-api.dev/v2/movie';
const apiToken = '5sn22IKN7mtbKyc7N-xo';

const getMovies = async () => axios.get(url, {
		headers: {
			Authorization: `Bearer ${apiToken}`
		}
	}).then((response) => {
		// console.log(response, "response");
		return response.data
	});

const Movies = () => {
	const [movies, setMovies] = useState([])
	const [search, setSearch] = useState("");
	const [filteredMovies, setFilteredMovies] = useState([]);

	useEffect(() => {
		getMovies()
			.then((data) => {
				setMovies(data.docs);
				// setFilteredMovies(data.docs)
			})
	}, [movies.length])	

	useEffect(() => {
		movies.filter((movie) => {
			setFilteredMovies(movie.name.includes(search))
		})
	}, [search])
	return (
		<div>
			<input type="text" onChange={(e) => {setSearch(e.target.value)}} placeholder="Filter movies by name" />
			<div className="moviesContainer">
				{movies.length && movies.map((movie) => (
					<React.Fragment key={movie["_id"]}>
						<MovieCard
							movie={movie}
						/>
					</React.Fragment>
				))}
			</div>
		</div>
	);
}

export default Movies