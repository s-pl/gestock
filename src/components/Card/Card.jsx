import * as React from 'react';
import MuiCard from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';


const Card = React.memo(function Card({title, description}) {
  return (
    <MuiCard sx={{ width: 320 }}>
      <div>
        <Typography level="title-lg">{title}</Typography>
        <Typography level="body-md" sx={{ mt: 1 }}>
          {description}
        </Typography>
      </div>
      <CardContent orientation="horizontal">
      </CardContent>
    </MuiCard>
  );
});

export default Card;