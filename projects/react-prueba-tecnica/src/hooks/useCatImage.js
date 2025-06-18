import { useEffect, useState } from "react"
import { getImageFact } from "../services/facts"

// Custom Hook
export function useCatImage({ fact }) {
    const [imageUrl, setImageUrl] = useState()
    // Obtener la imagen con la segunda api
    useEffect(() => {
        
        if(!fact) return 

        const threeFirstWords = fact.split(' ',3).join(' ')
        getImageFact(threeFirstWords).then(newUrl => setImageUrl(newUrl))

    }, [fact])

    return { imageUrl }
}