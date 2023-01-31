import React, { useState } from 'react'
import './c.css'

export default function App() {
  const [u_input, setU_input] = useState('')
  const [list, setList] = useState([])

  const handler = (e) => {
    e.preventDefault()
    add(u_input)
  }
  const add = (u_input) => {
    if (!u_input) {
      alert('Please type something to add.')
    }
    else {
      //setList(list.concat(u_input))
      setList((olditems) => { return [...olditems, u_input] })
      setU_input('')
    }
  }
  const eventHandle = (event) => {
    setU_input(event.target.value)
  }

  const remove = (index) => {
    const updatedList = (list.filter((itemList, indexList) => {
      return indexList !== index
    }))
    setList(updatedList)
  }


  return (
    <div className='main'>
      <div className='center'>
        <div className='container'>
          <form onSubmit={handler}>
            <label>TO-DO LIST</label>
            <input type="text" value={u_input} onChange={eventHandle} />
            <button>Add</button>
          </form>
        </div>
        <div className='theList'>
          <ul>
            {
              list.map((item, index) => {
                return (
                  <>
                  <ul>
                    <li key={index}>{item}</li>
                    <button onClick={() => {remove(index)}}>Delete</button>
                  </ul>
                  </>
                )
              })
            }
          </ul>
        </div>
      </div>
    </div>
  )
}
