// https://api.github.com/users/izaacAbrams/repos
const apiKey = "252ce56616572cd060fc33ed361953e6e21797a7";

function getRepos(ghHandle) {
    const options = {
    headers: new Headers({
        "token": apiKey,
        "Access-Control-Allow-Origin": `*`})
    };
    fetch(`https://api.github.com/users/${ghHandle}/repos`, options)
        .then(response => {
            if(response.ok){
                return response.json();
            }
            throw new Error(response.statusText);
        })
        .then(responseJson => console.log(responseJson))
        .catch(error => {
        $('#js-error-message').text(`Something went wrong: ${error.message}`);
      });
}

function watchForm(){
    $('form').submit(e => {
        e.preventDefault();
        const ghHandle = $('#user-search').val();
        getRepos(ghHandle);
    });
}

$(watchForm);