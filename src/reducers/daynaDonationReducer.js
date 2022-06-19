const initState = {
    sum: 0,
    loading: false,
};

const daynaDonationReducer = (state = initState, action) => {
    switch (action.type) {
        case 'SMALL-DAYNA-DONATION':
            return {
                ...state,
                sum: state.sum + action.payload,
                loading: false,
            };

        case 'MIDDLE-DAYNA-DONATION':
            return {
                ...state,
                sum: state.sum + action.payload,
                loading: false,
            };

        case 'BIG-DAYNA-DONATION':
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

export default daynaDonationReducer;
