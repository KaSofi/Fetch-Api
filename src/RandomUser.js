import { Component } from "react";

export class RandomUser extends Component {
    constructor() {
        super();
        this.state = {
            nameFirst: '',
            nameLast: '',
            phone: '',
            userPicture: '',
            userEmail:'',
        }
    }

    async componentDidMount() {
        const url = 'https://api.randomuser.me/';
        const response = await fetch(url);
        const data = await response.json();
        this.setState({
            nameFirst: data.results[0].name.first, 
            nameLast: data.results[0].name.last,
            phone: data.results[0].phone,
            userPicture: data.results[0].picture.medium,
            userEmail: data.results[0].email,
            userCountry: data.results[0].location.country
        })
    }

    render() {
        return(
            <div>
                <div>
                    <h1>RANDOM USERS</h1>
                    <div className="RandomUserImage">
                        <img src={this.state.userPicture} width={100} alt="userPicture" />
                    </div>
                    <div>
                        <p>{this.state.nameFirst} {this.state.nameLast}</p>
                        <p>{this.state.phone}</p>
                        <p>{this.state.userEmail}</p>
                        <p>{this.state.userCountry}</p>
                    </div>
                    <div className="RandomUsersButtons">
                        <button>NAME</button>
                        <button>PHONE</button>
                        <button>EMAIL</button>
                        <button>COUNTRY</button>
                    </div>
                </div>
            </div>
        ) 
    }
}