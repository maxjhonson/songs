import React from "react";
import actions from "../actions";
import SongDetail from "./SongDetail";
import SongList from "./SongList";

function App(props) {
  return (
    <div className="ui container grid">
      <div className="ui row">
        <div className="column eight wide">
          <SongList />
        </div>
        <div className="column eight wide">
          <SongDetail />
        </div>
      </div>
    </div>
  );
}

export default App;
