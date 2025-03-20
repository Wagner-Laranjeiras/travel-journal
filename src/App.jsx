import './App.css'
import Header from './components/Header'
import Entry from './components/Entry'
import journalEntriesData from './data'

function App() {
  const journalEntries = journalEntriesData.map( entry => (
    <Entry 
      key = { entry.id }
      { ...entry }
    />
  ))

  console.log("Entries: ", journalEntries );

  return (
    <>
      <Header />
      <main>
        { journalEntries }
      </main>   
    </>
  )
}

export default App
