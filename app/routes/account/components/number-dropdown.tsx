import { useState } from 'react';
import Form from 'react-bootstrap/Form';

type DropDownNumProps = {
  options: (number | string) [];
  width: string;
  average: number;
};

function DropDownNumber(props : DropDownNumProps) {

  const [selectedOption, setSelectedOption] = useState(props.average);
    const handleSelectChange = (e : any) => {
        setSelectedOption(e.target.value);
    };

  return (
    <div style={{width: props.width}}>
      <Form.Select size="sm" value={selectedOption} onChange={handleSelectChange}>
        <option disabled>Select</option>
        {props.options.map((i: number | string) => (
          <option key={i} value={i}>{i}</option>
        ))}
      </Form.Select>
    </div>
  );
}

export default DropDownNumber;