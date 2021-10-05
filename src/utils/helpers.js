export const getUrlAddress = (name, value,search) => {
    var address = `?${name}=${value}`
    console.log('search')
    console.log(search)
    if (search.date && search.date != "" && name != "date")
        address += `&date=${search.date}`
    if (search.changer_name && search.changer_name != "" && name != "changer_name")
        address += `&date=${search.changer_name}`
    if (search.title && search.title != "" && name != "title")
        address += `&date=${search.title}`
    if (search.field && search.field != "" && name != "field")
        address += `&date=${search.field}`

    return address


}
