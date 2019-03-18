import {
    ADD_COMMENT,
    EDIT_COMMENT,
    REMOVE_COMMENT,
    THUMB_UP_COMMENT,
    THUMB_DOWN_COMMENT
} from './actions';

export function comments(state = [], action) {
    switch (action.type) {

        case ADD_COMMENT:
            return [...state,
            {
                id: action.id,
                text: action.text,
                votes: 0
            }];

        case REMOVE_COMMENT:
            return state.filter(item => item.id !== action.id);

        case EDIT_COMMENT:
            return state.map(item => {
                if (item.id === action.id) item.text = action.text
                return item;
            });

        case THUMB_UP_COMMENT:
            return state.map(item => {
                if (item.id === action.id) {
                    return { ...item, votes: item.votes + 1 }
                }
            });

        case THUMB_DOWN_COMMENT:
            return state.map(item => {
                if (item.id === action.id) {
                    return { ...item, votes: item.votes - 1 }
                }
            });

        default:
            return state;
    }
};