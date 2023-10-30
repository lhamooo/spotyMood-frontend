import React from "react";

export function Tracks(props) {
    return (

        <p className="returnTracks">
            Song name: {props.name}
            <br/>
            <br/>
            Artist: {props.artist}
            <br/>
            <br/>
            Length of song: {props.length}seconds
            <br/>
            <br/>
            Open in Spotify: <a href={props.internUrl}>{props.internUrl}</a>
            <br/>
            <br/>
            Open in browser: <a href={props.externUrl}>{props.externUrl}</a>
            <br/>
            <br/>
            <br/>
            <br/>
        </p>
    )
}