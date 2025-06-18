import { useEffect, useState } from "react"
import { getRandomFact } from "../services/facts"

export function useCatFact() {
    const [fact, setFact] = useState()

    const refreshFact = () => {
        getRandomFact().then(newFact => setFact(newFact))
    }
    // Obtener un fact de la api
    useEffect(refreshFact, [])

    return { fact, refreshFact }
}