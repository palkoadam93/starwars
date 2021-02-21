import React, {Component} from 'react';
import ButtonList from './ButtonList';
import Character from './Character';

class App extends Component {

    state = {
        characters : [
            {
                name:'Darth Vader',
                image: 'TrumpWin.jpg',
                selected:false
            },
            {
                name:'Kylo Ren',
                image:'https://www.google.com/search?q=star+wars+lego+png&client=firefox-b-d&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjjwfmRsObtAhVCr4sKHUf-AX0Q_AUoAXoECBIQAw&biw=1536&bih=750#imgrc=l44sxK6FMYIlTM',
                selected:false
            },
            {
                name:'Yoda',
                image:'https://www.google.com/search?q=star+wars+lego+png&client=firefox-b-d&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjjwfmRsObtAhVCr4sKHUf-AX0Q_AUoAXoECBIQAw&biw=1536&bih=750#imgrc=b0EkVtIF3-tH-M',
                selected:false
            },
            {
                name:'Rey',
                image:'https://www.google.com/search?q=star+wars+lego+png&client=firefox-b-d&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjjwfmRsObtAhVCr4sKHUf-AX0Q_AUoAXoECBIQAw&biw=1536&bih=750#imgrc=zUPJuQ8nEtsYBM',
                selected:false
            }
        ]
    }

    onClickHandle = (index) => _ => {
        this.setState({
            characters:this.state.characters.map((char,charIndex)=>
            ((charIndex===index) ? ({...char,selected:true}) : ({...char,selected:false}))
            )
        });
    }

    render(){
        return(
            <div>
                <ButtonList onClickFunc={this.onClickHandle} characters={this.state.characters}/>
                <Character selectedChar={this.state.characters.find(char => char.selected)} />
            </div>
        );
    }
}

export default App;