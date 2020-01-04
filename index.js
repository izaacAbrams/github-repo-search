// https://api.github.com/users/izaacAbrams/repos
const apiKey = "252ce56616572cd060fc33ed361953e6e21797a7";

function getRepos(ghHandle) {
    const options = {
    headers: new Headers({
        "Authorization": apiKey })
    };
    fetch(`https://api.github.com/users/${ghHandle}/repos`, options)
        .then(response => {
            if(response.ok){
                return response.json();
            }
            throw new Error(response.statusText);
        })
        .then(responseJson => displayResults(responseJson))
        .catch(error => {
        $('#js-error-message').text(`Something went wrong: ${error.message}`);
      });
}

function displayResults(responseJson) {
    $('.repo-results').empty();

    for(let i = 0; i < responseJson.length; i++){
        $('.repo-results').append(
            `<li><h2>${responseJson[i].name}</h2> 
            <a href="${responseJson[i].html_url}"><p>Link</p></a></li>`)
        console.log("working")
    }
    $('.result-page').removeClass('hidden');    
    console.log(responseJson);
    console.log(responseJson[1].url)
}

function watchForm(){
    $('form').submit(e => {
        e.preventDefault();
        const ghHandle = $('#user-search').val();
        getRepos(ghHandle);
    });
}

$(watchForm);