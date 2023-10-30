import React from "react";

export function Playlist(props) {
    return (
        <div>
            <p className="returnPlaylists">
                Playlist name: {props.name}
                <br/>
                <br/>
                Number of songs: {props.songCount}
                <br/>
                <br/>
                Open in Spotify: <a href={props.internUrl}>{props.internUrl}</a>
                <br/>
                <br/>
                Open in browser: <a href={props.externUrl}>{props.externUrl}</a>
                <br/>
                <br/>
            </p>
            <img className="cover" id="cover" src={props.coverImageUrl} alt="Cover"/>
            <br/>
            <br/>
        </div>
    )
}