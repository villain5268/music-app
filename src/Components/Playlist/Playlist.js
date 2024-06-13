import React from "react";
import "./Playlist.css";
import TrackList from "../TrackList/TrackList";

class Playlist extends React.Component {
  constructor(props) {
    super(props);

    this.handleNameChange = this.handleNameChange.bind(this);
  }

  handleNameChange(event) {
    this.props.onNameChange(event.target.value);
  }

  render() {
    return (
      <div className="Playlist">
        <input onChange={this.handleNameChange} defaultValue={this.props.playlistName} />
        <TrackList tracks={this.props.playlistTracks} isRemoval={true} onRemove={this.props.onRemove} />
        <button className="Playlist-Save" onClick={this.props.onSave}>Save to Spotify</button>
      </div>
    );
  }
}

export default Playlist;
