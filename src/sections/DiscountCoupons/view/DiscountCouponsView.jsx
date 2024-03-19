/* eslint-disable */
import React, { useState } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";

import Iconify from "src/components/iconify";

import "./DiscountCoupons.css";
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
} from "@mui/material";
// import NewProduct from "../NewProduct";

export default function DiscountCouponsView() {
  const [activeButton, setActiveButton] = useState("product");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("");
  const [newCouponForm, setNewCouponForm] = useState({
    coupon: "",
    startDate: "",
    endDate: "",
    discount: "",
    quantity: "",
    status: "",
  });
  const handleNewProductButtonClick = () => {
    console.log("cli");
    setActiveButton("newProduct");
    // navigate('/product/add-product')
  };
  const dummyCoupons = [
    {
      id: 1,
      coupon: "YOK10",
      startDate: "2022-01-01",
      endDate: "2022-01-31",
      discount: "10%",
      quantity: 50,
      status: "Active",
    },
    {
      id: 2,
      coupon: "NEWUSER",
      startDate: "2022-02-01",
      endDate: "2022-02-28",
      discount: "20%",
      quantity: 30,
      status: "Inactive",
    },
    {
      id: 3,
      coupon: "GRAB10",
      startDate: "2022-03-01",
      endDate: "2022-03-31",
      discount: "15%",
      quantity: 25,
      status: "Active",
    },
    {
      id: 4,
      coupon: "FESTOFF",
      startDate: "2022-04-01",
      endDate: "2022-04-30",
      discount: "12%",
      quantity: 40,
      status: "Inactive",
    },
    {
      id: 5,
      coupon: "Coupon",
      startDate: "2022-05-01",
      endDate: "2022-05-31",
      discount: "18%",
      quantity: 20,
      status: "Active",
    },
    {
      id: 6,
      coupon: "AXY",
      startDate: "2022-06-01",
      endDate: "2022-06-30",
      discount: "25%",
      quantity: 15,
      status: "Inactive",
    },
    {
      id: 7,
      coupon: "KASJUD",
      startDate: "2022-07-01",
      endDate: "2022-07-31",
      discount: "30%",
      quantity: 10,
      status: "Active",
    },
    {
      id: 8,
      coupon: "IUAUS",
      startDate: "2022-08-01",
      endDate: "2022-08-31",
      discount: "22%",
      quantity: 35,
      status: "Inactive",
    },
    {
      id: 9,
      coupon: "dksIJKds",
      startDate: "2022-09-01",
      endDate: "2022-09-30",
      discount: "17%",
      quantity: 28,
      status: "Active",
    },
    {
      id: 10,
      coupon: "NEWCOLL",
      startDate: "2022-10-01",
      endDate: "2022-10-31",
      discount: "14%",
      quantity: 22,
      status: "Inactive",
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
  };
  const sortProducts = (a, b) => {
    switch (sortOption) {
      case "RatingHighToLow":
        return a.id - b.id;
      case "RatingLowToHigh":
        return b.id - a.id;
      case "DiscountLowToHigh":
        return parseFloat(b.discount) - parseFloat(a.discount);
      case "DiscountHighToLow":
        return parseFloat(a.discount) - parseFloat(b.discount);
      default:
        return 0;
    }
  };

  const filteredProducts = dummyCoupons
    .filter((product) => {
      const searchTermLower = searchTerm.toLowerCase();
      return Object.values(product).some(
        (value) =>
          typeof value === "string" &&
          value.toLowerCase().includes(searchTermLower)
      );
    })
    .sort(sortProducts);

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
            <Typography variant="h4">Coupons</Typography>

            <Button
              onClick={handleNewProductButtonClick}
              variant="contained"
              color="inherit"
              startIcon={<Iconify icon="eva:plus-fill" />}
            >
              New Coupon
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
                width: "50%", // Set width to 50%
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
            <FormControl
              variant="outlined"
              sx={{ width: "50%", minWidth: 120 }}
            >
              <InputLabel id="sort-by-label">Sort By</InputLabel>
              <Select
                labelId="sort-by-label"
                id="sort-by"
                label="Sort By"
                value={sortOption}
                onChange={handleSort}
              >
                <MenuItem value="RatingHighToLow">ID (Low to High)</MenuItem>
                <MenuItem value="RatingLowToHigh">ID (High to Low)</MenuItem>
                <MenuItem value="DiscountLowToHigh">Discount (High to Low)</MenuItem>
                <MenuItem value="DiscountHighToLow">Discount (Low to High)</MenuItem>
              </Select>
            </FormControl>
          </Stack>
          <div className="table-container">
            <table className="product-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Coupon</th>
                  {/* <th>Minimum Amount</th> */}
                  <th>Start Date</th>
                  <th>End Date</th>
                  <th>Discount</th>
                  <th>Quantity</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredProducts && filteredProducts.length > 0 ? (
                  filteredProducts.map((product) => (
                    <tr key={product.id}>
                      <td>{product.id}</td>
                      <td>{product.coupon}</td>
                      <td>{product.startDate}</td>
                      <td>{product.endDate}</td>
                      <td>{product.discount}</td>
                      <td>{product.quantity}</td>
                      <td>{product.status}</td>
                      <td>
                        <IconButton
                          onClick={() => handleView(product.id)}
                          title="View"
                        >
                          <VisibilityIcon />
                        </IconButton>
                        <IconButton
                          onClick={() => handleEdit(product.id)}
                          title="Edit"
                        >
                          <EditIcon />
                        </IconButton>
                        <IconButton
                          onClick={() => handleDelete(product.id)}
                          title="Delete"
                        >
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
      <form>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          spacing={2} // Add some gap between the components
          mb={5}
        >
          {/* Add form fields for new coupon */}
          <TextField
            label="Coupon"
            value={newCouponForm.coupon}
            onChange={(e) => handleNewCouponFormChange("coupon", e.target.value)}
          />
          <TextField
            type="date"
            value={newCouponForm.startDate}
            onChange={(e) => handleNewCouponFormChange("startDate", e.target.value)}
          />
          <TextField
            type="date"
            value={newCouponForm.endDate}
            onChange={(e) => handleNewCouponFormChange("endDate", e.target.value)}
          />
          <TextField
            label="Discount"
            value={newCouponForm.discount}
            onChange={(e) => handleNewCouponFormChange("discount", e.target.value)}
          />
          <TextField
            label="Quantity"
            type="number"
            value={newCouponForm.quantity}
            onChange={(e) => handleNewCouponFormChange("quantity", e.target.value)}
          />
          <TextField
            label="Status"
            value={newCouponForm.status}
            onChange={(e) => handleNewCouponFormChange("status", e.target.value)}
          />
        </Stack>
        <Button
          onClick={"sss"}
          variant="contained"
          color="primary"
          startIcon={<Iconify icon="eva:plus-fill" />}
        >
          Add Coupon
        </Button>
      </form>
    </Container>
  );
}
