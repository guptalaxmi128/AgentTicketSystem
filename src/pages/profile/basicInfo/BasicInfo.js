

import { useState } from 'react';
// @mui
import {
  Card,
  Stack,
  Container,
  Typography,
  TextField,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from '@mui/material';


export default function BasicInfo() {
 
  return (
    <>
     

      {/* <Container>
        <Card sx={{ p: '2rem' }}> */}
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, mt: 2, mb: 2 }}>
            <TextField name="name" label="Name" fullWidth sx={{ mr: { sm: 1 } }} type="text" />
            <TextField
              name="email"
              label="Email address"
              type="email"
              fullWidth
              sx={{ ml: { xs: 0, sm: 1 }, mt: { xs: 2, sm: 0 } }}
            />
          </Box>
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, mt: 2, mb: 2 }}>
            <TextField name="mobileNumber" label="Mobile Number" fullWidth sx={{ mr: { sm: 1 } }} type="number" />
            <TextField
              name="department"
              label="Department"
              type="text"
              fullWidth
              sx={{ ml: { xs: 0, sm: 1 }, mt: { xs: 2, sm: 0 } }}
            />
          </Box>
       

          <Box>
            <Button variant="contained" color="primary" type="submit">
              Submit
            </Button>
          </Box>
        {/* </Card>
      </Container> */}
    </>
  );
}
