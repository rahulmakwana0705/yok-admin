/* eslint-disable */
import React, { useEffect, useState } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { TextField } from '@mui/material';
import phonePayLogo from '../../../src/images/PhonePe-Logo.wine.png';
import rogerpayLogo from '../../../src/images/Razorpay_logo.svg';
import './PaymentSetting.css';
import Switch from '@mui/material/Switch';
import axios from 'axios';
import { getPaymentGatewayKeys } from 'src/api/api';

const label = { inputProps: { 'aria-label': 'Switch demo' } };

export default function PaymentSetting() {
  const [razorpay, setrazorpay] = useState(true);
  const [phonePay, setPhonePay] = useState(false);
  const [secret, setSecret] = useState('');
  const [key, setKey] = useState('');

  const handleCreateProduct = () => {};

  const handleChange = (e, name) => {
    let value = e.target.value;
    if (name === 'Secret') {
      setSecret(value);
    }
    if (name === 'key') {
      setKey(value);
    }
  };

  const handlePhonePayClick = (event) => {
    setPhonePay(!phonePay);
    setrazorpay(!razorpay);
  };

  const handlerazorpayClick = (event) => {
    setrazorpay(!razorpay);
    setPhonePay(!phonePay);
  };

  const getPaymentGatewayKeysHandler = async () => {
    try {
      const response = await getPaymentGatewayKeys();
      console.log('Payment Gateway Keys :: ', response);
      const keys = response.data.keys;
      setKey(keys.key);
      setSecret(keys.secret);
    } catch (error) {
      console.log('Error while getting payment gateway keys :: ', error);
    }
  };

  useEffect(() => {
    getPaymentGatewayKeysHandler();
  }, []);

  console.log('phnepay', phonePay);
  console.log('key', key);

  return (
    <Container>
      <div>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4">Payment Setting</Typography>
        </Stack>
        <div>
          <div className="payment-options-yok">
            <div className="payment-option-single-yok">
              <img width={'260px'} className="payment-option-image-yok" src={rogerpayLogo} />
              <div className="payment-option-toggle-btn-yok">
                <Switch onChange={handlePhonePayClick} {...label} checked={razorpay} />
              </div>
            </div>
            <div className="payment-option-single-yok">
              <img width={'260px'} className="payment-option-image-yok" src={phonePayLogo} />
              <div className="payment-option-toggle-btn-yok">
                <Switch onChange={handlerazorpayClick} {...label} checked={phonePay} />
              </div>
            </div>
          </div>
        </div>
        <div className="create-product-details-product-name-image-ds">
          <div>
            <TextField
              className="create-product-input-box-two-yokk"
              style={{ height: '60px' }}
              id="outlined-basic"
              label="key"
              variant="outlined"
              name="key"
              value={key}
              onChange={(e) => handleChange(e, 'key')}
            />
          </div>
          <div className="mt-4">
            <TextField
              style={{ height: '60px' }}
              className="payment-input-box"
              label="Secret"
              name="Secret"
              value={secret}
              onChange={(e) => handleChange(e, 'Secret')}
            ></TextField>
          </div>
          <div className="create-product-button-yok">
            <Button
              onClick={handleCreateProduct}
              variant="contained"
              color="inherit"
              style={{ marginTop: '15px' }}
            >
              Submit
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
}
