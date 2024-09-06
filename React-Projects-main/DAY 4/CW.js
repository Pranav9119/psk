mport React, { useState } from 'react';
import { TextField, Autocomplete, Button, Box, Typography } from '@mui/material';

const FruitSurvey = () => {
  const [name, setName] = useState('');
  const [fruit, setFruit] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const fruits = ['Apple', 'Banana', 'Cherry', 'Durian', 'Elderberry'];

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

