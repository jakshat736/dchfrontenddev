import { Grid, Button } from '@mui/material';
import React, { useState } from 'react';

export default function MyComponent() {
    const [count, setCount] = useState(0);
  const [operation, setOperation] = useState('+');

  const handleButtonClick = () => {
    if (operation === '+') {
      setCount(count + 1);
    } else if (operation === '-') {
      if (count > 0) {
        setCount(count - 1);
      }
    }
    setOperation(operation === '+' ? '-' : '+');
  };
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Button
          variant="outlined"
          size="large"
          sx={{
            width: 150, // Customize the width as needed
            color: 'green', 
          }}
        >
          ADD
        </Button>
      </Grid>
    </Grid>
  );
}

