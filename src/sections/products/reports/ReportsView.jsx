/* eslint-disable */
import React, { useState } from 'react';
import {
  Container,
  Typography,
  Stack,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import * as XLSX from 'xlsx';
import Button from '@mui/material/Button';
import './ReportsView.css';

export default function ReportsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOption, setSortOption] = useState('');

  const dummySalesData = [
    {
      id: 1,
      productName: 'T-Shirt A',
      category: "Men's Clothing",
      price: 20,
      quantity: 100,
      total: 2000,
      date: '2023-03-15',
      customer: 'John Doe',
      location: 'Store A',
    },
    {
      id: 2,
      productName: 'T-Shirt B',
      category: "Women's Clothing",
      price: 25,
      quantity: 80,
      total: 2000,
      date: '2023-03-16',
      customer: 'Jane Smith',
      location: 'Store B',
    },
    {
      id: 3,
      productName: 'T-Shirt C',
      category: "Men's Clothing",
      price: 30,
      quantity: 70,
      total: 2100,
      date: '2023-03-17',
      customer: 'Bob Johnson',
      location: 'Store A',
    },
  ];

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSort = (event) => {
    setSortOption(event.target.value);
  };

  const filteredSalesData = dummySalesData
    .filter((sale) => {
      const searchTermLower = searchTerm.toLowerCase();
      console.log(searchTermLower);
      return Object.values(sale).some(
        (value) => typeof value === 'string' && value.toLowerCase().includes(searchTermLower)
      );
    })
    .sort((a, b) => {
      if (sortOption === 'PriceHighToLow') {
        return a.price > b.price ? -1 : 1;
      } else if (sortOption === 'PriceLowToHigh') {
        return a.price < b.price ? -1 : 1;
      }
      return 0;
    });

  const handleView = (saleId) => {
    console.log(`View sale with ID: ${saleId}`);
  };

  const handleEdit = (saleId) => {
    console.log(`Edit sale with ID: ${saleId}`);
  };

  const handleDelete = (saleId) => {
    console.log(`Delete sale with ID: ${saleId}`);
  };

  const exportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(filteredSalesData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'SalesData');
    XLSX.writeFile(workbook, 'sales_data.xlsx');
  };

  return (
    <Container>
      <Typography variant="h4" mb={3}>
        Sales Reports
      </Typography>

      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={3}>
        {/* Search TextField */}
        <FormControl sx={{ width: '40%' }}>
          <InputLabel>Search</InputLabel>
          <Select value={searchTerm} onChange={handleSearch}>
            <MenuItem value="">All</MenuItem>
            <MenuItem value="Men's Clothing">Men's Clothing</MenuItem>
            <MenuItem value="Women's Clothing">Women's Clothing</MenuItem>
          </Select>
        </FormControl>

        {/* Sort By Dropdown */}
        <FormControl sx={{ width: '40%' }}>
          <InputLabel>Sort By</InputLabel>
          <Select value={sortOption} onChange={handleSort}>
            <MenuItem value="">None</MenuItem>
            <MenuItem value="PriceHighToLow">Price (High to Low)</MenuItem>
            <MenuItem value="PriceLowToHigh">Price (Low to High)</MenuItem>
          </Select>
        </FormControl>
        <Button onClick={exportToExcel} variant="contained" color="inherit">
          Export to Excel
        </Button>
      </Stack>

      <TableContainer component={Paper} className="table-container">
        <Table className="review-table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Product Name</TableCell>
              <TableCell>Category</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell>Total</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Customer</TableCell>
              <TableCell>Location</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredSalesData.map((sale) => (
              <TableRow key={sale.id}>
                <TableCell>{sale.id}</TableCell>
                <TableCell>{sale.productName}</TableCell>
                <TableCell>{sale.category}</TableCell>
                <TableCell>${sale.price}</TableCell>
                <TableCell>{sale.quantity}</TableCell>
                <TableCell>${sale.total}</TableCell>
                <TableCell>{sale.date}</TableCell>
                <TableCell>{sale.customer}</TableCell>
                <TableCell>{sale.location}</TableCell>
                <TableCell>
                  <IconButton onClick={() => handleView(sale.id)} title="View">
                    <VisibilityIcon className="aquablue" />
                  </IconButton>
                  <IconButton onClick={() => handleEdit(sale.id)} title="Edit">
                    <EditIcon className="green" />
                  </IconButton>
                  <IconButton onClick={() => handleDelete(sale.id)} title="Delete">
                    <DeleteIcon className="red" />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
