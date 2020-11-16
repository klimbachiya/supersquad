export const ADD_CHARACTER='ADD_CHARACTER';
export const REMOVE_CHARACTER='REMOVE_CHARACTER';
export const CLEAR_ALL='CLEAR_ALL';

export function addCharacterById(id){
    const action={
        type:ADD_CHARACTER,
        id
    }
    return action;
}

export function removeCharacterById(id){
    const action={
        type:REMOVE_CHARACTER,
        id
    }
    return action;
}

export function clearAll(){
    const action={
        type:CLEAR_ALL
    }
    return action;
}