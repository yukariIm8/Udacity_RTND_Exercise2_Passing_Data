import React, { Component } from 'react';
import MovieCard from './MovieCard';

/* display a list of all of the movies, and each movie has a list of users who said that
   this movie was their favorite along with the title of the movie. */
class Dashboard extends Component {
	render() {
        const { usersByMovie, users, movies } = this.props;

      	const movieCards = Object.keys(movies).map(id => (
            <MovieCard key={id} 
                users={users} 
                usersWhoLikesMovie={usersByMovie[id]} 
                movieInfo={movies[id]}
            />
        ));

        return <ul>{movieCards}</ul>      
    }
}

export default Dashboard;