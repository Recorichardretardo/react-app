import { createReducer } from "redux-act";
import { setPostData } from '../../actions/TestCard';


const initialState = {
    postData: []
}

const TestCard = createReducer({
    [setPostData] : (state, payload) => ({...state, postData:payload}),

},initialState);

export default TestCard;