import React from 'react';
import CharacterList from './CharacterList';
import HerosList from './HerosList';
import '../styles/index.css';
import SquadStats from '../components/SquadStats';

class App extends React.Component{
    render(){
        return(
            <div className="App">
                <h1>Super Squad</h1>
                <div className="row">
                <div className="col-md-4">
                    <CharacterList/>
                </div>
                <div className="col-md-4">
                    <HerosList/>
                </div>
                <div className="col-md-4">
                    <SquadStats/>
                </div>
                </div>
            </div>
        )
    }
}



export default App;