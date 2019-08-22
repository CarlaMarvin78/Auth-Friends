import React from 'react';
import Loader from 'react-loader-spinner';
import { axiosWithAuth } from '../utils/axiosWithAuth';

class FriendsList extends React.Component {
    state = {isLoading: true, isSubmitting: false, friend: {}, friends: []};
    componentDidMount(){
        axiosWithAuth()
        .get('http://localhost:5000/api/friends')   
        .then (res => {
            console.log (res.data);
            this.setState({friends: res.data});
            this.setState({isLoading: false});
        })
        .catch(error => console.log(error));
    }

    handleChange = event => {
        this.setState({
            friend: {
              ...this.state.friend,
              [event.target.name]: event.target.value
            }
          });
    }
    handleSubmit = event => {
        event.preventDefault();
        this.setState({isSubmitting: true});
        if(this.state.friend.name && this.state.friend.age && this.state.friend.email) {
            axiosWithAuth()
            .post('http://localhost:5000/api/friends', this.state.friend)
            .then(res => {
                this.setState({friends: res.data});
                this.setState({isSubmitting: false});
            })
            .catch(error => console.log(error));
        }
    }
    render() {
        return (<div>
            {(this.state.isLoading || this.state.isSubmitting) && (
            <div className="key spinner">
                <Loader type="Puff" color="#204963" height="60" width="60" />
                <p>Loading Data</p>
            </div>
            )}
            {this.state.friends.map(friend => <div className="friend" key={friend.id}>
            <div className="friendName">{friend.name}</div>
            <div className="friendAge">{friend.age}</div>
            <div className="friendEmail">{friend.email}</div>
            </div>)}
            <form onSubmit={this.handleSubmit}>
                <input type="text" name="name" placeholder="Name" onChange={this.handleChange}/>
                <input type="number" name="age" placeholder="Age" onChange={this.handleChange}/>
                <input type="email" name="email" placeholder="Email" onChange={this.handleChange}/>
                <button type="sumbit">Add friend`</button>
            </form>
            </div>);
    }
}


export default FriendsList;