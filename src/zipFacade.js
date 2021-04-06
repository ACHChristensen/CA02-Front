//URL="https://ipwithme.com/ca2/api/zipcodes";
URL = "http://localhost:3333/api/zipcodes";


const zipFacade = {

    getAllZipcodes,


}

function getAllZipcodes() {
    return fetch(URL)
        .then(handleHttpErrors)
}

function handleHttpErrors(res) {
    if (!res.ok) {
        return Promise.reject({ status: res.status, fullError: res.json() })
    }
    return res.json();

}



export default zipFacade