const initialState = {
    helleviSum: 0,
    loading: false,
};

const helleviDonationReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SMALL-HELLEVI-DONATION':
            return {
                ...state,
                helleviSum: state.helleviSum + action.payload,
                loading: false,
            };

        case 'MIDDLE-HELLEVI-DONATION':
            return {
                ...state,
                helleviSum: state.helleviSum + action.payload,
                loading: false,
            };

        case 'BIG-HELLEVI-DONATION':
            return {
                ...state,
                helleviSum: state.helleviSum + action.payload,
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

export default helleviDonationReducer;
