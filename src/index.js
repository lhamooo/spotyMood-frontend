import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Logo from './spotifyLogo.png'
import axios from 'axios';
import {Playlist} from "./playlists";
import {Tracks} from "./tracks";

const TYPE = {
    PLAYLISTS: "playlists",
    TRACKS: "tracks"
}


function SpotifySearcher() {
    const [type, setType] = useState("playlists");
    const [limit, setLimit] = useState("5");
    const [mood, setMood] = useState("sad");
    const [response1, setResponse] = useState("");
    let renders = renderPlaylist();

    function handleChange(event) {

        if (event.target.name === "type") {
            setType(event.target.value)
        }
        if (event.target.name === "limit") {
            setLimit(event.target.value)
        }
        if (event.target.name === "mood") {
            setMood(event.target.value)
        }
    }

    function handleSubmit() {
        axios.get('/' + type + '?limit=' + limit + '&q=' + mood)
            .then(function (response) {
                setResponse(response.data);
                console.log("Heeellloo :" + response.data )
            })
    }

    const {PLAYLISTS, TRACKS} = TYPE;

    function handleRender() {
        if (type === PLAYLISTS) {
            return renderPlaylist();
        } else if (type === TRACKS) {
             return renderTrack();
        }else{
            return(<p> You have to enter either "playlists" or "tracks"! </p>)
        }

        return null
    }

    function renderPlaylist() {
        const playlists = []
        for (const playlist of response1) {
            playlists.push(<Playlist
                key={playlist.name}
                name={playlist.name}
                songCount={playlist.songCount}
                internUrl={playlist.internUrl}
                externUrl={playlist.externUrl}
                coverImageUrl={playlist.coverImageUrl}
            />)
        }
        return playlists
    }

    function renderTrack() {
        const tracks = []
        for (const track of response1) {
            tracks.push(<Tracks
                key={track.name}
                name={track.name}
                artist={track.artist}
                internUrl={track.internUrl}
                externUrl={track.externUrl}
                length={track.length}
            />)
        }
        return tracks
    }

    //console.log(renderPlaylist());
    console.log(renders);

    return (

        <div>
            <h1> Spotify searcher </h1>
            <img id="logo" src={Logo} alt="spotify Logo"/>
            <form onSubmit={handleSubmit}>
                <label>
                    How is your mood today? :
                </label>
                <input id="mood" name="mood" className="mood" type="text" value={mood} onChange={handleChange}/>
                <label>
                    <br/>
                    What do you want to look for?
                </label>
                <input id="type" name="type" className="type" type="text" value={type} onChange={handleChange}/>
                <br/>
                <label>
                    How many search results do you want to get? (not more than 50!):
                </label>
                <input id="limit" name="limit" className="limit" type="text" value={limit} onChange={handleChange}/>
                <br/>
                <input className="submitButton" type="button" value="Submit" onClick={handleSubmit}/>
            </form>
            {handleRender()}
        </div>
    );
}

ReactDOM.render(
    <SpotifySearcher/>,
    document.getElementById('root')
);

