import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Typography, Button } from '@mui/material';
import Card from "../Card/Card";
import Carousel from '../Carousel/Carousel';


const Section = ({title, api}) =>{
    const [albums, setAlbums] = useState([]);
    const [isCollapsed, setIsCollapsed] = useState(false);

    useEffect(() => {
       axios.get(api) 
       .then(response => {
        setAlbums(response.data);
       })
       .catch(error =>{
        console.error('Error fetching the album data:, error');

       });
    },[]);

    const handleCollapseToggle = () =>{
        setIsCollapsed(!isCollapsed);
    }

    const navigationPrevId = `swiper-button-prev-${title.replace(/\s+/g, '-')}`;
    const navigationNextId = `swiper-button-next-${title.replace(/\s+/g, '-')}`;

    return(
        <Box sx={{ padding: 3 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginleft: 4}}>
          <Typography variant="h5" component="h2" color="#FFFFFF" fontSize="20px" sx={{margin: 2}}>{title}</Typography>
          <Button variant="text" onClick={handleCollapseToggle} sx={{ 
    color: '#34C94B', 
    textTransform: 'none',
    fontWeight: 'bold',
    fontSize: 20
  }}>
            {isCollapsed ? 'Show All' : 'Collapse'}
          </Button>
        </Box>

        {!isCollapsed ?(
            <Carousel  items={albums.map(album => (
                <Card
                  key={album.id}
                  image={album.image}
                  follows={`${album.follows} Follows`}
                  name={album.title}
                />
              ))}
              navigationPrevId={navigationPrevId}
              navigationNextId={navigationNextId}
               />
        ) : (
            <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))',
            gap: 5,
            marginLeft:4
          }}
        >
            {albums.map(album => (
            <Card
              key={album.id}
              image={album.image}
              follows={`${album.follows} Follows`}
              name={album.title}
            />
         ))}
       </Box>
        )}
         </Box>
    );
};

export default Section;