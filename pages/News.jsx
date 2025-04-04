import React from 'react';
import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import newsFromCompany from '../services/news';
import Button from '@mui/joy/Button';
import { IoLogoRss } from "react-icons/io5";
function News() {
    return (
        <Box sx={{ maxWidth: '1200px', margin: '0 auto', padding: 2 }}>
            <Typography level="h2" sx={{ mb: 3 }}>
                Noticias <Button onClick={function(){window.location = "https://raw.githubusercontent.com/s-pl/gestock/refs/heads/main/public/news.xml"}} sx={{margin:'10px'}}><IoLogoRss /></Button>

            </Typography>

            {newsFromCompany.map((newsItem, index) => {
                return (
                    <Sheet key={index}  variant="outlined" sx={{ borderRadius: 'md', p: 4 , margin: '10px'}} >
                        <Typography level="h4" sx={{ mb: 3 }}>
                            {newsItem.headline}
                        </Typography>
                        <Typography sx={{ mb: 0 }}>
                            {newsItem.content}
                        </Typography>
                    </Sheet>
                );
            })}
        </Box>
    );
}

export default News;
