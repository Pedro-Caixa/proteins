const URL = "https://jxdn6qxc.api.sanity.io/v2022-03-07/data/query/production?query=*%5B_type%3D%3D%22missaoValores%22%5D%7B%0A++title%2C%0A++description%2C%0A%7D"

window.addEventListener("load", async function() {
    const result = await fetch(URL,{
        method: "GET"
    });
    const json = await result.json()
    const destino = document.querySelector('div.valores')

    for (let i = 0; i < json.result.length; i++) {
        const element = json.result[i];
        const h3 = document.createElement('h3')
        h3.textContent = element.title
        const hr = document.createElement('hr')
        const p = document.createElement('p')
        p.textContent = element.description
        const div = document.createElement('div')
        div.classList.add('valor')

        div.append(h3, hr, p)
        destino.append(div)

    }
});
