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

import "./ProductsView.css";
import { Box, Checkbox, FormControl, FormControlLabel, FormGroup, IconButton, InputAdornment, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import NewProduct from "../NewProduct";
import { getProducts } from "src/api/api";
import ViewProduct from "./ViewProduct";
import EditProduct from "./EditProduct";

export default function ProductsView() {
  const [activeButton, setActiveButton] = useState("product");
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOption, setSortOption] = useState('');
  const handleNewProductButtonClick = () => {
    console.log("cli");
    setActiveButton("newProduct");
    // navigate('/product/add-product')
  };
  const [products, setProducts] = useState(null)
  const [clickedProduct, setClickedProduct] = useState(null)
  useEffect(() => {
    loadProducts()
  }, [])

  const loadProducts = async() => {
    try{
      const response = await getProducts()
      setProducts(response?.data)
      console.log('response products', response);
    }catch(error){
      console.log('error', error);
    }
  }

  const dummyProducts = products;

  const handleView = (product) => {
    setClickedProduct(product)
    setActiveButton("viewProduct")
  };

  const handleEdit = (product) => {
    setClickedProduct(product)
    setActiveButton("EditProduct")
    console.log(`Edit product with ID: }`);
  };

  const handleDelete = (product) => {
    console.log(`Delete product with ID: ${product}`);
  };
  const handleSearch = (event) => {
    console.log(event.target.value)
    setSearchTerm(event.target.value);
  };

  const handleSort = (event) => {
    setSortOption(event.target.value);
  };

  const filteredProducts = dummyProducts
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
      {activeButton === "product" && (
        <div>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            mb={5}
          >
            <Typography variant="h4">Products</Typography>

            <Button
              onClick={handleNewProductButtonClick}
              variant="contained"
              color="inherit"
              startIcon={<Iconify icon="eva:plus-fill" />}
            >
              New Product
            </Button>
          </Stack>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            spacing={2} // Add some gap between the components
            mb={5}
          >
            {/* Search TextField */}
            <Box
              sx={{
                width: '50%', // Set width to 50%
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
            <FormControl variant="outlined" sx={{ width: '50%', minWidth: 120 }}>
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
                <MenuItem value="RatingHighToLow">Rating (High &gt; Low)</MenuItem>
                <MenuItem value="RatingLowToHigh">Rating (Low &gt; High)</MenuItem>
                <MenuItem value="NumOfSaleHighToLow">Num of Sale (High &gt; Low)</MenuItem>
                <MenuItem value="NumOfSaleLowToHigh">Num of Sale (Low &gt; High)</MenuItem>
                <MenuItem value="BasePriceHighToLow">Base Price (High &gt; Low)</MenuItem>
                <MenuItem value="BasePriceLowToHigh">Base Price (Low &gt; High)</MenuItem>
              </Select>
            </FormControl>
          </Stack>



          <div className="table-container">
            <table className="product-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Product</th>
                  <th>Sale Price</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Action</th> {/* You can replace this with the actual action column */}
                </tr>
              </thead>
              <tbody>
                {filteredProducts && filteredProducts.length > 0 ? (
                  filteredProducts.map((product, i) => (
                    <tr key={product.id}>
                      <td>{i+1}</td>
                      <td>{product.name}</td>
                      <td>{product.sale_price}</td>
                      <td>{product.price}</td>
                      <td>{product.quantity}</td>
                      <td>
                        <IconButton onClick={() => handleView(product)} title="View">
                          <VisibilityIcon />
                        </IconButton>
                        <IconButton onClick={() => handleEdit(product)} title="Edit">
                          <EditIcon />
                        </IconButton>
                        <IconButton onClick={() => handleDelete(product)} title="Delete">
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
      )}
      {activeButton === "newProduct" && <NewProduct />}
      {activeButton === "viewProduct" && <ViewProduct clickedProduct={clickedProduct}/>}
      {activeButton === "EditProduct" && <EditProduct clickedProduct={clickedProduct}/>}
    </Container>
  );
}
