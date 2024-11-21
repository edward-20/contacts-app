import { useState, useEffect } from "react"
import User from './User'
import Contact from "./Contact"

function App() {
  const [data, setData] = useState<User[]>([])

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
  // sort by name
  // sort by username
  // sort by company
  return (
    <div className='flex flex-col justify-center items-center w-screen min-h-screen p-20'>
      <div className="flex flex-col justify-center gap-y-8">
        <h1 className="md:text-6xl">Contacts</h1>
        {data.map(user => <Contact user={user}/>)}
      </div>
    </div>
  )
}

export default App
