import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import Playlist from './components/Playlist';
import Tracklist from './components/Tracklist';
import Track from './components/Track';
import './App.css';

function App() {

  const mockTrackData = [
    {
      id: 1,
      trackName: ['Good times, better times', 'Phased and Frazzled', 'Your thyme is gonna come', 'Transmission breakdown (on the side of the road)', 'Goin way down', 'Whiskey sent, Spell Bound', 'Send me skippin', 'Lost in your eyes'],
      artistName: 'Zed Leppelin',
      album: 'Zed Leppelin IV'
    },
    {
      id: 2,
      trackName: ['Sittin back', 'Yung thuggin', 'Lookin fly', 'Thought processes', 'Life of crime', 'Turnin tricks, breaking sticks', 'cash$$$', 'Lost in my ways'],
      artistName: 'Jordan Diddy',
      album: 'Gotti Mane Juice Boys II'
    },
    {
      id: 3,
      trackName: ['Jazzy feeling in the air tonight', 'Session at the schoolhouse', 'Off the coast of africa', 'Letting her go'],
      artistName: 'Jefferson Windle',
      album: 'Sea of Biscay'
    },
    { 
      id: 4,
      trackName: ['slow', 'violins', 'cello', 'fast'],
      artistName: 'Baron Von Quincy III',
      album: '2.0 Major in C#'
    },
    {
      id: 5,
      trackName: ['rocky', 'rockin out', 'forget to rock', 'rockin the nation'],
      artistName: 'DC/AC',
      album: 'Then There Was Rock'
    }
  ]
  

  return (
    <>
      <h1>Spotify API Project</h1>
      <SearchBar />
      <SearchResults />
      <Playlist />
      <Tracklist track={mockTrackData[0]}/>
      <Track />
    </>
  )
}

export default App
