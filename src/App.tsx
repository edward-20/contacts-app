import { useState, useEffect, useCallback } from "react"
import User from './User'
import Contact from "./Contact"
import { Button } from "./components/ui/button"

function App() {
  const [data, setData] = useState<User[]>([])

  const handleClick = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [])
  useEffect(() => {
    let active = true;

    (async () => {
      const response = await fetch('/users.json')
      const data: User[] = await response.json()
      if (active) {
        setData(data)
      }
    })();

    return () => {
      active = false
    }
  }, [])
  return (
    <div className='flex flex-col justify-center items-center w-screen min-h-screen p-20'>
      <div className="flex flex-col justify-center gap-y-8">
        <h1 className="md:text-6xl">Contacts</h1>
        {data.map(user => <Contact user={user}/>)}
        <Button onClick={handleClick}>Go to top</Button>
      </div>
    </div>
  )
}

export default App
