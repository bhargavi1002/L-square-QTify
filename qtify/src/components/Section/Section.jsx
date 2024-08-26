import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Typography, Button } from '@mui/material';
import Card from "../Card/Card";


const Section = ({title}) =>{
    const [albums, setAlbums] = useState([]);
    const [isCollapsed, setIsCollapsed] = useState(false);

    useEffect(() => {
       axios.get('https://qtify-backend-labs.crio.do/albums/top') 
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
            {isCollapsed ? 'Show all' : 'Collapse'}
          </Button>
        </Box>

        {!isCollapsed && (
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