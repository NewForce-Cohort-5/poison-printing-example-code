export const PoisonCard = (taco) => {
    console.log(taco)
    return `<p>${taco.commonName}</p>
    <p>Is it fatal? ${taco.fatal}</p>`
}