import { getTags } from "../api/service";

export async function tags (){
    try {
        const tags=await getTags()
        return tags
    } catch (error) {
        return error
    }
}

