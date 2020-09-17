import React, { Component } from 'react';

/* display a list of all of the users who said that this movie was their favorite. */
class UserList extends Component {
	render() {
		const { usersWhoLikesMovie, users } = this.props;
      
		if(!usersWhoLikesMovie || usersWhoLikesMovie.length === 0) {
			return <p>None of the current users liked this movie.</p>
		}

		const listOfItems = usersWhoLikesMovie.map(id => (
			<li key={id}>
				<p>{users[id].name}</p>
			</li>
		));

		return <ul>{listOfItems}</ul>
	}
}

export default UserList;