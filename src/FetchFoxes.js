import { Component } from "react";

class FetchFoxes extends Component {
    state = { 
        image: 'https://img.freepik.com/free-photo/closeup-shot-red-fox-vulpes-vulpes-wild_181624-57131.jpg?size=626&ext=jpg&ga=GA1.2.1134977234.1677609499&semt=sph'
    }
    
    async componentDidMount() {
        const url = 'https://randomfox.ca/floof/';
        const response = await fetch(url);
        const data = await response.json();
        this.setState ({ 
            image: data.image
        }) 
    }


    render() { 
        return (
            <div>
                <h1>Foxes</h1>
                <img src={this.state.image} width={250} alt="fox" />
            </div>
        );
    }
}


export default FetchFoxes;