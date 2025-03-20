import './App.css'
import Header from './components/Header'
import Entry from './components/Entry'
import journalEntriesData from './data'

function App() {
  const journalEntries = journalEntriesData.map( entry => (
    <Entry 
      key = { entry.id }
      imgSrc = { entry.img.src }
      imgAlt = { entry.img.alt }
      title = { entry.title }
      country = { entry.country }
      googleMapsLink= { entry.googleMapsLink }
      dates= { entry.dates }
      text = { entry.text }
    />
  ))

  console.log("Entries: ", journalEntries );

  return (
    <>
      <Header />
      { journalEntries }
    </>
  )
}

export default App
