// https://api.github.com/users/izaacAbrams/repos


function getRepos(ghHandle) {
    const options = {
    headers: new Headers({
        key: " " })
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