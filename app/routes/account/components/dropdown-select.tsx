import { useState } from 'react';
import Form from 'react-bootstrap/Form';

type DropDownSelectProps = {
  options: string[];
  width: string;
};

function DropDownSelect(props : DropDownSelectProps) {

  const [selectedOption, setSelectedOption] = useState('');
    const handleSelectChange = (e : any) => {
        setSelectedOption(e.target.value);
    };

  return (
    <div style={{width: props.width}}>
      <Form.Select size="sm" value={selectedOption} onChange={handleSelectChange}>
        <option disabled>Select</option>
        {props.options.map((i: string) => (
          <option key={i} value={i}>{i}</option>
        ))}
      </Form.Select>
    </div>
  );
}

export default DropDownSelect;