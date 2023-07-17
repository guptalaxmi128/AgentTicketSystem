import { Helmet } from 'react-helmet-async';
import { filter } from 'lodash';
import { sentenceCase } from 'change-case';
import { useState } from 'react';
// @mui
import {
  Card,
  Table,
  Stack,
  Paper,
  Avatar,
  Button,
  Popover,
  Checkbox,
  TableRow,
  MenuItem,
  TableBody,
  TableCell,
  Container,
  Typography,
  IconButton,
  TableContainer,
  TablePagination,
} from '@mui/material';

// components

import Iconify from '../components/iconify';
import Scrollbar from '../components/scrollbar';
// sections
import { UserListHead, UserTicketToolbar } from '../sections/@dashboard/user';
// mock

// ----------------------------------------------------------------------

const TABLE_HEAD = [
  { id: 'ticketId', label: 'Ticket Id', alignRight: false },
  { id: 'name', label: 'Name', alignRight: false },
  { id: 'email', label: 'Email', alignRight: false },
  { id: 'category', label: 'Category', alignRight: false },
  { id: 'status', label: 'Status', alignRight: false },
  { id: 'priority', label: 'Priority', alignRight: false },
  { id: 'timing', label: 'Timing', alignRight: false },
  { id: 'created', label: 'Created', alignRight: false },
  { id: 'action', label: 'Action', alignRight: false },
];

const USERLIST = [
  {
    ticketId: '1685530041',
    name: 'Prakhar',
    email: 'prakhar@techastute.in',
    category: 'New Installation',
    status: 'New Ticket',
    priority: 'High',
    timing: '1 month ago',
    created: '1 hour',
    responseIn:'1 hour'
  },
  {
    ticketId: '1685530042',
    name: 'Ankush',
    email: 'ankush@techastute.in',
    category: 'Questions',
    status: 'In Progress',
    priority: 'Low',
    timing: '1 month ago',
    created: '1 hour',
    responseIn: '1 week after',
  },
  {
    ticketId: '1685530043',
    name: 'Shivani',
    email: 'shivani@gmail.com',
    category: 'Bug',
    status: 'Closed',
    priority: 'Urgent',
    timing: '1 month ago',
    created: '1 hour',
    responseIn: '2 week after',
  },
  {
    ticketId: '1685530044',
    name: 'Rahul',
    email: 'rahul@gmail.com',
    category: 'Support',
    status: 'On Hold',
    priority: 'Medium',
    timing: '1 month ago',
    created: '1 hour',
    responseIn: ' 1 hour',
  },
  {
    ticketId: '1685530045',
    name: 'Shanu',
    email: 'shanu@gmail.com',
    category: 'New Installation',
    status: 'Resolved',
    priority: 'Low',
    timing: '1 month ago',
    created: '1 hour',
    responseIn: ' 1 hour',
  },
];
// ----------------------------------------------------------------------

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function applySortFilter(array, comparator, query) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  if (query) {
    return filter(array, (_user) => _user.name.toLowerCase().indexOf(query.toLowerCase()) !== -1);
  }
  return stabilizedThis.map((el) => el[0]);
}

