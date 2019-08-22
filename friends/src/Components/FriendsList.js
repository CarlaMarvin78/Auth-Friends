import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

class FriendsList extends React.Component {
    state = {friends: []
    };
    componentDidMount(){
        axiosWithAuth()
        .get('http://localhost:5000/api/friends')   
        .then (res => {
            console.log (res.data);
            this.setState({friends: res.data});
        })
        .catch(error => console.log(error));
    }

    render() {
        return (this.state.friends.map(friend => <div key={friend.id}>
            <div className="friendName">{friend.name}</div>
            <div className="friendAge">{friend.age}</div>
            <div className="friendEmail">{friend.email}</div>
            </div>));
    }
}

export default FriendsList;