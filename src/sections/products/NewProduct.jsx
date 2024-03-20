/* eslint-disable */
import React, { useEffect, useState } from "react";

import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { Checkbox, FormControl, FormControlLabel, InputLabel, MenuItem, Radio, RadioGroup, Select, TextField } from "@mui/material";

import { createProductAPI } from "src/api/api";

import OutlinedInput from "@mui/material/OutlinedInput";
import ListItemText from "@mui/material/ListItemText";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const tagsValue = ["Casual", "Cotton"];

const variationsValue = ["Small", "Medium", "Extra Large"];

const colorsValue = ["Red", "Green", "Orange"];

const NewProduct = () => {
  const [tags, setTags] = React.useState([]);
  const [color, setColor] = React.useState([]);
  const [variations, setVariations] = React.useState([]);

  const [productData, setProductData] = useState({
    name: "",
    slug: "",
    sku: "N/A",
    description: "",
    price: "",
    sale_price: "",
    quantity: "",
    category: { id: 1, name: "kids", slug: "kids" },
    tags: [],
    image: null,
    gallery: [],
    variations: [],
    meta: [],
    gender: [],
    customizable: false,
    type: "Normal",
  });


  console.log('tags', tags);
  console.log('color', color);
  console.log('variations', variations);

  const handleTagChange = (name, event) => {
    const {
      target: { value },
    } = event;

    if (name === 'tags') {
      setTags(
        typeof value === "string" ? value.split(",") : value
      );
    }
    if (name === 'colors') {
      setColor(
        typeof value === "string" ? value.split(",") : value
      );
    }
    if (name === 'variations') {
      setVariations(
        typeof value === "string" ? value.split(",") : value
      );
    }

  };

  const handleChange = (event) => {
    const { name, value, checked } = event.target;
    setProductData((prevData) => ({
      ...prevData,
      [name]: name === "customizable" ? checked : value,
    }));
  };

  const handleRadioChange = (event) => {
    const { name, value } = event.target;
    console.log(name, value)
    setProductData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };


  const handleInputChange = (event) => {
    const { name, value, files } = event.target;
    if (files) {

      if (name === "image") {
        setProductData((prevState) => ({
          ...prevState,
          image: files[0],
        }));
      } else if (name === "gallery") {
        const selectedFiles = Array.from(files).slice(0, 10);
        setProductData((prevState) => ({
          ...prevState,
          gallery: selectedFiles,
        }));
      }
    } else {
      setProductData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    if (checked) {
      setProductData({
        ...productData,
        gender: [...productData.gender, name],
      });
    } else {
      setProductData({
        ...productData,
        gender: productData.gender.filter((gender) => gender !== name),
      });
    }
  };

  const handleCreateProduct = async () => {
    try {
      const formData = new FormData();
      formData.append("image", productData.image);
      formData.append("name", productData.name);
      formData.append("slug", productData.slug);
      formData.append("sku", productData.sku);
      formData.append("description", productData.description);
      formData.append("price", productData.price);
      formData.append("sale_price", productData.sale_price);
      formData.append("quantity", productData.quantity);
      formData.append("category", JSON.stringify(productData.category));
      formData.append("tags", JSON.stringify(productData.tags));
      formData.append("gender", JSON.stringify(productData.gender));
      formData.append("customizable", productData.customizable);
      formData.append("variations", productData.variations);
      formData.append("meta", productData.meta);
      formData.append("type", productData.type);

      productData.gallery.forEach((image, index) => {
        formData.append(`gallery`, image);
      });

      const response = await createProductAPI(formData);
      console.log("Product created successfully:", response);
    } catch (error) {
      console.error("Error creating product:", error);
    }
  };


  console.log("productData", productData);
  return (
    <div>
      <Typography variant="h4">Create a new product</Typography>
      <div className="create-product-details-yok">
        <div className="create-product-details-and-title-para-yok">
          <Typography variant="h6">Details</Typography>
          <p>Title, short description, image...</p>
        </div>
        <div className="create-product-details-product-name-image-yok">
          <div>
            <TextField
              className="create-product-input-box-two-yok"
              id="outlined-basic"
              label="Product name"
              variant="outlined"
              name="name"
              value={productData.name}
              onChange={handleChange}
            />
          </div>

          <div className="mt-4">
            <FormControl fullWidth>
              <InputLabel id="demo-multiple-checkbox-label">Tag</InputLabel>
              <Select
                labelId="demo-multiple-checkbox-label"
                id="tag-multiple-checkbox"
                multiple
                value={tags}
                onChange={(event) => handleTagChange('tags', event)}
                input={<OutlinedInput label="Tag" />}
                renderValue={(selected) => selected.join(", ")}
                MenuProps={MenuProps}
              >
                {tagsValue.map((name) => (
                  <MenuItem key={name} value={name}>
                    <Checkbox checked={tags.indexOf(name) > -1} />
                    <ListItemText primary={name} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
          <div className="mt-4">
            <textarea
              style={{ height: "80px" }}
              className="create-product-input-box"
              placeholder="Description"
              label="Description"
              name="description"
              onChange={handleChange}
            ></textarea>
          </div>

          <div className="mt-3">
            <div className="Neon Neon-theme-dragdropbox">
              <input
                style={{
                  opacity: 0,
                  width: "100%",
                  height: "99px",
                  position: "absolute",
                  right: "0px",
                  left: "0px",
                }}
                accept="image/*"
                id="image-upload"
                multiple="false"
                name="image"
                type="file"
                onChange={handleInputChange}
              />
              <div className="Neon-input-dragDrop">
                <div className="Neon-input-inner">
                  <div className="Neon-input-icon">
                    <i className="fa fa-file-image-o"></i>
                  </div>
                  <div className="Neon-input-text">
                    <h3>Upload an image</h3>{" "}
                  </div>
                  <a className="Neon-input-choose-btn blue">
                    Click to upload image
                  </a>
                </div>
                {productData.image && (
                  <div>
                    <Typography variant="subtitle1">Selected Image:</Typography>
                    <img
                      src={URL.createObjectURL(productData.image)}
                      alt="Selected"
                      style={{ maxWidth: "100px", maxHeight: "100px" }}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="mt-3">
            <div className="Neon Neon-theme-dragdropbox">
              <input
                style={{
                  opacity: 0,
                  width: "100%",
                  height: "99px",
                  position: "absolute",
                  right: "0px",
                  left: "0px",
                }}
                accept="image/*"
                id="gallery-upload"
                multiple="multiple"
                name="gallery"
                type="file"
                onChange={handleInputChange}
              />
              <div className="Neon-input-dragDrop">
                <div className="Neon-input-inner">
                  <div className="Neon-input-icon">
                    <i className="fa fa-file-image-o"></i>
                  </div>
                  <div className="Neon-input-text">
                    <h3>Gallery</h3>{" "}
                  </div>
                  <a className="Neon-input-choose-btn blue">
                    Click to upload image
                  </a>
                </div>
              </div>
            </div>
            {productData.gallery.length > 0 && (
              <div>
                <Typography variant="subtitle1">
                  Selected Gallery Images:
                </Typography>
                {productData.gallery.map((image, index) => (
                  <img
                    key={index}
                    src={URL.createObjectURL(image)}
                    alt={`Selected ${index + 1}`}
                    style={{
                      maxWidth: "100px",
                      maxHeight: "100px",
                      marginRight: "5px",
                    }}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="create-product-details-yok">
        <div className="create-product-details-and-title-para-yok">
          <Typography variant="h6">Pricing</Typography>
          <p>Price related inputs</p>
        </div>
        <div className="create-product-details-product-name-image-yok">
          <div>
            <TextField
              className="create-product-input-box-two-yok"
              id="outlined-basic"
              label="Regular Price"
              variant="outlined"
              name="price"
              value={productData.price}
              onChange={handleChange}
            />
          </div>

          <div className="mt-4">
            <TextField
              className="create-product-input-box-two-yok"
              id="sale_price"
              label="Sale Price"
              variant="outlined"
              name="sale_price"
              value={productData.sale_price}
              onChange={handleChange}
            />
          </div>

          <div className="mt-4">
            <TextField
              className="create-product-input-box-two-yok"
              id="quantity"
              label="Quantity"
              variant="outlined"
              name="quantity"
              onChange={handleChange}
            />
          </div>
        </div>
      </div>

      <div className="create-product-details-yok">
        <div className="create-product-details-and-title-para-yok">
          <Typography variant="h6">Properties</Typography>
          <p>Additional functions and attributes...</p>
        </div>
        <div className="create-product-details-product-name-image-yok">
          <div className="mt-4">
            <FormControl fullWidth>
              <InputLabel id="demo-multiple-checkbox-label">Colors</InputLabel>
              <Select
                labelId="demo-multiple-checkbox-label"
                id="color-multiple-checkbox"
                multiple
                value={color}
                onChange={(event) => handleTagChange('colors', event)}
                input={<OutlinedInput label="Colors" />}
                renderValue={(selected) => selected.join(", ")}
                MenuProps={MenuProps}
              >
                {colorsValue.map((name) => (
                  <MenuItem key={name} value={name}>
                    <Checkbox checked={color.indexOf(name) > -1} />
                    <ListItemText primary={name} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>

          <div className="mt-4">
            <FormControl fullWidth>
              <InputLabel id="demo-multiple-checkbox-label">
                Variations
              </InputLabel>
              <Select
                labelId="demo-multiple-checkbox-label"
                id="demo-multiple-checkbox"
                multiple
                value={variations}
                onChange={(event) => handleTagChange('variations', event)}
                input={<OutlinedInput label="Variations" />}
                renderValue={(selected) => selected.join(", ")}
                MenuProps={MenuProps}
              >
                {variationsValue.map((name) => (
                  <MenuItem key={name} value={name}>
                    <Checkbox checked={variations.indexOf(name) > -1} />
                    <ListItemText primary={name} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>

          <div className="mt-4">
            <p>Category</p>
            <div className="flex">
              <FormControlLabel
                control={<Checkbox />}
                label="Male"
                name="Male"
                checked={productData.gender.includes("Male")}
                onChange={handleCheckboxChange}
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Women"
                name="Women"
                checked={productData.gender.includes("Women")}
                onChange={handleCheckboxChange}
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Kids"
                name="Kids"
                checked={productData.gender.includes("Kids")}
                onChange={handleCheckboxChange}
              />
            </div>
          </div>
          <div className="mt-4">
            <FormControlLabel
              fullWidth
              control={
                <Checkbox
                  checked={productData.customizable}
                  name="customizable"
                  onChange={(event) => handleChange(event)}
                />
              }
              label="Customizable"
            />
          </div>

          <div className="mt-4">
            <FormControl component="fieldset">
              <RadioGroup
                row
                aria-label="Type"
                name="type"
                value={productData.type}
                onChange={handleRadioChange}
              >
                <FormControlLabel
                  value="Normal"
                  control={<Radio />}
                  label="Normal"
                />
                <FormControlLabel
                  value="Custom"
                  control={<Radio />}
                  label="Custom"
                />
                <FormControlLabel
                  value="Combo"
                  control={<Radio />}
                  label="Combo"
                />
              </RadioGroup>
            </FormControl>
          </div>

          <div className="mt-4">
            <textarea
              style={{ height: "80px" }}
              className="create-product-input-box"
              placeholder="Product Details"
              label="Product Details"
              name="productDetails"
              onChange={handleChange}
            ></textarea>
          </div>

          <div className="mt-4">
            <textarea
              style={{ height: "80px" }}
              className="create-product-input-box"
              placeholder="Additional Information"
              label="Additional Information"
              name="additionalInformation"
              onChange={handleChange}
            ></textarea>
          </div>

          <div className="mt-4">
            <textarea
              style={{ height: "80px" }}
              className="create-product-input-box"
              placeholder="Customer Reviews"
              label="Customer Reviews"
              name="customerReviews"
              onChange={handleChange}
            ></textarea>
          </div>
        </div>
      </div>

      <div className="create-product-button-yok">
        <Button
          onClick={handleCreateProduct}
          variant="contained"
          color="inherit"
        >
          Create Product
        </Button>
      </div>
    </div>
  );
};

export default NewProduct;
