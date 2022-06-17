export function loading() {
    return {
        type: 'LOADING',
    };
}

export function smallDonation() {
    return { type: 'SMALL-DONATION', payload: 5 };
}

export function middleDonation() {
    return { type: 'MIDDLE-DONATION', payload: 10 };
}
export function bigDonation() {
    return { type: 'BIG-DONATION', payload: 100 };
}

export function smallDonationAction() {
    return (dispatch) => {
        smallDonation(loading());
        setTimeout(() => {
            dispatch(smallDonation());
        }, 2000);
    };
}
