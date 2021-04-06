function makeUl(name){
    const list = name.map(function (name){
        return `<li> ${name.email} ${name.firstName} ${name.lastName}</li>`
    })
    const joinedResult = list.join("");
 
    return joinedResult;
}
 
function makeTableRow(name){
    const list = name.map(function (name){
        return `<tr> <td> ${name.email}</td> <td>$${name.firstName}</td> <td>${name.lastName}</td></tr>`
    })
    const tableheaders = "<tr><th>email</th><th>firstName</th><th>lastName</th></tr>"
    const joinedResult = list.join("");
    const finishedtable = tableheaders+joinedResult;
    return finishedtable;
}
/*
function makeSingleTableRow(name){
    const list = `<tr> <td>${name.id}</td> <td>${name.title}</td> <td>${name.year}</td> <td>${name.actors}</td></tr>`
    const tableheaders = "<tr><th>id</th><th>name</th><th>year</th><th>actors</th></tr>"
    const finishedtable = tableheaders+list;
    return finishedtable;
}*/
/*
document.getElementById("fetchAllMovies").addEventListener("click", function(){
    fetch("/api/movie/all")
        .then(res=>res.json())
        .then(data=> {
            document.getElementById("allMovies").innerHTML=makeTableRow(data);
        })})
document.getElementById("fetchMoviesByID").addEventListener("click", function(){
    let id = document.getElementById("movieID").value;
    fetch("/api/movie/byid/"+ id)
        .then(res=>res.json())
        .then(data=> {
            document.getElementById("movieByID").innerHTML=makeSingleTableRow(data);
        })})
*/