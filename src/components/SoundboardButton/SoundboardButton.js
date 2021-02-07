import React from "react";

export const SoundboardButton = ({ anecdote }) => {
  return <button data-testid="soundboard-button">{anecdote}</button>;
};
