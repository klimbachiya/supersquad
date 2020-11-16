import React from 'react';
import {connect} from 'react-redux';
import {removeCharacterById} from '../action/rootAction'
import {clearAll} from '../action/rootAction';

class HerosList extends React.Component{
    render(){
        return(
            <div>
                <h4>Heros&nbsp;&nbsp;<button className="btn btn-primary" onClick={()=>this.props.clear()}>ClearAll</button></h4>
                <ul className="list-group">
                    {this.props.heros.map(item=>{
                        return (<li key={item.id} className="list-group-item"> <div className="line">{item.name}</div>
                        <div className="box line" onClick={()=>this.props.remove(item.id)}>⨯</div></li>)
                    })}
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        heros:state.heros
    }
}

function mapDispatchToProps(dispatch){
    return{
        remove:(id)=>dispatch(removeCharacterById(id)),
        clear:()=>dispatch(clearAll())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(HerosList);