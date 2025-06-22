import { useState } from 'react';
import Form from 'react-bootstrap/Form';

function InputField() {
    const [selectedOption, setSelectedOption] = useState('');
        const handleSelectChange = (e : any) => {
            setSelectedOption(e.target.value);
        };
        
  return (
    <Form>
        <Form.Group className="w-35">
            <Form.Control size="sm" value={selectedOption} onChange={handleSelectChange} type="name" placeholder="First Last" />
        </Form.Group>
    </Form>
  );
}

export default InputField;