export const getUrlAddress = (name, value, search) => {
    var address = `?${name}=${value}`
    if (search.date && search.date !== "" && name !== "date")
        address += `&date=${search.date}`
    if (search.changer_name && search.changer_name !== "" && name !== "changer_name")
        address += `&date=${search.changer_name}`
    if (search.title && search.title !== "" && name !== "title")
        address += `&date=${search.title}`
    if (search.field && search.field !== "" && name !== "field")
        address += `&date=${search.field}`

    return address
}


export const shuffle = (array) => {
    let currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex !== 0) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}
