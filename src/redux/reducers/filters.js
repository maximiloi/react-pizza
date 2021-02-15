const initialState = {  // Значения на момент первого вызова редусера filters в state попадают эти данные
    sortBy: 'popular',
    category: 0
};

const filters = (state = initialState, action) => {
    if (action.type === 'SET_SORT_BY') { // если приходят значениея SET_SORT_BY то выполнить 
        return {
            ...state,
            sortBy: action.payload,
        };
    }
    if (action.type === 'SET_CATEGORY') {
        return {
            ...state,
            sortBy: action.payload,
        };
    }
    return state;
};

export default filters;