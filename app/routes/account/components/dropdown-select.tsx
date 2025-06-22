import { useState } from 'react';
import Form from 'react-bootstrap/Form';

type DropDownSelectProps = {
  options: string[] | number[];
  width: string;
};

function DropDownSelect(props : DropDownSelectProps) {

  const [selectedOption, setSelectedOption] = useState('Select');
    const handleSelectChange = (e : any) => {
        setSelectedOption(e.target.value);
    };

  return (
    <div style={{width: props.width}}>
      <Form.Select size="sm" value={selectedOption} onChange={handleSelectChange} style={{borderRadius: '10px', border: 'none', backgroundColor: '#F5F5F5', paddingLeft: '16px'}}>
        <option disabled>Select</option>
        {props.options.map((i: string | number) => (
          <option key={i} value={i}>{i}</option>
        ))}
      </Form.Select>
    </div>
  );
}

export default DropDownSelect;