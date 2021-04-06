//URL="https://ipwithme.com/ca2/api/hobbies";
URL = "http://localhost:3333/api/hobbies";


const hobbyFacade = {

    getAllHobbies


}

function getAllHobbies() {
    return fetch(SERVER_URL + "hobbies")
        .then(handleHttpErrors)

}

function handleHttpErrors(res) {
    if (!res.ok) {
        return Promise.reject({ status: res.status, fullError: res.json() })
    }
    return res.json();

}



export default hobbyFacade