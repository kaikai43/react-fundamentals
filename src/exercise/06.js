// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const inputRef = React.useRef();
  const [username, setUsername] = React.useState(null);
  const handleSubmit = event => {
    event.preventDefault()
    onSubmitUsername(inputRef.current.value)
  }
  const handleChange = event => {
    setUsername(event.target.value.toLowerCase());
  }

  return (
    <form>
      <div>
        <label htmlFor="textInput">Username:</label>
        <input value={username} onChange={handleChange} ref={inputRef} type="text" id="textInput" />
      </div>
      <button type="submit" onSubmit={handleSubmit}>
        Submit
      </button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
