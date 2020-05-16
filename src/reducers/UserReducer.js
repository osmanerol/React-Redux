import { UPDATE_USER, GET_USER_ERROR } from '../actions/UserAction';

export default function userReducer(state='',action){
    switch(action.type){
      case 'userUpdate':
        return action.payload.user
      case UPDATE_USER :
        return action.payload.user
      case GET_USER_ERROR :
        return action.payload.error
      default:
        return state
    }
}
