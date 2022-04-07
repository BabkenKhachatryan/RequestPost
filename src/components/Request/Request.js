import { useEffect } from "react";
import { Link } from "react-router-dom";
import './request.css'

export default function Request({ state }) {
  useEffect(() => {
    const data = {
      firstName: "Babken",
      lastName: "Khachatryan",
      birthDay: "1993.05.02",
      gender: "Male"
    }
    const url = "http://intern-2022.arpify.com/init";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json;",
      },
      body: JSON.stringify(data),
    };
    fetch(url, options)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
  }, []);
  return (
    <div>
      <table>
        <thead>
          <tr>
            <td>First Name</td>
            <td className="user">{state.FirstName}</td>
          </tr>
          <tr>
            <td>Last Name</td>
            <td className="user">{state.LastName}</td>
          </tr>
          <tr>
            <td>BirthDay</td>
            <td className="user">{state.BirthDay}</td>
          </tr>
          <tr>
            <td>Gender</td>
            <td className="user">{state.Gender}</td>
          </tr>
        </thead>
      </table>
      <Link to="/newpage"><button>Page 2</button></Link>
    </div>
  )
}


