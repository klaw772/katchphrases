import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

export const DisclaimerModal = () => {
  const [showModal, setShowModal] = useState(true);
  const handleClose = () => setShowModal(false);

  return (
    <Modal show={showModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Welcome to Katchphrases!</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p> This is a soundboard of the ridiculous things that I say.</p>
        <p>
          {" "}
          For best quality, <strong>please turn your volume up!</strong>
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
