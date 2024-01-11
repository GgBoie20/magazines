import * as React from 'react';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Jan from './front.svg'
import Dec from './Dec.png'
import Oct from './Oct.png'

const DemoPaper = styled(Paper)(({ theme }) => ({
  width: 260,
  height: 350,
  padding: theme.spacing(1),
  ...theme.typography.body2,
  textAlign: 'center',
}));

const FrontImage=[Jan, Dec, Oct]

export default function Layout() {
  return (
    <Stack direction="row" spacing={6}>
      {FrontImage.map((image) => ( <DemoPaper key={image} square={false} component="img" src={image} object-fit= "fill"></DemoPaper>))}
    </Stack>
    
  );
}