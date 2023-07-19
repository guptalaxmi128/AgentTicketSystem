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
import { Icon } from '@iconify/react';

export default function UpdateTicket() {
  const [showForm, setShowForm] = useState(false);
  const toggleFormVisibility = () => {
    setShowForm(!showForm);
  };

  return (
    <>
      <Helmet>
        <title> Ticket </title>
      </Helmet>

      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Reply Ticket - 1685530041
          </Typography>
          <Button
            variant="contained"
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '30px',
              height: '40px',
            }}
          >
            <Icon icon="eva:edit-2-outline" width={22} height={22} onClick={toggleFormVisibility} />
          </Button>
        </Stack>

        {showForm && (
          <Card sx={{ p: '2rem', mb: 3 }}>
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
                  style={{ height: '52px', color: 'gray', fontSize: '14px', border: '1px solid #dcdcdc' }}
                  // value={image}
                  // onChange={(e) => handleImageFile(e)}
                >
                  Attachments(you can select multiple files)
                  <input hidden accept="image/*" type="file" />
                </Button>
              </Box>
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

            <Box>
              <Button variant="contained" color="primary" type="submit">
                Update
              </Button>
            </Box>
          </Card>
        )}
        <Card sx={{ mb: 3 }}>
          <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ p: '1.5rem' }}>
            <Box>
              <Typography sx={{ fontSize: '16px', color: '#000' }}>
                Prakhar<span style={{ fontSize: '12px' }}>(1 month ago)</span>
              </Typography>
              <Typography sx={{ fontSize: '14px' }}>prakhar@techastute.in</Typography>
            </Box>
            <Box>
              <Typography sx={{ fontSize: '12px' }}>Status:New Ticket</Typography>
              <Typography sx={{ fontSize: '12px' }}>Category:New Installation</Typography>
            </Box>
          </Stack>
          <hr style={{ backgroundColor: '#dcdcdc', height: '1px', border: 'none' }} />
          <Box sx={{ p: '1.5rem' }}>
            <Typography style={{ fontSize: '14px' }}>issue when try new fresh installtion</Typography>
          </Box>
        </Card>
        <Card>
          <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ p: '1.5rem' }}>
            <Typography sx={{ fontSize: '16px', color: '#000' }}>
              Admin<span style={{ fontSize: '12px' }}>(3 weeks ago)</span>
            </Typography>
          </Stack>
          <hr style={{ backgroundColor: '#dcdcdc', height: '1px', border: 'none' }} />
          <Box sx={{ p: '1.5rem' }}>
            <Typography style={{ fontSize: '14px' }}>we will try to solve your issue</Typography>
          </Box>
        </Card>
        <Box sx={{ mt: 3, display: 'flex' }}>
          <Card sx={{ marginRight: '1rem', width: '50%' }}>
            <Typography sx={{ p: '1.5rem' }}>Add Reply</Typography>
            <hr style={{ backgroundColor: '#dcdcdc', height: '1px', border: 'none' }} />
            <Box
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                mt: 2,
                pt: '1.5rem',
                pl: '1.5rem',
                pr: '1.5rem',
              }}
            >
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
            <Box sx={{ width: '100%', p: '1.5rem' }}>
              <Button
                variant="outlined"
                fullWidth
                component="label"
                style={{ height: '52px', color: 'gray', fontSize: '14px', border: '1px solid #dcdcdc' }}
                // value={image}
                // onChange={(e) => handleImageFile(e)}
              >
                Attachments(you can select multiple files)
                <input hidden accept="image/*" type="file" />
              </Button>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: '1.5rem' }}>
              <Button variant="contained" color="primary" type="submit">
                Submit
              </Button>
            </Box>
          </Card>
          <Card sx={{ width: '50%' }}>
            <Typography sx={{ p: '1.5rem' }}> Note</Typography>
            <hr style={{ backgroundColor: '#dcdcdc', height: '1px', border: 'none' }} />
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, mt: 2, mb: 2, p: '1.5rem' }}>
              <Box
                sx={{
                  //  maxWidth: editorConfig.width,
                  width: '100%',
                  m: 0,
                  height: '50%',
                }}
              >
                <JoditEditor
                // value={editor} config={editorConfig} onChange={(newContent) => setEditor(newContent)}
                />
              </Box>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: '1.5rem' }}>
              <Button variant="contained" color="primary" type="submit">
                Add Note
              </Button>
            </Box>
          </Card>
        </Box>
      </Container>
    </>
  );
}
