/* eslint-disable */
import React, { useState } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { TextField } from "@mui/material";
import phonePayLogo from "../../../src/images/PhonePe-Logo.wine.png";
import rogerpayLogo from "../../../src/images/Razorpay_logo.svg";
import "./PaymentSetting.css";
import Switch from "@mui/material/Switch";

const label = { inputProps: { "aria-label": "Switch demo" } };

export default function PaymentSetting() {
  const [rogorPay, setrogorPay] = useState(true)
  const [phonePay, setPhonePay] = useState(false)
  const [secret, setSecret] = useState("");
  const [key, setKey] = useState("");

  const handleCreateProduct = () => {};

  const handleChange = (e, name) => {
    let value = e.target.value;
    if (name === "Secret") {
      setSecret(value);
    }
    if (name === "key") {
      setKey(value);
    }
  };

  const handlePhonePayClick = (event) => {
    setPhonePay(!phonePay)
    setrogorPay(!rogorPay)
  }
  const handlerogorPayClick = (event) => {
    setrogorPay(!rogorPay)
    setPhonePay(!phonePay)
  }

  console.log("phnepay", phonePay);
  console.log("key", key);

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
        <div>
          <div className="payment-options-yok">
            <div className="payment-option-single-yok">
              <img width={'300px'} className="payment-option-image-yok" src={rogerpayLogo} />
              <div className="payment-option-toggle-btn-yok">
                <Switch onChange={handlePhonePayClick} {...label} checked={rogorPay} />
              </div>
            </div>
            <div className="payment-option-single-yok">
              <img width={'400px'} className="payment-option-image-yok" src={phonePayLogo} />
              <div className="payment-option-toggle-btn-yok">
                <Switch onChange={handlerogorPayClick} {...label} checked={phonePay} />
              </div>
            </div>
          </div>
        </div>
        <div className="create-product-details-product-name-image-ds">
          <div>
            <TextField
              className="create-product-input-box-two-yokk"
              id="outlined-basic"
              label="key"
              variant="outlined"
              name="key"
              value={key}
              onChange={(e) => handleChange(e, "key")}
            />
          </div>
          <div className="mt-4">
            <textarea
              style={{ height: "80px" }}
              className="payment-input-box"
              placeholder="Secret"
              label="Secret"
              name="Secret"
              value={secret}
              onChange={(e) => handleChange(e, "Secret")}
            ></textarea>
          </div>
          <div className="create-product-button-yok">
            <Button
              onClick={handleCreateProduct}
              variant="contained"
              color="inherit"
              style={{ marginTop: "15px" }}
            >
              Submit
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
}
