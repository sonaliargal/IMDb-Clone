import React, { useEffect, useState } from "react"
import "./actor.css"
import { useParams } from "react-router-dom"
import img from "./poster.avif"
import img2 from "./img1.jpg"
import { Link } from "react-router-dom"

const Actor = () => {
    const [currentMovieDetail, setMovie] = useState()
    const { id } = useParams()

    useEffect(() => {
        getData()
        window.scrollTo(0, 0)
    }, [])

    const getData = () => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
            .then(res => res.json())
            .then(data => setMovie(data))
    }

    return (
        <div className="movie">
            <div className="movie__intro">
                <img className="movie__backdrop" src={img2} />
            </div>
            <div className="movie__detail">
                <div className="movie__detailLeft">
                    <div className="movie__posterBox">
                        <img className="movie__poster" src={img} />
                    </div>
                </div>
                <div className="movie__detailRight">
                    <div className="movie__detailRightTop">
                        <div className="movie__name">Arjun kapoor</div>
                        <div className="movie__tagline">{currentMovieDetail ? currentMovieDetail.tagline : ""}</div>
                        <div className="movie__rating">
                            {/* {currentMovieDetail ? currentMovieDetail.vote_average: ""} <i class="fas fa-star" /> */}
                            <span className="movie__voteCount">123 moives</span>
                        </div>
                        <div className="movie__runtime">324 songs </div>

                        <div className="movie__genres">

                        </div>
                        <div className="movie__genres">


                            <span className="movie__genre"><a href="https://en.wikipedia.org/wiki/Arjun_Kapoor" style={{color:"white"}}>Contact me</a></span>


                        </div>
                    </div>
                    <div className="movie__detailRightBottom">
                        <div className="synopsisText">Synopsis</div>
                        <div>Arjun Kapoor (born 26 June 1985) is an Indian actor working in Hindi films.[2][3] Born to the Surinder Kapoor family, he is the son of film producer Boney Kapoor and Mona Shourie. Kapoor made his acting debut in 2012 with romance Ishaqzaade which was commercially successful and earned him several awards including Zee Cine Awards and Stardust Award for Superstar of Tomorrow – Male.

                            He then rose to more box office pull in 2014 with the highly successful films Gunday and 2 States. Since then, all of his subsequent films flopped at the box office except the romance Ki & Ka (2016), leading to a long setback in his career.</div>
                    </div>

                </div>
            </div>
            <div className="movie__links">
                <div className="movie__heading">Useful Links</div>
                {
                    currentMovieDetail && currentMovieDetail.homepage && <a href={currentMovieDetail.homepage} target="_blank" style={{ textDecoration: "none" }}><p><span className="movie__homeButton movie__Button">Homepage <i className="newTab fas fa-external-link-alt"></i></span></p></a>
                }
                {
                    currentMovieDetail && currentMovieDetail.imdb_id && <a href={"https://www.imdb.com/title/" + currentMovieDetail.imdb_id} target="_blank" style={{ textDecoration: "none" }}><p><span className="movie__imdbButton movie__Button">IMDb<i className="newTab fas fa-external-link-alt"></i></span></p></a>
                }
            </div>
            
            
        </div>
    )
}

export default Actor