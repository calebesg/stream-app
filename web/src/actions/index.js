import history from '../history';
import {
  CREATE_STREAM,
  FETCH_STREAMS,
  SIGN_IN,
  SIGN_OUT,
  FETCH_STREAM,
  DELETE_STREAM,
  EDIT_STREAM,
} from './types';
import streams from '../apis/streams';

export const signIn = userId => {
  return {
    type: SIGN_IN,
    payload: userId,
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT,
  };
};

export const createStreamy = formValue => async (dispatch, getState) => {
  const { userId } = getState().auth;

  const response = await streams.post('/streams', { ...formValue, userId });

  dispatch({
    type: CREATE_STREAM,
    payload: response.data,
  });

  history.push('/');
};

export const fetchStreams = () => async dispatch => {
  const response = await streams.get('/streams');
  dispatch({
    type: FETCH_STREAMS,
    payload: response.data,
  });
};

export const fetchStream = id => async dispatch => {
  const response = await streams.get(`/streams/${id}`);
  dispatch({
    type: FETCH_STREAM,
    payload: response.data,
  });
};

export const editStream = (id, formValue) => async dispatch => {
  const response = await streams.put(`/streams/${id}`, formValue);
  dispatch({
    type: EDIT_STREAM,
    payload: response.data,
  });
};

export const deleteStream = id => async dispatch => {
  await streams.delete(`/streams/${id}`);
  dispatch({
    type: DELETE_STREAM,
    payload: id,
  });
};
