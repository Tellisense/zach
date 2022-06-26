import { useEffect, useState } from "react";
import "./App.css";
import { apiCall } from "./apicall";

function App() {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    apiCall(setTableData);
  }, []);

  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>username</th>
            <th>email</th>
            <th>city</th>
            <th>zip</th>
            <th>company name</th>
          </tr>
        </thead>
        <tbody>
          {tableData?.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.username}</td>
                <td>{item.email}</td>
                <td>{item.address.city}</td>
                <td>{item.address.zipcode}</td>
                <td>{item.company.name}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
