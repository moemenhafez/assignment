import { useState } from 'react';
import Slider from '@mui/material/Slider';

function slider() {
  const [value, setValue] = useState(50);

  return (
    <div style={{ width: 300 }}>
      <Slider
        value={value}
        onChange={(e, newValue) => setValue(newValue)}
        valueLabelDisplay="on"
      />
      <p>Value: {value}</p>
    </div>
  );
}

export default slider;