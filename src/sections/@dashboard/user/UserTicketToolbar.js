import {useState} from "react"
import PropTypes from 'prop-types';

// @mui

import { styled, alpha } from '@mui/material/styles';
import { Toolbar, Tooltip, IconButton, Typography, OutlinedInput, InputAdornment,Select,MenuItem,Stack } from '@mui/material';
// component
import Iconify from '../../../components/iconify';

// ----------------------------------------------------------------------

const StyledRoot = styled(Toolbar)(({ theme }) => ({
  height: 96,
  display: 'flex',
  justifyContent: 'space-between',
  padding: theme.spacing(0, 1, 0, 3),
}));

const StyledSearch = styled(OutlinedInput)(({ theme }) => ({
  width: 240,
  transition: theme.transitions.create(['box-shadow', 'width'], {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.shorter,
  }),
  '&.Mui-focused': {
    width: 320,
    boxShadow: theme.customShadows.z8,
  },
  '& fieldset': {
    borderWidth: `1px !important`,
    borderColor: `${alpha(theme.palette.grey[500], 0.32)} !important`,
  },
}));

// ----------------------------------------------------------------------

UserListToolbar.propTypes = {
  numSelected: PropTypes.number,
  filterName: PropTypes.string,
  onFilterName: PropTypes.func,
};

export default function UserListToolbar({ numSelected, filterName, onFilterName }) {
    const [selectedOption, setSelectedOption] = useState('default');
    const [selectedStatus, setSelectedStatus] = useState('default');
    const [selectedPriority, setSelectedPriority] = useState('default')

    const handleOptionChange = (event) => {
      setSelectedOption(event.target.value);
    };

    const handleStatusChange = (event) => {
        setSelectedStatus(event.target.value);
      };

      const handlePriorityChange = (event) => {
        setSelectedPriority(event.target.value);
      };
  return (<>
   <Stack direction="row" alignItems="center" sx={{ m: 2 }}>
    <Select value={selectedOption} onChange={handleOptionChange}>
    <MenuItem value="default" disabled>Select Category</MenuItem>
    <MenuItem value="option1">Bug</MenuItem>
    <MenuItem value="option2">Questions</MenuItem>
    <MenuItem value="option3">New Installation</MenuItem>
    <MenuItem value="option4">Support</MenuItem>
  </Select>

  <Select value={selectedStatus} onChange={handleStatusChange} sx={{m:2}}>
    <MenuItem value="default" disabled>Select Status</MenuItem>
    <MenuItem value="option1">In Progress</MenuItem>
    <MenuItem value="option2">Resolved</MenuItem>
    <MenuItem value="option3">Closed</MenuItem>
    <MenuItem value="option4">New Ticket</MenuItem>
    <MenuItem value="option5">On Hold</MenuItem>
  </Select>

  <Select value={selectedPriority} onChange={handlePriorityChange}>
    <MenuItem value="default" disabled>Select Priority</MenuItem>
    <MenuItem value="option1">Urgent</MenuItem>
    <MenuItem value="option2">High</MenuItem>
    <MenuItem value="option3">Medium</MenuItem>
    <MenuItem value="option4">Low</MenuItem>
 
  
  </Select>

    <StyledRoot
      sx={{
        ...(numSelected > 0 && {
          color: 'primary.main',
          bgcolor: 'primary.lighter',
        }),
      }}
    >
      {numSelected > 0 ? (
        <Typography component="div" variant="subtitle1">
          {numSelected} selected
        </Typography>
      ) : (
        <StyledSearch
          value={filterName}
          onChange={onFilterName}
          placeholder="Search user..."
          startAdornment={
            <InputAdornment position="start">
              <Iconify icon="eva:search-fill" sx={{ color: 'text.disabled', width: 20, height: 20 }} />
            </InputAdornment>
          }
        />
      )}

      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton>
            <Iconify icon="eva:trash-2-fill" />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Filter list">
          <IconButton>
            <Iconify icon="ic:round-filter-list" />
          </IconButton>
        </Tooltip>
      )}
    </StyledRoot>
    </Stack>
    </>
  );
}
