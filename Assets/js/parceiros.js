const URL2 = "https://jxdn6qxc.api.sanity.io/v2022-03-07/data/query/production?query=*%5B_type%3D%3D%22parceiros%22%5D%7B%0A++title%2C%0A++%22imageUrl%22%3A+parceiros_image.asset-%3Eurl%2C%0A%7D"

window.addEventListener("load", async function() {
    const result = await fetch(URL2,{
        method: "GET"
    });
    const json = await result.json()
    const destino = document.querySelector('div.Parceiros')

    for (let i = 0; i < json.result.length; i++) {
        const element = json.result[i];
        const img = document.createElement('img')
        img.src = element.imageUrl
        img.alt = `Imagem do parceiro ${element.title}`
        destino.append(img)

    }
});