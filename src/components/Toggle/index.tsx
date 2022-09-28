import React, { useState } from "react";
import { Container, ToggleLabel, ToggleSelector } from './styles';

const Toggle: React.FC = () => {
  const [checked, setChecked] = useState(false);

  const handleChange = (status: boolean) => {
    setChecked(status);
  }

  return (
    <Container>
      <ToggleLabel>Light</ToggleLabel>
      <ToggleSelector
        checked={checked}
        uncheckedIcon={false}
        checkedIcon={false}
        onChange={(checked) => handleChange(checked)}
      />
      <ToggleLabel>Dark</ToggleLabel>
    </Container>
  );
}

export default Toggle;