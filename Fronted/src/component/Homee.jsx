import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const Homee = () => {
    const [allAlbums, setallAlbum] = useState([])
    const [filteredAlbums, Setfilter] = useState([])
    const [selectedGenre, setSelectedGenre] = useState("")


    const navigate = useNavigate()

    const handleGenreChange = (e) => {
        setSelectedGenre(e.target.value)

    }

    useEffect(() => {
        axios.get("http://localhost:4000/").then((result) => {
            setallAlbum(result.data)
            const filteredAlbums =
                selectedGenre
                    ? allAlbums.filter(album => album.genre === selectedGenre)
                    : allAlbums;
            Setfilter(filteredAlbums)

        }).catch((err) => {
            console.log(err);

        });

    }, [selectedGenre, filteredAlbums])




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
                className="container "
            >
                <div
                    class="container shadow d-flex mt-2"
                >

                    {
                        allAlbums.map((album) => (

                            // <div
                            //     class="container p-2 m-2" style={{ backgroundColor: "#191970", color: "white" }}
                            // >
                            <h6 className='m-3'><label key={album.genre} >
                                <input
                                    type="radio"
                                    name="genre"
                                    value={album.genre}
                                    checked={selectedGenre === album.genre}

                                    onChange={handleGenreChange}
                                />
                                {album.genre}
                            </label></h6>
                            // </div>

                        ))
                    }


                </div>


                {/* second row */}

                <div
                    className="row justify-content-center align-items-center g-2 p-4 "
                >



                    {

                        filteredAlbums.map((alb) => (
                            <div className="col-2 mx-2 my-3 text-start " key={alb._id}>
                                <div className="card  shadow " style={{ backgroundColor: "#ECEFF1", color: "white" }}>
                                    <img className="card-img-top w-100" src={alb.Image} alt="Title" />
                                    <div className="card-body shadow " style={{ backgroundColor: "#191970", color: "white" }}>
                                        <h6 className="card-title">{alb.name}|{alb.artist}</h6>
                                        <p className="card-text">{alb.genre}| {alb.ReleaseYear}</p>
                                        <NavLink
                                            name=""
                                            id=""
                                            className="btn btn-sm px-1 py-0 "
                                            to={`/edit/${alb._id}`}
                                            role="button"
                                            style={{ backgroundColor: "#ECEFF1", color: "black" }}
                                        >📝</NavLink>
                                        <button
                                            type="button"
                                            className="btn btn-sm px-1 py-0  mx-3"
                                            onClick={() => mdelete(alb._id)}
                                            style={{ backgroundColor: "#ECEFF1", color: "black" }}
                                        >
                                            ❌
                                        </button>

                                    </div>


                                </div>




                            </div>

                        ))
                    }








                </div>

            </div >

        </>
    )
}

export default Homee
