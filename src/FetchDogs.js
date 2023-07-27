import { Component } from "react";
import loading from './loading.gif'

export class FetchDogs extends Component {
    state = { 
        url: ''

     } 

        async componentDidMount() {
            const url = 'https://random.dog/woof.json';
            const response = await fetch(url);
            const data = await response.json();
            this.setState({
                url: data.url
            })

        }
    render() { 
        return (
            <div>
            { !this.state.url ? <img src={loading} width={300} alt="loading..."></img> : 
                <div>
                    <h1>Dogs</h1>
                    <img src={this.state.url} width={250} alt="dogs" />
                </div>
            }
            </div>
        );
    }
}


