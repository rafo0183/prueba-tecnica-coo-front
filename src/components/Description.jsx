import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

const Description = ({value, onChange}) => {
    return(
    <div>
        <FloatingLabel
            controlId="floatingTextarea"
            label="Descripción"
            className="mb-3"
        >
            <Form.Control 
                required
                as="textarea" 
                placeholder="Leave a comment here" 
                value={value}
                onChange={onChange}
            />
        </FloatingLabel>
    </div>
    )
}

export default Description;