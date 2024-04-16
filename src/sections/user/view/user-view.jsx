/* eslint-disable */
import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';

import Iconify from "src/components/iconify";

import './userView.css'

import { Box, Checkbox, FormControl, FormControlLabel, FormGroup, IconButton, InputAdornment, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { deleteUser, getAllUsers } from "src/api/api";

// ----------------------------------------------------------------------

export default function UserPage() {
  const [activeButton, setActiveButton] = useState("product");
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOption, setSortOption] = useState('');

  const [user, setUser] = useState(null)

  useEffect(() => {
    const loadUsers = async() => {
      try{
        const response = await getAllUsers()
        setUser(response?.users.filter((u) => u.role !== "admin" && u.role !== "superAdmin"))

        console.log('response', response);
      }catch(error){
        console.log('error', error);
      }
    }
    loadUsers()
  }, [])

  const dummyData = user

  
  const handleView = (productId) => {
    console.log(`View product with ID: ${productId}`);
  };

  const handleEdit = (productId) => {
    console.log(`Edit product with ID: ${productId}`);
  };

  const handleDelete = async(id) => {
    console.log(`Delete product with ID: ${id}`);
    try{
      const response = await deleteUser({userId: id})
      console.log('response delete', response);
      setUser(user.filter((pro) => pro._id !== id))
    }catch(error){
      console.log('error on delete ptoduct ', error);
    }
  };
  const handleSearch = (event) => {
    console.log(event.target.value)
    setSearchTerm(event.target.value);
  };

  const handleSort = (event) => {
    setSortOption(event.target.value);
  };

  const filteredProducts = dummyData
    ?.filter((product) => {
      const searchTermLower = searchTerm.toLowerCase();
      return Object.values(product).some(
        (value) => typeof value === 'string' && value.toLowerCase().includes(searchTermLower)
      );
    })
    .sort((a, b) => {
      if (sortOption === 'RatingHighToLow') {
        return a.price > b.price ? -1 : 1;
      } else if (sortOption === 'RatingLowToHigh') {
        return a.price < b.price ? -1 : 1;
      } else if (sortOption === 'NumOfSaleHighToLow') {
        return b.quantity - a.quantity;
      } else if (sortOption === 'NumOfSaleLowToHigh') {
        return a.quantity - b.quantity;
      } else if (sortOption === 'BasePriceHighToLow') {
        return a.price > b.price ? -1 : 1;
      } else if (sortOption === 'BasePriceLowToHigh') {
        return a.price < b.price ? -1 : 1;
      }
      return 0;
    });

  return (
    <Container>
      <div>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            mb={5}
          >
            <Typography variant="h4">User</Typography>

          </Stack>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            spacing={2}
            mb={5}
          >
            <Box
              sx={{
                width: '50%',
              }}
            >
              <TextField
                fullWidth
                label="Search (Email, name...)"
                id="fullWidth"
                value={searchTerm}
                onChange={handleSearch}
              />
            </Box>
          </Stack>

          <div className="table-container">
            <table className="product-table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Email address</th>
                  {/* <th>Phone</th>
                  <th>Number of Orders</th> */}
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredProducts && filteredProducts.length > 0 ? (
                  filteredProducts.map((product, i) => (
                    <tr key={product.id}>
                      <td>{i+1}</td>
                      <td>{product.name}</td>
                      <td>{product.email}</td>
                      {/* <td>{product.phone}</td>
                      <td>{product.numberOfOrders}</td> */}
                      <td>
                        {/* <IconButton onClick={() => handleView(product.id)} title="View">
                          <VisibilityIcon />
                        </IconButton>
                        <IconButton onClick={() => handleEdit(product.id)} title="Edit">
                          <EditIcon />
                        </IconButton> */}
                        <IconButton onClick={() => handleDelete(product._id)} title="Delete">
                          <DeleteIcon />
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
