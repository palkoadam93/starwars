import React, {Component} from 'react';

class Character extends Component {
    state = {
        name:null,
        image:null
    }

    componentWillReceiveProps(nextProps){
        this.setState({
            name: nextProps.selectedChar.name,
            image: nextProps.selectedChar.image,
        });
    }

    render(){
        return(
            <div>
                {this.state.name && <div>
                    <h2>{this.state.name}</h2>
                    <img src={this.state.image} alt="Nem látszik a kép!" />
                    </div>}
            </div>
        );
    }
}

export default Character;