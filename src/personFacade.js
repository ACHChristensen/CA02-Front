//URL="https://ipwithme.com/ca2/api/persons";
URL = "http://localhost:3333/api/persons";

const personFade = {
    getAllPersons,
    getPersonsWithGivenHobby,
    getPersonsFromGivenCity,
    getPersonsByHobby,
    addPerson,
    deletePerson,
    editPerson,
    getPersonById



}

function getAllPersons() {
    const options = makeOptions("GET");
    return fetch(URL, options)
        .then(handleHttpErrors);
}

function getPersonsWithGivenHobby(hobby) {
    const options = makeOptions("GET")
    return fetch(SERVER_URL + "hobby/" + hobby)
        .then(handleHttpErrors)
}

function getPersonsFromGivenCity(city) {
    const options = makeOptions("GET")
    return fetch(SERVER_URL + "city/" + city)
        .then(handleHttpErrors)

}

function getPersonsByHobby(hobby) {
    const options = makeOptions("GET")
    return fetch(SERVER_URL + "count/" + hobby)
        .then(handleHttpErrors)

}

function addPerson(person) {
    const options = makeOptions("POST", person)
    return fetch(SERVER_URL, options)
        .then(handleHttpErrors)

}

function deletePerson(id) {
    const options = makeOptions("DELETE")
    return fetch(SERVER_URL + id, options)
        .then(handleHttpErrors)

}

function editPerson(person, id) {
    const options = makeOptions("PUT", person)
    return fetch(SERVER_URL + id, options)
        .then(handleHttpErrors)
}

function getPersonById(id) {
    const options = makeOptions("GET")
    return fetch(SERVER_URL + "id/" + id)
        .then(handleHttpErrors)
}




function makeOptions(method, body) {
    var opts = {
        method: method,
        headers: {
            "Content-type": "application/json",
            "Accept": "application/json"
        }
    }
    if (body) {
        opts.body = JSON.stringify(body);
    }
    return opts;
}

function handleHttpErrors(res) {
    if (!res.ok) {
        return Promise.reject({ status: res.status, fullError: res.json() })
    }
    return res.json();

}

export default personFade;