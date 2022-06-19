export function loading() {
    return {
        type: 'LOADING',
    };
}

export function smallSandraDonation() {
    return { type: 'SMALL-SANDRA-DONATION', payload: 5 };
}

export function middleSandraDonation() {
    return { type: 'MIDDLE-SANDRA-DONATION', payload: 10 };
}
export function bigSandraDonation() {
    return { type: 'BIG-SANDRA-DONATION', payload: 100 };
}

export function smallHelleviDonation() {
    return { type: 'SMALL-HELLEVI-DONATION', payload: 5 };
}
export function middleHelleviDonation() {
    return { type: 'MIDDLE-HELLEVI-DONATION', payload: 10 };
}
export function bigHelleviDonation() {
    return { type: 'BIG-HELLEVI-DONATION', payload: 100 };
}

export function smallDaynaDonation() {
    return { type: 'SMALL-DAYNA-DONATION', payload: 5 };
}
export function middleDaynaDonation() {
    return { type: 'MIDDLE-DAYNA-DONATION', payload: 10 };
}
export function bigDaynaDonation() {
    return { type: 'BIG-DAYNA-DONATION', payload: 100 };
}
// export function smallDonationAction() {
//     return (dispatch) => {
//         smallDonation(loading());
//         setTimeout(() => {
//             dispatch(smallDonation());
//         }, 2000);
//     };
// }
