async function httpfetch(url) {
    return window.fetch(new Request(url)).then((response) => {
         if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`)
        }
        return response.text();
    })
}
httpfetch("helptxt").then((response) => {
    console.log(response)
    document.getElementById("helptext").innerText = response
})