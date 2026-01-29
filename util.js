// Just copy and paste where you need a function

async function httpfetch(url) {
    return window.fetch(new Request(url)).then((response) => {
         if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`)
        }
        return response.text();
    })
}