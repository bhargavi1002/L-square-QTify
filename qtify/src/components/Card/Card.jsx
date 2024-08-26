import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import {Chip} from '@mui/material';
import { Box } from '@mui/system';

const AlbumCard = ({image, name, follows}) => {

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', width: 159}}>
    <Card sx={{ width: 159, height: 205, borderRadius: '10px', overflow: 'hidden'}}>
        <CardActionArea sx={{ width: 159, height: 205 }}>
            <CardMedia
                component="img"
                image={image}
                alt={name}
                sx={{ objectFit: 'cover', width: 159, height: 170 }}
            />
            <CardContent sx={{ padding: '8px 8px 4px 8px', width: 159, height: 35 }}>
                <Box sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                    <Chip
                        label={follows}
                        size="small"
                        sx={{
                            borderRadius:'10px',
                            padding: '4px 8px',
                            backgroundColor: 'black',
                            color: 'white',
                            marginLeft: 0,
                            fontSize:10
                        }}
                    />
                </Box>
            </CardContent>
        </CardActionArea>
    </Card>
    {/* Album name section */}
    <Box sx={{ backgroundColor: '#121212', padding: '4px 8px', borderRadius: '0 0 10px 10px', width: 159 }}>
        <Typography variant="body2" component="div" sx={{ textAlign: 'left', color: '#FFFFFF'}}>
            {name}
        </Typography>
    </Box>
</Box>

  );
}
export default AlbumCard;