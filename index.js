// function satu() {
//     setTimeout(()=> {
//         console.log("satu");
//     }, 1000)
// }
// function dua() {
//     setTimeout(() => {
//         console.log("dua");
//     }, 2000)
// }
// // Timeout adalah delay di c++ cuman ada diJs (emang java ada :D?)
// // Rumusnya adalah setTimeout(() => {
//     // code
// // }, waktu dalam milisekon)
// function tiga() {
//     setTimeout(() => {
//         console.log("tiga");
//     }, 3000)
// }

// satu()
// dua()
// tiga()

const token = ~~[Math.random() * 12345678]

const pict = ["1. jpg","2. jpg", "3. png"]
function login(username, callback) {
    console.log("Processing user token now");
    setTimeout(() => {
        callback ({token, username})
    }, 200)
    
}
function getUser(token, callback) {
    console.log("Processing API Key now..");
    if(token)
    setTimeout(() => {
        callback ({apiKey: "xKey123"})
    }, 500)
    
}

function getPict(apiKey, callback) {
    if(apiKey)
    setTimeout(() => {
        callback (pict)
    }, 1500)
}

login("Pikek", function(response) {
    const {token} = response
    // const apiKey = getUser(token)
    // console.log({apiKey});
    getUser(token, function(response) {
        const {apiKey} = response
        console.log(response);
        getPict(apiKey, function(response) {
            const {pict} =response
            console.log(pict);
        })
    })
})
