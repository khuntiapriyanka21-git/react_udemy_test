import { useState } from "react"

export const ToDoList = () => {
  const [input, setInput] = useState("");
  const [inputs, setInputs] = useState([])
  const AddList = () => {
    if (input.trim() === "") return;
    setInputs([...inputs, input]);
    setInput("");
  }
  return (
    <div>
      <h2>Add Items</h2>
      <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
      <button type="button" onClick={AddList}>Add</button>
      <ul>
        {inputs.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

    </div>
  )
}