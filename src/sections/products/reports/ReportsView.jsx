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
import Pagination from '@mui/material/Pagination';

export default function ReportsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOption, setSortOption] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

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
    {
      id: 4,
      productName: 'Jeans A',
      category: "Men's Clothing",
      price: 50,
      quantity: 60,
      total: 3000,
      date: '2023-03-18',
      customer: 'Alice Brown',
      location: 'Store C',
    },
    {
      id: 5,
      productName: 'Jeans B',
      category: "Women's Clothing",
      price: 55,
      quantity: 50,
      total: 2750,
      date: '2023-03-19',
      customer: 'Michael Wilson',
      location: 'Store B',
    },
    {
      id: 6,
      productName: 'T-Shirt D',
      category: "Men's Clothing",
      price: 22,
      quantity: 90,
      total: 1980,
      date: '2023-03-20',
      customer: 'Emma Davis',
      location: 'Store A',
    },
    {
      id: 7,
      productName: 'Dress A',
      category: "Women's Clothing",
      price: 40,
      quantity: 65,
      total: 2600,
      date: '2023-03-21',
      customer: 'Liam Smith',
      location: 'Store B',
    },
    {
      id: 8,
      productName: 'Dress B',
      category: "Women's Clothing",
      price: 45,
      quantity: 55,
      total: 2475,
      date: '2023-03-22',
      customer: 'Olivia Johnson',
      location: 'Store C',
    },
    {
      id: 9,
      productName: 'Shirt A',
      category: "Men's Clothing",
      price: 28,
      quantity: 85,
      total: 2380,
      date: '2023-03-23',
      customer: 'Ethan Brown',
      location: 'Store A',
    },
    {
      id: 10,
      productName: 'Shirt B',
      category: "Men's Clothing",
      price: 32,
      quantity: 75,
      total: 2400,
      date: '2023-03-24',
      customer: 'Ava Wilson',
      location: 'Store B',
    },
    {
      id: 11,
      productName: 'Skirt A',
      category: "Women's Clothing",
      price: 35,
      quantity: 60,
      total: 2100,
      date: '2023-03-25',
      customer: 'Lucas Davis',
      location: 'Store C',
    },
    {
      id: 12,
      productName: 'Skirt B',
      category: "Women's Clothing",
      price: 38,
      quantity: 50,
      total: 1900,
      date: '2023-03-26',
      customer: 'Mia Smith',
      location: 'Store A',
    },
    {
      id: 13,
      productName: 'Trousers A',
      category: "Men's Clothing",
      price: 48,
      quantity: 70,
      total: 3360,
      date: '2023-03-27',
      customer: 'Noah Johnson',
      location: 'Store B',
    },
    {
      id: 14,
      productName: 'Trousers B',
      category: "Men's Clothing",
      price: 52,
      quantity: 60,
      total: 3120,
      date: '2023-03-28',
      customer: 'Sophia Brown',
      location: 'Store C',
    },
    {
      id: 15,
      productName: 'Blouse A',
      category: "Women's Clothing",
      price: 42,
      quantity: 65,
      total: 2730,
      date: '2023-03-29',
      customer: 'William Smith',
      location: 'Store A',
    },
    {
      id: 16,
      productName: 'Blouse B',
      category: "Women's Clothing",
      price: 44,
      quantity: 55,
      total: 2420,
      date: '2023-03-30',
      customer: 'Ella Johnson',
      location: 'Store B',
    },
    {
      id: 17,
      productName: 'Jacket A',
      category: "Men's Clothing",
      price: 60,
      quantity: 50,
      total: 3000,
      date: '2023-03-31',
      customer: 'Liam Brown',
      location: 'Store C',
    },
    {
      id: 18,
      productName: 'Jacket B',
      category: "Men's Clothing",
      price: 65,
      quantity: 45,
      total: 2925,
      date: '2023-04-01',
      customer: 'Ava Smith',
      location: 'Store A',
    },
    {
      id: 19,
      productName: 'Coat A',
      category: "Women's Clothing",
      price: 80,
      quantity: 40,
      total: 3200,
      date: '2023-04-02',
      customer: 'Lucas Johnson',
      location: 'Store B',
    },
    {
      id: 20,
      productName: 'Coat B',
      category: "Women's Clothing",
      price: 85,
      quantity: 35,
      total: 2975,
      date: '2023-04-03',
      customer: 'Mia Brown',
      location: 'Store C',
    },
    {
      id: 21,
      productName: 'Sweater A',
      category: "Men's Clothing",
      price: 55,
      quantity: 60,
      total: 3300,
      date: '2023-04-04',
      customer: 'Noah Smith',
      location: 'Store A',
    },
  ];

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSort = (event) => {
    setSortOption(event.target.value);
  };

  const totalPages = Math.ceil(dummySalesData?.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
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
    })
    .slice(startIndex, endIndex);

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

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
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
      {totalPages > 1 && (
        <div className="flex justify-center items-center mt-4">
          <Stack alignItems={'end'}>
            <Pagination
              count={totalPages}
              page={currentPage}
              onChange={handlePageChange}
              variant="outlined"
              shape="rounded"
            />
          </Stack>
        </div>
      )}
    </Container>
  );
}
