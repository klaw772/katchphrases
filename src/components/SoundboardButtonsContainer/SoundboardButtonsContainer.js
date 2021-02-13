import React from "react";
import { SoundboardButton } from "../SoundboardButton/SoundboardButton";
import buttonsData from "./buttons.json";
import { Row, Col } from "react-bootstrap";
import "./SoundboardButtonsContainer.css";

export const SoundboardButtonsContainer = () => {
  const buttons = buttonsData.buttons.map((button) => {
    return (
      <Col
        xs={12}
        sm={6}
        md={4}
        lg={3}
        key={`${button.katchphrase} column`}
        className="soundboard-buttons-column"
      >
        <SoundboardButton
          key={button.katchphrase}
          anecdote={button.katchphrase}
        />
      </Col>
    );
  });
  return <Row data-testid="soundboard-buttons-container">{buttons}</Row>;
};
