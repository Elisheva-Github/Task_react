// export const postProductToServer = (data) => {
//     debugger
//     return fetch('http://localhost:3000/postProduct', {
//         method: 'POST',
//         headers: {
//             Accept: 'application/json',
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//             ...data
//         })
//     });
// }

export const postProductToServer = (productName, img, desc, price) => {
    fetch('http://localhost:3000/postProduct', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            productName, img, desc, price
        })
    });
}