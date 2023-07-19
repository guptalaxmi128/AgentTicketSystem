import { Helmet } from 'react-helmet-async';

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

import JoditEditor from 'jodit-react';

export default function CreateTicket() {
  return (
    <>
      <Helmet>
        <title> Ticket </title>
      </Helmet>

      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Create Ticket
          </Typography>
        </Stack>

        <Card sx={{ p: '2rem' }}>
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, mt: 2, mb: 2 }}>
            <TextField name="name" label="Name" fullWidth sx={{ mr: { sm: 1 } }} />
            <TextField
              name="email"
              label="Email address"
              fullWidth
              sx={{ ml: { xs: 0, sm: 1 }, mt: { xs: 2, sm: 0 } }}
            />
          </Box>
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, mt: 2, mb: 2 }}>
            <FormControl fullWidth sx={{ mr: { sm: 1 } }}>
              <InputLabel id="demo-simple-select-label">Select Category</InputLabel>
              <Select labelId="demo-simple-select-label" id="demo-simple-select" label="Category">
                <MenuItem value="default" disabled>
                  Select Category
                </MenuItem>
                <MenuItem value="option1">Bug</MenuItem>
                <MenuItem value="option2">Questions</MenuItem>
                <MenuItem value="option3">New Installation</MenuItem>
                <MenuItem value="option4">Support</MenuItem>
              </Select>
            </FormControl>
            <TextField
              label="Subject"
              variant="outlined"
              fullWidth
              sx={{ ml: { sm: 1 }, mt: { xs: 2, sm: 0 } }}
              type="text"
              name="subject"
            />
          </Box>
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, mt: 2, mb: 2 }}>
            <Box
              sx={{
                //  maxWidth: editorConfig.width,
                width: '100%',
                m: 0,
              }}
            >
              <JoditEditor
              // value={editor} config={editorConfig} onChange={(newContent) => setEditor(newContent)}
              />
            </Box>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, mt: 2, mb: 2 }}>
            <FormControl fullWidth sx={{ mr: { sm: 1 } }}>
              <InputLabel id="demo-simple-select-label">Select Priority</InputLabel>
              <Select labelId="demo-simple-select-label" id="demo-simple-select" label="Priority">
                <MenuItem value="default" disabled>
                  Select Priority
                </MenuItem>

                <MenuItem value="option1">Urgent</MenuItem>
                <MenuItem value="option2">High</MenuItem>
                <MenuItem value="option3">Medium</MenuItem>
                <MenuItem value="option4">Low</MenuItem>
              </Select>
            </FormControl>
            <Box sx={{ width: '100%', ml: { sm: 1 }, mt: { xs: 2, sm: 0 } }}>
              <Button
                variant="outlined"
                fullWidth
                component="label"
                style={{ height: '51px', color: 'gray', fontSize: '14px', border: '1px solid #dcdcdc' }}
                // value={image}
                // onChange={(e) => handleImageFile(e)}
              >
                Attachments(you can select multiple files)
                <input hidden accept="image/*" type="file" />
              </Button>
            </Box>
          </Box>
          <Box>
            <Button variant="contained" color="primary" type="submit">
              Create Ticket
            </Button>
          </Box>
        </Card>
      </Container>
    </>
  );
}
