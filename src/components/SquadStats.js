import React from 'react';
import {connect} from 'react-redux';

class SquadStats extends React.Component{
    strength(){
        let strength=0;
        this.props.heros.forEach(element => {
            strength += element.strength
        });
        return strength;
    }
    intelligence(){
        let intelligence=0;
        this.props.heros.forEach(element => {
            intelligence += element.intelligence
        });
        return intelligence;
    }
    speed(){
        let speed=0;
        this.props.heros.forEach(element => {
            speed += element.speed
        });
        return speed;
    }
    render(){
        return(
            <div>
                <h4>Squad Stats</h4>
                <ul className="list-group">
                    <li className="list-group-item">Overall Strength: {this.strength()}</li>
                    <li className="list-group-item">Overall Intelligence: {this.intelligence()}</li>
                    <li className="list-group-item">Overall Speed: {this.speed()}</li>
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        heros:state.heros
    }
}

export default connect(mapStateToProps,null)(SquadStats);