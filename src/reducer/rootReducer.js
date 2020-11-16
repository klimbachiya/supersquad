import character from '../data/character.json';
import {ADD_CHARACTER} from '../action/rootAction';
import {REMOVE_CHARACTER} from '../action/rootAction';
import {CLEAR_ALL} from '../action/rootAction';
import {combineReducers} from 'redux';

function characters(state=character,action){
    let characters;
    switch(action.type){
        case ADD_CHARACTER:
            characters=state.filter(item=>item.id !== action.id);
            return characters;
        case REMOVE_CHARACTER:
            let c=getCharacter(action.id);
            characters=[...state,c];
            return characters;
        case CLEAR_ALL:
            characters=character;
            return characters;
        default:
            return state;
    }
}

function heros(state=[],action){
    let characters=[];
    switch(action.type){
        case ADD_CHARACTER:
            let c=getCharacter(action.id);
            characters=[...state,c];
            return characters;
        case REMOVE_CHARACTER:
            characters=state.filter(item=>item.id!==action.id)
            return characters;
        case CLEAR_ALL:
            characters=[];
            return characters;
        default:
            return state;
    }
}

function getCharacter(id){
    let c = character.find(item=>item.id==id);
    return c;
}

const rootReducer=combineReducers({
    characters,
    heros
});

export default rootReducer;