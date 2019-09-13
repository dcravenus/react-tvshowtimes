import React from "react";
import logo from "./logo.svg";
import "./App.css";

// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const showsWrapperStyles = css`
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;

  scroll-snap-type: x mandatory;
`;

const cardStyles = css`
  display: inline-block;
  border-style: solid 1px;
  width: 100vw;
  height: 100vh;
  background: moccasin;

  scroll-snap-align: start;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    margin-top: 20px;
  }

  div.grid-wrapper {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr min-content;
    height: 100%;
  }

  div.text-wrapper {
    margin: 20px 20px 50px;
    text-align: left;
  }

  p.latest-episode-title {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    width: calc(100vw - 40px);
  }
`;

const ShowCard = ({ showData }) => {
  return (
    <div css={cardStyles}>
      <div className="grid-wrapper">
        <img src={showData.posterUrl}></img>
        <div className="text-wrapper">
          <p>Latest Episode</p>
          <p className="latest-episode-title">{showData.currentEpisode.title}</p>
        </div>
      </div>
    </div>
  );
};

function App() {
  const [shows, setShows] = React.useState([]);

  const fetchShow = async id => {
    const response = await fetch(".netlify/getShow/" + id);

    if (response.ok) {
      console.log(response.data);
      setShows([response.data]);
    }
  };

  React.useEffect(() => {
    fetchShow("tt2861424");
  }, []);

  return (
    <div className="App">
      <div className="shows-wrapper" css={showsWrapperStyles}>
        {shows.map(show => {
          return <ShowCard key={show.id} showData={show}></ShowCard>;
        })}
      </div>
    </div>
  );
}

export default App;
