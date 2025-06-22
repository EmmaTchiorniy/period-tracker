import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { Colour } from '~/constants/colour';

interface InputFieldProps {
    placeholder : string,
    width : string,
    as : any
}

function InputField(props : InputFieldProps) {
    const [selectedOption, setSelectedOption] = useState('');
        const handleSelectChange = (e : any) => {
            const textarea = e.target;
            textarea.style.height = 'auto';
            textarea.style.height = textarea.scrollHeight + 'px';
            setSelectedOption(textarea.value);
        };
        
  return (
    <Form>
        <Form.Group style={{width: props.width}}>
            <Form.Control size="sm" value={selectedOption} onChange={handleSelectChange} type="name" placeholder={props.placeholder} as={props.as} style={{overflow: 'hidden', resize: 'none', borderRadius: '10px', border: 'none', backgroundColor: '#F5F5F5', paddingLeft: '16px'}}/>
        </Form.Group>
    </Form>
  );
}

export default InputField;