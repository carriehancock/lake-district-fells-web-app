import {useEffect, useState} from 'react'

const EntriesPage = () => {
  const [entries, setEntries] = useState([])

  useEffect(() => {
    const fetchEntries = async () => {
      const response = await fetch('http://localhost:5050/entries')
      const data = await response.json()

      setEntries(data)
    }

    fetchEntries()
  }, [])

  return (
    <main>
      <h1>Entries page</h1>

      <div>
        {entries.map(entry => <article key={entries.id}>{entries.dateClimbed}</article>)}
      </div>
    </main>
  )
}

export default EntriesPage