// This module is used to fetch API data from
// our selected random API

async function fetchData() {
    // API URL to fetch data from
    const apiURL = 'https://poetrydb.org/random/1';

    // error handling 
    try {
        // fetch data from source API URL
        const response = await fetch(apiURL);

        // if the response is not ok, throw new error
        if (!response.ok) {
            throw new Error(`${response.status}: ${response.statusText}`);
        }

        // return a promise which resolves with the result 
        // of parsing the body text as JSON
        const data = await response.json();
        return data[0];
    } catch (error) {
        console.error(error);
    }
}

export { fetchData };