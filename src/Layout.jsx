import * as React from 'react';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

const DemoPaper = styled(Paper)(({ theme }) => ({
  width: 300,
  height: 300,
  padding: theme.spacing(2),
  ...theme.typography.body2,
  textAlign: 'center',
}));

export default function Layout() {
  return (
    <Stack direction="row" spacing={6}>
      <DemoPaper square={false}>heloo</DemoPaper>
      <DemoPaper square={false}>heloo</DemoPaper>
      <DemoPaper square={false}>heloo</DemoPaper>
    </Stack>
    
  );
}