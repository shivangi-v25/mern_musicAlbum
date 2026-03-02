import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const Editmus = () => {

  const [album, setAlbum] = useState({ name: '', artist: '', genre: '', ReleaseYear: '', Image: '' })
  const navigate = useNavigate()
  const { id } = useParams()

  useEffect(() => {

    axios.get(`http://localhost:4000/${id}`).then((result) => {
      console.log(result.data);
      setAlbum(result.data)
    }).catch((err) => {
      console.log(err);

    });
  }, [])


  const handsubmit = (e) => {
    e.preventDefault()
    axios.put(`http://localhost:4000/edit/${id}`, album).then((result) => {
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
              <h4 className="card-title">📝 Edit</h4>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  name="formId1"
                  id="formId1"
                  value={album.name}
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
                  value={album.artist}
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
                  value={album.genre}
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
                  value={album.ReleaseYear}
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
                  value={album.Image}
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

export default Editmus
