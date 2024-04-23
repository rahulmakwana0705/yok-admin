/* eslint-disable */
import React, { useState } from 'react';
// import { useNavigate } from "react-router-dom";

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';

import Iconify from 'src/components/iconify';

import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import './orderView.css';
import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';

export default function OrderView() {
  const [activeButton, setActiveButton] = useState('product');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOption, setSortOption] = useState(null);

  const [value, setValue] = React.useState(null);

  const handleNewProductButtonClick = () => {
    console.log('cli');
    setActiveButton('newProduct');
    // navigate('/product/add-product')
  };
  const additionalDummyOrders = [
    {
      order: 4,
      customer: 'Alice Johnson',
      date: '2024-02-17',
      items: [
        { id: 1, product: 'Product A', price: '$20', quantity: 2 },
        { id: 3, product: 'Product C', price: '$30', quantity: 1 },
      ],
      price: '$70',
      status: 'Processing',
    },
    {
      order: 5,
      customer: 'Charlie Brown',
      date: '2024-02-18',
      items: [{ id: 2, product: 'Product B', price: '$25', quantity: 3 }],
      price: '$75',
      status: 'Shipped',
    },
    {
      order: 6,
      customer: 'Eva Green',
      date: '2024-02-19',
      items: [
        { id: 1, product: 'Product A', price: '$20', quantity: 1 },
        { id: 3, product: 'Product C', price: '$30', quantity: 2 },
      ],
      price: '$80',
      status: 'Delivered',
    },
    {
      order: 7,
      customer: 'David Smith',
      date: '2024-02-20',
      items: [{ id: 2, product: 'Product B', price: '$25', quantity: 5 }],
      price: '$125',
      status: 'Pending',
    },
    {
      order: 8,
      customer: 'Grace Johnson',
      date: '2024-02-21',
      items: [
        { id: 1, product: 'Product A', price: '$20', quantity: 3 },
        { id: 2, product: 'Product B', price: '$25', quantity: 2 },
        { id: 3, product: 'Product C', price: '$30', quantity: 1 },
      ],
      price: '$145',
      status: 'Processing',
    },
    {
      order: 9,
      customer: 'Frank Brown',
      date: '2024-02-22',
      items: [{ id: 3, product: 'Product C', price: '$30', quantity: 4 }],
      price: '$120',
      status: 'Shipped',
    },
    {
      order: 10,
      customer: 'Helen Green',
      date: '2024-02-23',
      items: [
        { id: 1, product: 'Product A', price: '$20', quantity: 2 },
        { id: 2, product: 'Product B', price: '$25', quantity: 1 },
        { id: 3, product: 'Product C', price: '$30', quantity: 3 },
      ],
      price: '$135',
      status: 'Delivered',
    },
  ];
  const handleView = (productId) => {
    console.log(`View product with ID: ${productId}`);
  };

  const handleEdit = (productId) => {
    console.log(`Edit product with ID: ${productId}`);
  };

  const handleDelete = (productId) => {
    console.log(`Delete product with ID: ${productId}`);
  };
  const handleSearch = (event) => {
    console.log(event.target.value);
    setSearchTerm(event.target.value);
  };

  const handleSort = (event) => {
    setSortOption(event.target.value);
    console.log('Sort Option:', event.target.value);
  };

  const filteredProducts = additionalDummyOrders
    .filter((product) => {
      const searchTermLower = searchTerm.toLowerCase();
      return Object.values(product).some(
        (value) => typeof value === 'string' && value.toLowerCase().includes(searchTermLower)
      );
    })
    .filter((product) => {
      if (sortOption === 'Processing') {
        return product.status === 'Processing';
      } else if (sortOption === 'Shipped') {
        return product.status === 'Shipped';
      } else if (sortOption === 'Delivered') {
        return product.status === 'Delivered';
      } else if (sortOption === 'Pending') {
        return product.status === 'Pending';
      }
      return true;
    });
  console.log('sortOption', sortOption);
  return (
    <Container>
      <div>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4">Orders</Typography>
        </Stack>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          spacing={2} // Add some gap between the components
          mb={1}
        >
          {/* Search TextField */}
          <Box
            sx={{
              width: '100%', // Set width to 50%
            }}
          >
            <TextField
              fullWidth
              label="Search"
              id="fullWidth"
              value={searchTerm}
              onChange={handleSearch}
              // InputProps={{
              //   startAdornment: (
              //     <InputAdornment position="start">
              //       {/* Add your search icon here */}
              //       <SearchIcon />
              //     </InputAdornment>
              //   ),
              // }}
            />
          </Box>

          {/* Sort By Dropdown */}
        </Stack>

        <div className="d-flex justify-content-between gap-4">
          <div className="d-flex w-50 gap-4">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer sx={{ width: '50%' }} components={['DatePicker']}>
                <DatePicker
                  label="From"
                  value={value}
                  onChange={(newValue) => setValue(newValue)}
                />
              </DemoContainer>
            </LocalizationProvider>

            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer sx={{ width: '50%' }} components={['DatePicker']}>
                <DatePicker label="To" value={value} onChange={(newValue) => setValue(newValue)} />
              </DemoContainer>
            </LocalizationProvider>
          </div>

          <FormControl variant="outlined" sx={{ width: '50%', minWidth: 120, marginTop: '8px' }}>
            <InputLabel id="sort-by-label">Sort By</InputLabel>
            <Select
              labelId="sort-by-label"
              id="sort-by"
              label="Sort By"
              value={sortOption}
              onChange={handleSort}
            >
              {/* Dummy Options */}
              <MenuItem value="" disabled>
                <em>None</em>
              </MenuItem>
              <MenuItem value="Pending">Pending</MenuItem>
              <MenuItem value="Processing">Processing</MenuItem>
              <MenuItem value="Shipped">Shipped</MenuItem>
              <MenuItem value="Delivered">Delivered</MenuItem>
              <MenuItem value="Cancelled">Cancelled</MenuItem>
              <MenuItem value="Refunded">Refunded</MenuItem>
            </Select>
          </FormControl>
        </div>

        <div className="table-container">
          <table className="product-table">
            <thead>
              <tr>
                <th>Order</th>
                <th>Customer</th>
                <th>Date</th>
                <th>Items</th>
                <th>Price</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredProducts && filteredProducts.length > 0 ? (
                filteredProducts.map((orders) => (
                  <tr key={orders.order}>
                    <td>{orders.order}</td>
                    <td>{orders.customer}</td>
                    <td>{orders.date}</td>
                    <td>{orders.items.length}</td>
                    <td>{orders.price}</td>
                    <td>{orders.status}</td>
                    <td>
                      <IconButton onClick={() => handleView(product.id)} title="View">
                        <VisibilityIcon className="aquablue" />
                      </IconButton>
                      <IconButton onClick={() => handleEdit(product.id)} title="Edit">
                        <EditIcon className="green" />
                      </IconButton>
                      <IconButton onClick={() => handleDelete(product.id)} title="Delete">
                        <DeleteIcon className="red" />
                      </IconButton>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6">No products found</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </Container>
  );
}
