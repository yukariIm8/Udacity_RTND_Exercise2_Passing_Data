import React, { Component } from 'react';
import UserList from './UserList';

/* display a list of all of the users who said that this movie was their favorite along with the title of the movie. */
class MovieCard extends Component{
	render() {
    	const { users, usersWhoLikesMovie, movieInfo } = this.props;
        
        return (
        	<li key={movieInfo.id}>
            	<h2>{movieInfo.name}</h2>
                <h3>Liked By:</h3>
                <UserList usersWhoLikesMovie={usersWhoLikesMovie} users={users} />            
            </li>
         );
    }
}

export default MovieCard;