export default function Ticket() {

  const [page, setPage] = useState(0);

  const [order, setOrder] = useState('asc');

  const [selected, setSelected] = useState([]);

  const [orderBy, setOrderBy] = useState('name');

  const [filterName, setFilterName] = useState('');

  const [rowsPerPage, setRowsPerPage] = useState(5);

  const getCategoryColor = (categoryName) => {
    if (categoryName === 'New Installation' || categoryName === 'Support') {
      return '#eff6fc';
    }
    if (categoryName === 'Bug' || categoryName === 'Questions') {
      return '#fcf1e5';
    }
    return ''; // Default color when category name doesn't match
  };

  const getCategoryTextColor = (categoryName) => {
    if (categoryName === 'New Installation' || categoryName === 'Support') {
      return 'blue';
    }
    if (categoryName === 'Bug' || categoryName === 'Questions') {
      return '#f8a031';
    }
    return ''; // Default color when category name doesn't match
  };

  const getPriority = (priority) => {
    if (priority === 'High') {
      return 'red';
    }
    if (priority === 'Low') {
      return '#dbc900';
    }
    if (priority === 'Urgent') {
      return '#000';
    }
    if (priority === 'Medium') {
      return 'green';
    }
    return ''; // Default color when category name doesn't match
  };

  const getStatus = (status) => {
    if (status === 'In Progress' || status === 'Closed' || status === 'Resolved') {
      return '#eff6fc';
    }
    if (status === 'New Ticket' || status === 'On Hold') {
      return '#fcf1e5';
    }
    return ''; // Default color when category name doesn't match
  };

  const getStatusTextColor = (status) => {
    if (status === 'In Progress' || status === 'Closed' || status === 'Resolved') {
      return 'blue';
    }
    if (status === 'New Ticket' || status === 'On Hold') {
      return '#f8a031';
    }
    return ''; // Default color when category name doesn't match
  };

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = USERLIST.map((n) => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1));
    }
    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setPage(0);
    setRowsPerPage(parseInt(event.target.value, 10));
  };

  const handleFilterByName = (event) => {
    setPage(0);
    setFilterName(event.target.value);
  };

  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - USERLIST.length) : 0;

  const filteredUsers = applySortFilter(USERLIST, getComparator(order, orderBy), filterName);

  const isNotFound = !filteredUsers.length && !!filterName;

  return (
    <>
      <Helmet>
        <title> Ticket </title>
      </Helmet>

      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Ticket
          </Typography>
          {/* <Button variant="contained" startIcon={<Iconify icon="eva:plus-fill" />}>
            New User
          </Button> */}
        </Stack>

        <Card>
          <UserTicketToolbar numSelected={selected.length} filterName={filterName} onFilterName={handleFilterByName} />

          <Scrollbar>
            <TableContainer sx={{ minWidth: 800 }}>
              <Table>
                <UserListHead
                  order={order}
                  orderBy={orderBy}
                  headLabel={TABLE_HEAD}
                  rowCount={USERLIST.length}
                  numSelected={selected.length}
                  onRequestSort={handleRequestSort}
                  onSelectAllClick={handleSelectAllClick}
                />
                <TableBody>
                  {filteredUsers.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                    const { id, name, created, email, timing, category, ticketId, status, priority, responseIn } = row;
                    const selectedUser = selected.indexOf(name) !== -1;

                    return (
                      <TableRow hover key={id} tabIndex={-1} role="checkbox" selected={selectedUser}>
                        <TableCell padding="checkbox">
                          <Checkbox checked={selectedUser} onChange={(event) => handleClick(event, name)} />
                        </TableCell>

                        <TableCell align="left">
                          <div
                            style={{
                              border: '1px solid #6fd943',
                              color: '#6fd943',
                              padding: '6px',
                              borderRadius: '6px',
                              transition: 'background-color 0.3s, color 0.3s',
                              cursor: 'pointer',
                            }}
                            onMouseEnter={(e) => {
                              e.target.style.backgroundColor = '#6fd943';
                              e.target.style.color = 'white';
                            }}
                            onMouseLeave={(e) => {
                              e.target.style.backgroundColor = 'white';
                              e.target.style.color = '#6fd943';
                            }}
                          >
                            {ticketId}
                          </div>
                        </TableCell>

                        <TableCell align="left">{name}</TableCell>

                        <TableCell align="left">{email}</TableCell>

                        <TableCell align="left">
                          <div
                            style={{
                              backgroundColor: getCategoryColor(category),
                              margin: '4px',
                              padding: '3px',
                              borderRadius: '6px',
                              textAlign: 'center',
                              width: '120px',
                              color: getCategoryTextColor(category),
                            }}
                          >
                            {category}
                          </div>
                        </TableCell>
                        <TableCell align="left">
                          <div
                            style={{
                              backgroundColor: getStatus(status),
                              margin: '4px',
                              padding: '3px',
                              borderRadius: '6px',
                              color: getStatusTextColor(status),
                              textAlign: 'center',
                              width: '100px',
                            }}
                          >
                            {status}
                          </div>
                        </TableCell>
                        <TableCell>
                          {' '}
                          <div
                            style={{
                              backgroundColor: getPriority(priority),
                              margin: '4px',
                              padding: '3px',
                              borderRadius: '6px',
                              color: '#fff',
                              textAlign: 'center',
                              width: '100px',
                            }}
                          >
                            {priority}
                          </div>
                        </TableCell>
                        <TableCell>
                          <div style={{ width: '100px' }}>{timing}</div>
                        </TableCell>
                        <TableCell>
                          <>
                            <div
                              style={{
                                width: '250px',
                                color: responseIn && responseIn.trim() === '1 hour' ? 'black' : 'red',
                              }}
                            >
                              {responseIn && responseIn.trim() === '1 hour' ? 'Response In' : 'Response Overdue'}:{' '}
                              {responseIn}
                            </div>
                            <div style={{ width: '150px' }}>Resolve In: {created}</div>
                          </>
                        </TableCell>

                        <TableCell align="left">
                          <div style={{ display: 'flex' }}>
                            <Iconify icon={'ri:reply-line'} sx={{ mr: 2 }} />

                            <Iconify icon={'eva:trash-2-outline'} sx={{ mr: 2, color: 'red' }} />
                          </div>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                  {emptyRows > 0 && (
                    <TableRow style={{ height: 53 * emptyRows }}>
                      <TableCell colSpan={6} />
                    </TableRow>
                  )}
                </TableBody>

                {isNotFound && (
                  <TableBody>
                    <TableRow>
                      <TableCell align="center" colSpan={6} sx={{ py: 3 }}>
                        <Paper
                          sx={{
                            textAlign: 'center',
                          }}
                        >
                          <Typography variant="h6" paragraph>
                            Not found
                          </Typography>

                          <Typography variant="body2">
                            No results found for &nbsp;
                            <strong>&quot;{filterName}&quot;</strong>.
                            <br /> Try checking for typos or using complete words.
                          </Typography>
                        </Paper>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                )}
              </Table>
            </TableContainer>
          </Scrollbar>

          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={USERLIST.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Card>
      </Container>
    </>
  );
}
