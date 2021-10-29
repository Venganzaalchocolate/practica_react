import cliente from "./cliente"

const tagsURL = '/api/v1/adverts/tags'

export const getTagsUrl= ()=>{
    const url= `${tagsURL}`
    return cliente.get(url)
}