import { api, API_BASE_URL } from "../../configs/api";
import axios from "axios";
import {
  FOLLOW_COMPANY_FAILURE,
  FOLLOW_COMPANY_SUCCESS,
    GET_CANDIDATE_PROFILE_FAILURE,
    GET_CANDIDATE_PROFILE_REQUEST,
    GET_CANDIDATE_PROFILE_SUCCESS,
    GET_CANDIDATE_SKILLS_FAILURE,
    GET_CANDIDATE_SKILLS_REQUEST,
    GET_CANDIDATE_SKILLS_SUCCESS,
    GET_FOLLOWED_COMPANY_FAILURE,
    GET_FOLLOWED_COMPANY_REQUEST,
  GET_FOLLOWED_COMPANY_SUCCESS,
  GET_SEEKER_BY_USER_FAILURE,
  GET_SEEKER_BY_USER_REQUEST,
  GET_SEEKER_BY_USER_SUCCESS,
  UNFOLLOW_COMPANY_SUCCESS,
  UPDATE_SEEKER_FAILURE,
  UPDATE_SEEKER_REQUEST,
  UPDATE_SEEKER_SUCCESS,
} from "./seeker.actionType";

export const getSeekerByUser = () => async (dispatch) => {
  dispatch({ type: GET_SEEKER_BY_USER_REQUEST });

  try {
    const jwt = sessionStorage.getItem("jwt"); // Lấy JWT từ sessionStorage
    if (!jwt) {
      throw new Error("No token found");
    }

    const response = await api.get(`${API_BASE_URL}/seeker/seeker-profile`, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });

    // console.log("Seeker: " + JSON.stringify(response.data, null, 2));

    dispatch({
      type: GET_SEEKER_BY_USER_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    console.error("Company Fetch Error: ", error);
    dispatch({
      type: GET_SEEKER_BY_USER_FAILURE,
      payload: error.message,
    });
  }
};

export const updateSeekerAction = (userData) => async (dispatch) => {
  dispatch({ type: UPDATE_SEEKER_REQUEST });
  try {
    const { data } = await api.put("/seeker/update-seeker", userData);
    console.log("Seeker updated: ", data);
    dispatch({ type: UPDATE_SEEKER_SUCCESS, payload: data });
    return data;
  } catch (error) {
    console.error("Profile Update Error: ", error);
    dispatch({ type: UPDATE_SEEKER_FAILURE, payload: error });
    throw error;
  }
};

export const getFollowedCompany = () => async (dispatch) => {
  dispatch({ type: GET_FOLLOWED_COMPANY_REQUEST });

  try {
    const jwt = sessionStorage.getItem("jwt"); // Lấy JWT từ sessionStorage
    if (!jwt) {
      throw new Error("No token found");
    }

    const response = await axios.get(`${API_BASE_URL}/seeker/followed-companies`, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });

    dispatch({
      type: GET_FOLLOWED_COMPANY_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: GET_FOLLOWED_COMPANY_FAILURE,
      payload: error.message,
    });
  }
};

export const followCompany = (companyId) => async (dispatch) => {
  try {
      const response = await api.put(`/seeker/follow/${companyId}`);
      const { action, message } = response.data;

      console.log("Action: " + action)

      if (action === "follow") {
          dispatch({ type: FOLLOW_COMPANY_SUCCESS, payload: { companyId, message, action } });
      } else if (action === "unfollow") {
          dispatch({ type: UNFOLLOW_COMPANY_SUCCESS, payload: { companyId, message, action } });
      }
  } catch (error) {
      dispatch({ type: FOLLOW_COMPANY_FAILURE, error: error.message });
  }
};

export const getCandidateProfile = (userId, postId) => async (dispatch) => {
  dispatch({ type: GET_CANDIDATE_PROFILE_REQUEST });
  try {
    const response = await axios.get(`${API_BASE_URL}/seeker/profile-apply`, {
      params: { userId, postId }
    });
    dispatch({
      type: GET_CANDIDATE_PROFILE_SUCCESS,
      payload: response.data, // Gửi dữ liệu về store

    });
  } catch (error) {
    dispatch({
      type: GET_CANDIDATE_PROFILE_FAILURE,
      error: error.message,
    });
  }
};

export const getCandidateSkills= (userId) => async (dispatch) => {
  dispatch({ type: GET_CANDIDATE_SKILLS_REQUEST });
  try {
    const response = await axios.get(`${API_BASE_URL}/seeker/candidate-skills`, {
      params: { userId }
    });
    dispatch({
      type: GET_CANDIDATE_SKILLS_SUCCESS,
      payload: response.data, // Gửi dữ liệu về store
    });
  } catch (error) {
    dispatch({
      type: GET_CANDIDATE_SKILLS_FAILURE,
      error: error.message,
    });
  }
};

