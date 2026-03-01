import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const Add = () => {

  const [album, setAlbum] = useState({ name: '', artist: '', genre: '', ReleaseYear: '', Image: '' })
  const navigate = useNavigate()
  const handsubmit = (e) => {
    e.preventDefault()
    axios.post("http://localhost:4000/add", album).then((result) => {
      navigate("/")
    }).catch((err) => {
      console.log(err);

    });
  }
  return (
    <>
      <div
        className="container col-6 my-3 p-4 shadow"
      >



        <form onSubmit={handsubmit} className='border bordered p-1 shadow bg-secondary'>
          <div className="card bg-secondary-subtle">

            <div className="card-body">
              <h4 className="card-title">➕ Music Album</h4>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  name="formId1"
                  id="formId1"
                  onChange={(e) => {
                    setAlbum({ ...album, name: e.target.value })
                  }}
                  placeholder=""
                />
                <label for="formId1">Name</label>
              </div>

              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  name="formId1"
                  id="formId1"
                  onChange={(e) => {
                    setAlbum({ ...album, artist: e.target.value })
                  }}
                  placeholder=""
                />
                <label for="formId1">artist</label>
              </div>

              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  name="formId1"
                  id="formId1"
                  onChange={(e) => {
                    setAlbum({ ...album, genre: e.target.value })
                  }}
                  placeholder=""
                />
                <label for="formId1">genre</label>
              </div>

              <div className="form-floating mb-3">
                <input
                  type="Number"
                  className="form-control"
                  name="formId1"
                  id="formId1"
                  onChange={(e) => {
                    setAlbum({ ...album, ReleaseYear: e.target.value })
                  }}
                  placeholder=""
                />
                <label for="formId1">ReleaseYear</label>
              </div>

              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  name="formId1"
                  id="formId1"
                  onChange={(e) => {
                    setAlbum({ ...album, Image: e.target.value })
                  }}
                  placeholder=""
                />
                <label for="formId1">Image</label>
              </div>
              <button
                type="submit"
                className="btn "
                style={{ backgroundColor: "#191970", color: "white" }}
              >
                upload
              </button>


            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default Add
