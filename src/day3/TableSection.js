import { useState } from "react"
import withAuthorization from "../components/withAuthorization"
import CustomTable from "./components/CustomTable"

const tableData = [
  {
     id: 1,
     name: "John",
     department: "IT",
     degree: "B.Tech",
     doj: "2022-01-01",
  },
  {
     id: 2,
     name: "Jane",
     department: "ECE",
     degree: "B.Tech",
     doj: "2022-01-01",
  },
  {
     id: 3,
     name: "Random Jane",
     department: "ECE",
     degree: "B.Tech",
     doj: "2022-01-01",
  },
  {
     id: 4,
     name: "Test Jane",
     department: "ECE",
     degree: "B.Tech",
     doj: "2022-01-01",
  },
  {
     id: 5,
     name: "Guest Jane",
     department: "ECE",
     degree: "B.Tech",
     doj: "2022-01-01",
  },
  {
     id: 6,
     name: "Good Jane",
     department: "ECE",
     degree: "B.Tech",
     doj: "2022-01-01",
  },
]

const TableSection = () => {
  const [rows, setRows] = useState(tableData)
  const [formData, setFormData] = useState({})
  
  const handleAddFormSubmit = (e) => {
    e.preventDefault();
    console.log(formData)
    setRows(oldState => {
      return [
        ...oldState,
        {
          id: oldState.length + 1,
          ...formData
        }
      ]
    })
  }

  const handleInputChange = e => {
    console.log(e.target.name, e.target.value)
    setFormData(oldState => ({
      ...oldState,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <div>
      <form onSubmit={handleAddFormSubmit}>
        <input type="text" name="name" onChange={handleInputChange} placeholder='name' />
        <input type="text" name="department" onChange={handleInputChange} placeholder='department' />
        <input type="text" name="degree" onChange={handleInputChange} placeholder='degree' />
        <input type="date" name="doj" onChange={handleInputChange} placeholder='doj' />
        {/* default behavior will be submit */}
        <button>Add</button>
      </form>
      <CustomTable
        data={rows}
      />
    </div>
  )
}

export default withAuthorization(TableSection);