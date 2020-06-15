export const INCREMENT_COUNTER = 'increment_counter';
export const DECREMENT_COUNTER = 'decrement_counter';
export const RESET_COUNTER = 'reset_counter';

export function incrementValue() {
  return {
    type: INCREMENT_COUNTER,
  };
}

export function decrementValue() {
  return {
    type: DECREMENT_COUNTER,
  };
}

export function resetValue() {
  return {
    type: RESET_COUNTER,
  };
}
