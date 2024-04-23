/* eslint-disable */
import React, { useEffect, useState } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Iconify from 'src/components/iconify';
import Pagination from '@mui/material/Pagination';
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
import './CategoriesView.css';
import { getAllCategory, deleteCategory } from 'src/api/api';
import NewCategory from './NewCategory.jsx';
import Swal from 'sweetalert2';

export default function CategoriesView() {
  const [allCatagory, setAllCatagory] = useState([]);
  const [filteredCategories, setFilteredCategories] = useState([]);
  const [editCategoryData, setEditCategoryData] = useState([]);

  const [activeButton, setActiveButton] = useState('category');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOption, setSortOption] = useState('');

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; // Number of items per page
  const totalPages = Math.ceil(filteredCategories.length / itemsPerPage);

  const handleNewCategoryButtonClick = () => {
    console.log('Clicked on New Category');
    setActiveButton('newCategory');
  };

  const dummyCategories = [
    {
      name: 'Product 1',
      image: { original: 'https://example.com/image1.jpg' },
      icon: 'icon1',
      slug: 'product-1',
      productCount: 100,
    },
    {
      name: 'Product 2',
      image: { original: 'https://example.com/image2.jpg' },
      icon: 'icon2',
      slug: 'product-2',
      productCount: 150,
    },
    {
      name: 'Product 3',
      image: { original: 'https://example.com/image3.jpg' },
      icon: 'icon3',
      slug: 'product-3',
      productCount: 200,
    },
    {
      name: 'Product 4',
      image: { original: 'https://example.com/image4.jpg' },
      icon: 'icon4',
      slug: 'product-4',
      productCount: 80,
    },
    {
      name: 'Product 5',
      image: { original: 'https://example.com/image5.jpg' },
      icon: 'icon5',
      slug: 'product-5',
      productCount: 120,
    },
    {
      name: 'Product 6',
      image: { original: 'https://example.com/image6.jpg' },
      icon: 'icon6',
      slug: 'product-6',
      productCount: 90,
    },
    {
      name: 'Product 7',
      image: { original: 'https://example.com/image7.jpg' },
      icon: 'icon7',
      slug: 'product-7',
      productCount: 110,
    },
    {
      name: 'Product 8',
      image: { original: 'https://example.com/image8.jpg' },
      icon: 'icon8',
      slug: 'product-8',
      productCount: 130,
    },
    {
      name: 'Product 9',
      image: { original: 'https://example.com/image9.jpg' },
      icon: 'icon9',
      slug: 'product-9',
      productCount: 100,
    },
    {
      name: 'Product 10',
      image: { original: 'https://example.com/image10.jpg' },
      icon: 'icon10',
      slug: 'product-10',
      productCount: 160,
    },
    {
      name: 'Product 11',
      image: { original: 'https://example.com/image11.jpg' },
      icon: 'icon11',
      slug: 'product-11',
      productCount: 170,
    },
    {
      name: 'Product 12',
      image: { original: 'https://example.com/image12.jpg' },
      icon: 'icon12',
      slug: 'product-12',
      productCount: 140,
    },
    {
      name: 'Product 13',
      image: { original: 'https://example.com/image13.jpg' },
      icon: 'icon13',
      slug: 'product-13',
      productCount: 200,
    },
    {
      name: 'Product 14',
      image: { original: 'https://example.com/image14.jpg' },
      icon: 'icon14',
      slug: 'product-14',
      productCount: 190,
    },
    {
      name: 'Product 15',
      image: { original: 'https://example.com/image15.jpg' },
      icon: 'icon15',
      slug: 'product-15',
      productCount: 180,
    },
    {
      name: 'Product 16',
      image: { original: 'https://example.com/image16.jpg' },
      icon: 'icon16',
      slug: 'product-16',
      productCount: 150,
    },
    {
      name: 'Product 17',
      image: { original: 'https://example.com/image17.jpg' },
      icon: 'icon17',
      slug: 'product-17',
      productCount: 100,
    },
    {
      name: 'Product 18',
      image: { original: 'https://example.com/image18.jpg' },
      icon: 'icon18',
      slug: 'product-18',
      productCount: 110,
    },
    {
      name: 'Product 19',
      image: { original: 'https://example.com/image19.jpg' },
      icon: 'icon19',
      slug: 'product-19',
      productCount: 130,
    },
    {
      name: 'Product 20',
      image: { original: 'https://example.com/image20.jpg' },
      icon: 'icon20',
      slug: 'product-20',
      productCount: 120,
    },
  ];

  const handleView = (categoryId) => {
    console.log(`View category with ID: ${categoryId}`);
  };

  const handleEdit = (categoryId) => {
    const categoryToEdit = allCatagory.find((category) => category._id === categoryId);
    setActiveButton('newCategory');
    setEditCategoryData(categoryToEdit);
  };

  const handleDelete = async (catagoryId) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await deleteCategory(catagoryId); // Make API call to delete the banner
          Swal.fire({
            title: 'Deleted!',
            text: 'Your banner has been deleted.',
            icon: 'success',
          });
          // Refresh the list of banners after deletion
          loadData();
        } catch (error) {
          console.error('Error deleting banner:', error);
          Swal.fire({
            title: 'Error!',
            text: 'Failed to delete the banner.',
            icon: 'error',
          });
        }
      }
    });
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSort = (event) => {
    setSortOption(event.target.value);
  };

  useEffect(() => {
    if (allCatagory.length > 0) {
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
      setFilteredCategories(filteredCategorie);
    }
  }, [allCatagory]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const data = await getAllCategory();
    setAllCatagory(data?.data);
  };
  console.log('all catagory, filteredCategories', filteredCategories);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  const displayedCategories = filteredCategories.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <Container>
      {activeButton === 'category' && (
        <div>
          <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
            <Typography variant="h4">Categories</Typography>

            <Button
              onClick={handleNewCategoryButtonClick}
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
                  <th>Image</th>
                  <th>Icon</th>
                  <th>slug</th>
                  <th>Product Count</th>
                  {/* <th>Banner</th> */}
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {displayedCategories && displayedCategories.length > 0 ? (
                  displayedCategories.map((category, index) => (
                    <tr key={category._id}>
                      <td>{index + 1}</td>
                      <td>{category.name}</td>
                      <td>
                        <img
                          src={category.image.original}
                          alt={category.name}
                          style={{ maxWidth: '100px' }}
                        />
                      </td>
                      <td>
                        <img src={category.icon} alt={category.name} style={{ maxWidth: '30px' }} />
                      </td>
                      <td>{category.slug}</td>

                      <td>{category.productCount}</td>
                      {/* <td>{category.banner}</td> */}
                      <td>
                        {/* <IconButton onClick={() => handleView(category.id)} title="View">
                                                    <VisibilityIcon />
                                                </IconButton> */}
                        <IconButton onClick={() => handleEdit(category._id)} title="Edit">
                          <EditIcon className="green" />
                        </IconButton>
                        <IconButton onClick={() => handleDelete(category._id)} title="Delete">
                          <DeleteIcon className="red" />
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
        </div>
      )}
      {activeButton === 'newCategory' && <NewCategory categoryDataToEdit={editCategoryData} />}
    </Container>
  );
}
