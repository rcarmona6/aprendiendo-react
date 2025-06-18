import { useCatImage } from "./hooks/useCatImage"
import { useCatFact } from "./hooks/useCatFact"


export function App () {

    const { fact, refreshFact } = useCatFact()
    const { imageUrl } = useCatImage({ fact })

    const handleClick = () => {
        // getRandomFact().then(setFact)
        // getRandomFact().then(newFact => setFact(newFact))
        refreshFact()
    }

    return (
        <main>
            <h1>App Gatos</h1>

            <button onClick={handleClick}>New Fact</button>

            { fact && <p>{fact}</p> }
            { imageUrl && <img src={imageUrl} alt={`Image extracted using api`}></img>}
        </main>
    )
}