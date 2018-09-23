import {
  GET_USERS_LIST,
  UPLOAD_PHOTO,
  SEARCH_USERS,
  GET_FORM,
  SUBMIT_FORM,
  SEARCH_TEXT
} from '../constants/actionType';

export function getUserList () {
  return {
    type: GET_USERS_LIST
  }
}

export function uploadPhoto () {
  return {
    type: UPLOAD_PHOTO
  }
}

export function searchUsers (searchText) {
  return {
    type: SEARCH_USERS,
    searchText
  }
}

export function getForm () {
  return {
    type: GET_FORM
  }
}

export function submitForm (formData) {
  return {
    type: SUBMIT_FORM,
    formData
  }
}

export function onChangeSearchText (searchText) {
  return {
    type: SEARCH_TEXT,
    searchText
  }
}