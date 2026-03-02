import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const Homee = () => {
    const [allAlbums, setallAlbum] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        axios.get("http://localhost:4000/").then((result) => {
            setallAlbum(result.data)
        }).catch((err) => {
            console.log(err);

        });
    }, [])

    const mdelete = (id) => {
        console.log(id);
        axios.delete(`http://localhost:4000/delete/${id}`).then((result) => {
            setallAlbum((allAlbums) => allAlbums.filter(a => a._id !== id))
        }).catch((err) => {

        });
    }

    return (
        <>
            <div
                className="container"
            >
                <div
                    className="row justify-content-center align-items-center g-2"
                >
                    {

                        allAlbums.map((alb) => (
                            <div className="col-2  mx-3" key={alb._id}>
                                <div className="card p-1 shadow " style={{ backgroundColor: "#ECEFF1", color: "white", height: "170px", width: "230px" }}>
                                    <img className="card-img-top" src={alb.Image} alt="Title" />
                                    <div className="card-body shadow rounded" style={{ backgroundColor: "#191970", color: "white" }}>
                                        <h6 className="card-title">{alb.name}|{alb.artist}</h6>
                                        <p className="card-text">{alb.genre}| {alb.ReleaseYear}</p>
                                        <NavLink
                                            name=""
                                            id=""
                                            className="btn btn-sm "
                                            to={`/edit/${alb._id}`}
                                            role="button"
                                            style={{ backgroundColor: "#ECEFF1", color: "black" }}
                                        >Edit</NavLink>
                                        <button
                                            type="button"
                                            className="btn btn-sm  mx-3"
                                            onClick={() => mdelete(alb._id)}
                                            style={{ backgroundColor: "#ECEFF1", color: "black" }}
                                        >
                                            delete
                                        </button>

                                    </div>


                                </div>




                            </div>

                        ))
                    }

                </div>

            </div>

        </>
    )
}

export default Homee
