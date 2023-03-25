import { useEffect, useState } from 'react';
import './CustomTable.css'

/**
 * data = [
 * {
 *    id: 1,
 *    name: "John",
 *    department: "IT",
 *    degree: "B.Tech",
 *    doj: "2022-01-01",
 * },
 * {
 *    id: 1,
 *    name: "John",
 *    department: "IT",
 *    degree: "B.Tech",
 *    doj: "2022-01-01",
 * },
 * ...rest
 * ]
 */

const CustomTable = ({ data=[] }) => {
  const [rows, setRows] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(2);

  // triggers the function when the component is mounted
  // also when data prop changes
  useEffect(() => {
    handleSearchInput(searchText)
    // setRows(data);
  }, [data])

  const handleSearchInput = (val) => {
    // filter if the name attribute contains the search text
    // use the actual source of the data provided to this component
    const filteredRows = data.filter((item) => {
      return `${item.name} ${item.department} ${item.degree}`.toLowerCase().includes(val.toLowerCase())
    })

    setSearchText(val)
    setRows(filteredRows)
  }

  return (
    <div style={{ padding: 20 }}>
      <input
        style={{ padding: 20, marginTop: 20, display: 'inline-block' }}
        type="text"
        placeholder='Search...'
        value={searchText}
        onChange={e => handleSearchInput(e.target.value)} />
      <button onClick={() => handleSearchInput('')}>Clear search</button>
      <table className='custom-table'>
        <thead>
          <tr><th>ID</th><th>Name</th><th>Department</th><th>Degree</th><th>DOJ</th></tr>
        </thead>
        <tbody>
          {rows?.slice((currentPage-1)*rowsPerPage, rowsPerPage*currentPage).map?.(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.department}</td>
              <td>{item.degree}</td>
              <td>{item.doj}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h3>Page {currentPage} of {Math.ceil(rows.length/rowsPerPage)}</h3>
      <div>
        <button onClick={() => setCurrentPage(v => v-1)} disabled={currentPage-1 === 0}>Prev Page</button>
        {currentPage}
        <button onClick={() => setCurrentPage(v => v+1)} disabled={currentPage === Math.ceil(rows.length/rowsPerPage)}>Next Page</button>
      </div>
      <div>
        <select onChange={e => setRowsPerPage(Number(e.target.value))}>
          <option value="2">show 2 per page</option>
          <option value="4">show 4 per page</option>
        </select>
        </div>
    </div>
  )
}

export default CustomTable;

