import { useState, useEffect } from 'react'
import './App.css'

const FollowMouse = () => {
  const [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState({x:0, y:0})

  useEffect(() => {
    console.log('efecto', {enabled})
    
    const handleMove = (event) => {
      const { clientX, clientY } = event
      console.log('handleMove', {clientX, clientY})
      setPosition({x: clientX, y: clientY })
    }

    if(enabled) {
      window.addEventListener('pointermove', handleMove)
    }
    
    // cleanup
    return () => {
      console.log('cleanup')
      window.removeEventListener('pointermove', handleMove)
    }
    // const handleMouseMove = (event) => {
    //   const x = event.clientX
    //   const y = event.clientY
    //   console.log(`Mouse moved to: ${x}, ${y}`)
    // }

    // window.addEventListener('mousemove', handleMouseMove)

    // return () => {
    //   window.removeEventListener('mousemove', handleMouseMove)
    // }
  }
  , [enabled])

  return (
    <>
      <div style={{ 
        position: 'absolute',
        backgroundColor: '#09F',
        borderRadius: '50%',
        opacity: '0.8',
        pointerEvents: 'none',
        left: '-20px',
        top: '-20px',
        width: '40px',
        height: '40px',
        transform: `translate(${position.x}px, ${position.y}px)` 
      }}/>
      <button onClick={() => setEnabled(!enabled)}>
        { enabled ? 'Desactivar' : 'Activar'} seguir puntero
      </button>
    </>
  )
}

function App() {
  const [mounted, setMounted] = useState(true)

  return (
    <main>
      { mounted && <FollowMouse/> }
      <br/><br/>
      <button onClick={() => setMounted(!mounted)}>Toggle mounted FollowMouse</button>

    </main>
  )
}

export default App
