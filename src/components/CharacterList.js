import React from 'react';
import {connect} from 'react-redux';
import {addCharacterById} from '../action/rootAction';
import '../styles/index.css';

class CharacterList extends React.Component{
    render(){
        console.log(this.props)
        return(
            <div>
                <h4>Characters</h4>
                <ul className="list-group">
                    {this.props.characters.map(item=>{
                        return (<li key={item.id} className="list-group-item"> <div className="line">{item.name}</div>
                        <div className="box line" onClick={()=>this.props.listener(item.id)}>+</div></li>)
                    })}
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        characters:state.characters
    }
}

function mapDispatchToProps(dispatch){
    return {
        listener:(id)=>dispatch(addCharacterById(id))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CharacterList);