const initState = {
    sum: 0,
    loading: false,
};

const sandraDonationReducer = (state = initState, action) => {
    switch (action.type) {
        case 'SMALL-SANDRA-DONATION':
            return {
                ...state,
                sum: state.sum + action.payload,
                loading: false,
            };

        case 'MIDDLE-SANDRA-DONATION':
            return {
                ...state,
                sum: state.sum + action.payload,
                loading: false,
            };

        case 'BIG-SANDRA-DONATION':
            return {
                ...state,
                sum: state.sum + action.payload,
                loading: false,
            };

        case 'LOADING':
            return {
                ...state,
                loading: true,
            };
        default:
            return state;
    }
};

export default sandraDonationReducer;
