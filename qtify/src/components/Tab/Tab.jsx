import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Typography, Tabs, Tab, styled } from '@mui/material';
import Carousel from '../Carousel/Carousel';
import Card from "../Card/Card";

// Custom styles for Tabs and Tab components
const CustomTabs = styled(Tabs)(({ theme }) => ({
  marginBottom: theme.spacing(3),
  '& .MuiTab-root': {
    color: '#FFFFFF', // Default text color for all tabs
  },
  '& .Mui-selected': {
    color: '#FFFFFF', // Text color for the selected tab
  },
  '& .MuiTabs-indicator': {
    backgroundColor: '#00FF00', // Indicator line color
  },
}));

const CustomTab = styled(Tab)(({ theme }) => ({
  textTransform: 'none',
  fontWeight: 'bold',
}));

const SongsSection = () => {
  const [songs, setSongs] = useState([]);
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState('all');

  useEffect(() => {
    axios.get('https://qtify-backend-labs.crio.do/songs')
      .then(response => setSongs(response.data))
      .catch(error => console.error('Error fetching the songs data:', error));

    axios.get('https://qtify-backend-labs.crio.do/genres')
      .then(response => {
        const genresData = response.data.data;
        console.log(genresData);
        setGenres([{ key: 'all', label: 'All' }, ...genresData]);
      })
      .catch(error => console.error('Error fetching the genres data:', error));
  }, []);

  useEffect(() => {
    console.log('Updated genres:', genres);
  }, [genres]);

  const handleTabChange = (event, newValue) => {
    setSelectedGenre(newValue);
  };

  const filteredSongs = selectedGenre === 'all' ? songs : songs.filter(song => song.genre.key === selectedGenre);
  console.log("filtered songs", filteredSongs);

  return (
    <Box sx={{ padding: 3 }}>
         <Box sx={{ display: 'flex', justifyContent: 'flex-start', marginBottom:0, marginLeft:2 }}>
      <Typography variant="h5" component="h2" color="#FFFFFF" fontSize="20px" sx={{ margin:2 }}>
        Songs
      </Typography>
      </Box>
      <CustomTabs value={selectedGenre} onChange={handleTabChange}>
        {genres.map((genre) => (
          <CustomTab key={genre.key} label={genre.label} value={genre.key} />
        ))}
      </CustomTabs>
      {filteredSongs.length > 0 ? (
        <Carousel items={filteredSongs.map(song => (
          <Card
            key={song.id}
            image={song.image}
            follows={`${song.likes} Likes`}
            name={song.title}
          />
        ))} />
      ) : (
        <Typography variant="body1" color="#FFFFFF" sx={{ margin: 2 }}>
          No songs available for this genre.
        </Typography>
      )}
    </Box>
  );
};

export default SongsSection;
