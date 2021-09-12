import React from "react";
import { connect } from "react-redux";

const SongDetail = ({ song }) => {
  if (!song) {
    return <div>Select a song</div>;
  }
  return (
    <div>
      <h3>Details for:</h3>
      <p>Title: {song.title}</p>
      <p>Dutation: {song.duration}</p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { song: state.SelectedSong };
};

export default connect(mapStateToProps)(SongDetail);
