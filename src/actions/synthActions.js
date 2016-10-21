import * as types from '../constants/actionTypes';

export const noteOn = (note, velocity, channel) => {
  return {
    type: types.NOTE_ON,
    note,
    velocity,
    channel
  };
};

export const noteOff = (note, velocity, channel) => {
  return {
    type: types.NOTE_OFF,
    note,
    velocity,
    channel
  };
};

export const paramChanged = (type, param, value) => {
  return {
    type,
    param,
    value
  };
};

export const octavePrev = () => {
  return {
    type: types.OCTAVE_PREV
  };
};
export const octaveNext = () => {
  return {
    type: types.OCTAVE_NEXT
  };
};

export const stopPlaying = () => {
  return {
    type: types.STOP_PLAYING
  };
};















