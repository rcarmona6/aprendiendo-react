
// No se deben pasar dependencias de React como useState 
export const getRandomFact = () => {
    return fetch('https://catfact.ninja/fact')
    .then(res => res.json())
    .then(data =>  {
        const { fact } = data
        return fact
    })
}

export const getImageFact = (fact) => {
    return fetch(`https://cataas.com/cat/says/${fact}?size=50&color=red&json=true`)
        .then(res => res.json())
        .then(response => {
            console.log(response)
            const { url } = response
            return url
        })
}