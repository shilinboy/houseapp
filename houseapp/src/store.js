
import { createStore, combineReducers } from 'redux';
//历史记录数据
function history(state=[],action){
    switch(action.type){
        case 'addHistory' : 
        for(let i=0; i<state.length; i++){
            if(state[i].id == action.obj.id){
                state.splice(i,1);
                break;
            }
        }
        return [action.obj,...state];

        default: return state;
    }
}

let reducers = combineReducers({
    history
})


const store = createStore(reducers)


export default store