import React from "react";
import Event from "./Event";
import "../styles/Calendar.css";

const Calendar = () => {
  const colors = ["blue", "purple", "green", "orange", "red"];
  const albums = [
    {
      title: "Random Access Memories",
      artist: "Daft Punk",
      year: "2013",
      cover: "https://media.senscritique.com/media/000016409740/source_big/random_access_memories.jpg"
    },
    {
      title: "Dark Side of the Moon",
      artist: "Pink Floyd",
      year: "1973",
      cover: "https://upload.wikimedia.org/wikipedia/en/3/3b/Dark_Side_of_the_Moon.png"
    },
    {
      title: "Thriller",
      artist: "Michael Jackson",
      year: "1982",
      cover: "https://upload.wikimedia.org/wikipedia/en/5/55/Michael_Jackson_-_Thriller.png"
    },
    {
      title: "Abbey Road",
      artist: "The Beatles",
      year: "1969",
      cover: "https://upload.wikimedia.org/wikipedia/en/4/42/Beatles_-_Abbey_Road.jpg"
    },
    {
      title: "Back in Black",
      artist: "AC/DC",
      year: "1980",
      cover: "https://2.bp.blogspot.com/_yRxfvH6kBOI/TMbbfZfmG0I/AAAAAAAAA0E/v1HMw0Mhyyc/s1600/ACDC+-+Back+In+Black-Front.jpg"
    },
    {
      title: "Purple Rain",
      artist: "Prince",
      year: "1984",
      cover: "https://wallpapercave.com/wp/wp9375828.jpg"
    },
    {
      title: "Nevermind",
      artist: "Nirvana",
      year: "1991",
      cover: "https://upload.wikimedia.org/wikipedia/en/b/b7/NirvanaNevermindalbumcover.jpg"
    },
    {
      title: "The Miseducation of Lauryn Hill",
      artist: "Lauryn Hill",
      year: "1998",
      cover: "https://killerboombox.com/wp-content/uploads/2014/08/the-miseducation-of-lauryn-hill.jpg"
    },
    {
      title: "OK Computer",
      artist: "Radiohead",
      year: "1997",
      cover: "https://www.concierto.cl/wp-content/uploads/2017/06/Promise.jpg"
    },
    {
      title: "Rumours",
      artist: "Fleetwood Mac",
      year: "1977",
      cover: "https://upload.wikimedia.org/wikipedia/en/f/fb/FMacRumours.PNG"
    }
  ];

  return (
    <div className="calendar">
      <h1>Legendary Album Collection</h1>
      <div className="album-grid">
        {albums.map((album, index) => (
          <Event 
            key={index}
            event={album.title}
            artist={album.artist}
            year={album.year}
            cover={album.cover}
            color={colors[index % colors.length]}
          />
        ))}
      </div>
    </div>
  );
}

export default Calendar;