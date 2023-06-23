import { Button, Form, Modal } from "react-bootstrap";
import { useRef } from "react";

function AddBudgetModal({ show, handleClose }) {
  const nameRef = useRef();
  const maxRef = useRef();
  function handleSubmit(e) {}
  function handleAdd() {}
  return (
    <Modal show={show} onHide={handleClose}>
      <Form onSubmit={handleSubmit}>
        <Modal.Header closeButton>
          <Modal.Title>Add Budget</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control ref={nameRef} type="text" required />
          </Form.Group>

          <Form.Group controlId="max">
            <Form.Label>Maximum Spending</Form.Label>
            <Form.Control ref={maxRef} type="text" required />
          </Form.Group>

          <Button variant="outline-primary" type="submit" onClick={handleAdd}>
            Add
          </Button>
        </Modal.Body>
      </Form>
    </Modal>
  );
}

export default AddBudgetModal;
