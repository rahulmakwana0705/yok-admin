/* eslint-disable */
import React, { useEffect, useState } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Iconify from "src/components/iconify";
import { Box, Checkbox, FormControl, FormControlLabel, FormGroup, IconButton, InputAdornment, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import "./CategoriesView.css";
import { getAllCategory } from "src/api/api";
// import NewCategory from "../NewCategory";

export default function CategoriesView() {
    const [allCatagory, setAllCatagory] = useState([]);
    const [filteredCategories, setFilteredCategories] = useState([])

    const [activeButton, setActiveButton] = useState("category");
    const [searchTerm, setSearchTerm] = useState('');
    const [sortOption, setSortOption] = useState('');

    const handleNewCategoryButtonClick = () => {
        console.log("Clicked on New Category");
        setActiveButton("newCategory");
    };

    const dummyCategories = [
        { id: 1, name: 'Category A', parentCategory: 'Parent A', orderLevel: 1, banner: 'Banner A' },
        { id: 2, name: 'Category B', parentCategory: 'Parent B', orderLevel: 2, banner: 'Banner B' },
        { id: 3, name: 'Category C', parentCategory: 'Parent C', orderLevel: 3, banner: 'Banner C' },
    ];

    const handleView = (categoryId) => {
        console.log(`View category with ID: ${categoryId}`);
    };

    const handleEdit = (categoryId) => {
        console.log(`Edit category with ID: ${categoryId}`);
    };

    const handleDelete = (categoryId) => {
        console.log(`Delete category with ID: ${categoryId}`);
    };

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSort = (event) => {
        setSortOption(event.target.value);
    };

    useEffect(() => {
        if(allCatagory.length > 0){
            const filteredCategorie = allCatagory
            .filter((category) => {
                const searchTermLower = searchTerm.toLowerCase();
                return Object.values(category).some(
                    (value) => typeof value === 'string' && value.toLowerCase().includes(searchTermLower)
                );
            })
            .sort((a, b) => {
                if (sortOption === 'OrderLevelHighToLow') {
                    return a.orderLevel > b.orderLevel ? -1 : 1;
                } else if (sortOption === 'OrderLevelLowToHigh') {
                    return a.orderLevel < b.orderLevel ? -1 : 1;
                }
                return 0;
            });
            setFilteredCategories(filteredCategorie)
        }
    }, [allCatagory])
    

    useEffect(() => {
        loadData();
    }, [])

    const loadData = async() => {
        const data = await getAllCategory()
        setAllCatagory(data?.data)
    }
    console.log('all catagory, filteredCategories',filteredCategories);

    return (
        <Container>
            {activeButton === "category" && (
                <div>
                    <Stack
                        direction="row"
                        alignItems="center"
                        justifyContent="space-between"
                        mb={5}
                    >
                        <Typography variant="h4">Categories</Typography>

                        <Button
                            // onClick={handleNewCategoryButtonClick}
                            variant="contained"
                            color="inherit"
                            startIcon={<Iconify icon="eva:plus-fill" />}
                        >
                            New Category
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
                                <MenuItem value="OrderLevelHighToLow">Order Level (High &gt; Low)</MenuItem>
                                <MenuItem value="OrderLevelLowToHigh">Order Level (Low &gt; High)</MenuItem>
                            </Select>
                        </FormControl>
                    </Stack>

                    <div className="table-container">
                        <table className="category-table">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Parent Category</th>
                                    <th>Order Level</th>
                                    <th>Banner</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredCategories && filteredCategories.length > 0 ? (
                                    filteredCategories.map((category, index) => (
                                        <tr key={category._id}>
                                            <td>{index+1}</td>
                                            <td>{category.name}</td>
                                            <td>{category.slug}</td>
                                            <td>{category.productCount}</td>
                                            <td>{category.banner}</td>
                                            <td>
                                                <IconButton onClick={() => handleView(category.id)} title="View">
                                                    <VisibilityIcon />
                                                </IconButton>
                                                <IconButton onClick={() => handleEdit(category.id)} title="Edit">
                                                    <EditIcon />
                                                </IconButton>
                                                <IconButton onClick={() => handleDelete(category.id)} title="Delete">
                                                    <DeleteIcon />
                                                </IconButton>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="6">No categories found</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
            {/* {activeButton === "newCategory" && <NewCategory />} */}
        </Container>
    );
}
