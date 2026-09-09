// The hello page: calls the backend's /health endpoint and shows the result.
import { useEffect, useState } from 'react'

export default function App() {
  const [backendMessage, setBackendMessage] = useState('Checking...')

  useEffect(() => {
    fetch('/api/health')
      .then((response) => response.json())
      .then((data) => setBackendMessage(data.message))
      .catch(() => setBackendMessage('Could not reach the backend :('))
  }, [])

  return (
    <main style={{ fontFamily: 'sans-serif', textAlign: 'center', marginTop: '4rem' }}>
      <h1>Hello, world!</h1>
      <p>This is the frontend.</p>
      <p>
        Backend says: <strong>{backendMessage}</strong>
      </p>
    </main>
  )
}
