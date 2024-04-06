/* eslint-disable */
import React, { useState } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import {
  TextField,
} from "@mui/material";

export default function PaymentSetting() {
    const [name, setName] = useState('')
    const [key, setKey] = useState('')
  const handleCreateProduct = () => {

  }

  const handleChange = (e,name) => {
    let value = e.target.value
    if(name === 'name'){
        setName(value)
    }
    if(name === 'key'){
        setKey(value)
    }
  }

  console.log('name', name);
  console.log('key', key);

  return (
    <Container>
      <div>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          mb={5}
        >
          <Typography variant="h4">Payment Setting</Typography>
        </Stack>

        <div className="create-product-details-product-name-image-ds">
          <div>
            <TextField
              className="create-product-input-box-two-yokk"
              id="outlined-basic"
              label="Name"
              variant="outlined"
              name="name"
              value={name}
              onChange={(e) => handleChange(e, 'name')}
            />
          </div>
          <div className="mt-4">
            <textarea
              style={{ height: "80px" }}
              className="payment-input-box"
              placeholder="Key"
              label="Key"
              name="Key"
              value={key}
              onChange={(e) => handleChange(e,'key')}
            ></textarea>
          </div>
          <div className="create-product-button-yok">
        <Button
          onClick={handleCreateProduct}
          variant="contained"
          color="inherit"
          style={{marginTop: '15px'}}
        >
          Submit
        </Button>
      </div>
        </div>
      </div>
    </Container>
  );
}
