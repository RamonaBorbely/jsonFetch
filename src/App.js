import { useState, useEffect } from "react";
import ErrorPage from "./components/ErrorPage";
import Form from "./components/Form";
import ListItems from "./components/ListItems";

function App() {
  const API_URL = 'https://jsonplaceholder.typicode.com'
  const [items, setItems] = useState([])
  const [fetchName, setFetchName] = useState('users')
  const [fetchErr, setFetchErr] = useState(null)


  useEffect(() => {
      const fetchData = async() => {
      try {
        const response = await fetch(`${API_URL}/${fetchName}`)
        const data = await response.json()
        if(!response) throw Error()
        setItems(data)
        setFetchErr(null)
      } catch(err) {
        setFetchErr(err.message)
      }

    }

    fetchData()

  }, [fetchName])
    
  return (
    <div className="App">
     {fetchErr && <ErrorPage fetchErr={fetchErr}/>}
     <Form fetchName={fetchName} setFetchName={setFetchName}/>
     <ListItems items={items}/>
    </div>
  );
}

export default App;
