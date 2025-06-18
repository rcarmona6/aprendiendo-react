import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export default function App() {
  
  const users = [
    {
      name: 'Rene Carmona Martinez',
      userName: 'rcarmona',
      isFollowing: false
    },
    {
      name: 'David Rodriguez Flores',
      userName: 'hrdkss',
      isFollowing: true
    },
    {
      name: 'Pedro Guillermo',
      userName: 'memog',
      isFollowing: false
    },
    {
      name: 'Rolando Rodriguez Rocha',
      userName: 'roro',
      isFollowing: true
    }
  ];

  return (
    <section className="App">
      {
        users.map((user) => {
          const { userName, name, isFollowing} = user;
          return (
            <TwitterFollowCard 
              key={userName}
              userName={userName} 
              initialIsFollowing = {isFollowing}>
              {name}
            </TwitterFollowCard>
          )
        })
      }
      {/* <TwitterFollowCard formatedUsername={formatedUsername} userName="rcarmonamtz" name="Anthony Carmona Villalobos" isFollowing />
      <TwitterFollowCard formatedUsername={formatedUsername} userName="rcarmonamtz" name="Karen Villalobos Sanchez" /> */}
    </section>
  )
}

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
