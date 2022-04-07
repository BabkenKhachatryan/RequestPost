import React, { useState } from 'react'
import './newpage.css'

export default function NewPage() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthday, setBirthday] = useState("");
  const [gender, setGender] = useState("");
  const [sendFile, setSendFile] = useState("");
  const [file, setFile] = useState();
  const changeFileValue = (e) => {
    const url = URL.createObjectURL(e.target.files[0])
    setFile(url)
  }

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("http://intern-2022.arpify.com/form", {
        method: "POST",
        headers: {
          "Content-Type": "multipart/form-data;",
        },
        body: JSON.stringify({
          name: name,
          lastName: lastName,
          birthday: birthday,
          gender: gender,
          sendFile: sendFile
        }),
      });
      let resJson = await res.json();
      if (res.status === 200) {
        setName("");
        setLastName("");
        setBirthday("");
        setGender("");
        setSendFile()
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <form onSubmit={handleSubmit} className='page2'>
      <input className='name' type="text" placeholder='firstName' name='firstName' />
      <input className='name' type="text" placeholder='lastName' name='lastName' />
      <form action="/action_page.php">
        <input type="date" id="birthday" name="birthday" className='name' />
      </form>
      <input className='name' type="text" placeholder='gender' name="gender" />
      <label htmlFor='file'>
        <input type='file' id='file' onChange={changeFileValue} className='file-input' />
        <img className='addfile' src={File} />
        {
          file && <img src={file} className='fileImg' />
        }

      </label>
      <button type='submit'>Submit</button>
    </form>
  )
}
