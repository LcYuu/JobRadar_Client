import axios from "axios";
import { GET_INDUSTRY_COUNT_FAILURE, GET_INDUSTRY_COUNT_REQUEST, GET_INDUSTRY_COUNT_SUCCESS, GET_INDUSTRY_FAILURE, GET_INDUSTRY_REQUEST, GET_INDUSTRY_SUCCESS, GET_ALL_INDUSTRIES_REQUEST, GET_ALL_INDUSTRIES_SUCCESS, GET_ALL_INDUSTRIES_FAILURE } from "./industry.actionType";
import { API_BASE_URL } from "../../configs/api";





// export const loginAction = (loginData) => async (dispatch) => {
//   dispatch({ type: LOGIN_REQUEST });
//   try {
//     const response = await axios.post("${API_BASE_URL}/auth/login", loginData);
//     dispatch({ type: LOGIN_SUCCESS, payload: response.data });
//     localStorage.setItem('user', JSON.stringify(response.data));
//     localStorage.setItem('token', response.data.token);
//     return { success: true, data: response.data };
//   } catch (error) {
//     const errorMessage = error.response?.data?.message || error.message || "An unknown error occurred.";
//     dispatch({ type: LOGIN_FAILURE, payload: errorMessage });
//     return { success: false, error: errorMessage };
//   }
// };

export const getIndustry = () => async (dispatch) => {
    dispatch({ type: GET_INDUSTRY_REQUEST });
    try {
        const response = await axios.get(`${API_BASE_URL}/industry/countJobByIndustry`); // Thay thế với URL thực tế
        dispatch({
            type: GET_INDUSTRY_SUCCESS,
            payload: response.data // Trả về dữ liệu nhận được từ API
        });
    } catch (error) {
        dispatch({
            type: GET_INDUSTRY_FAILURE,
            payload: error.message // Hoặc error.response.data
        });
    }
};

export const getIndustryCount = () => async (dispatch) => {
    dispatch({ type: GET_INDUSTRY_COUNT_REQUEST });
    try {
        const response = await axios.get(`${API_BASE_URL}/industry/count-industry`); // Thay thế với URL thực tế
        dispatch({
            type: GET_INDUSTRY_COUNT_SUCCESS,
            payload: response.data // Trả về dữ liệu nhận được từ API
        });
    } catch (error) {
        dispatch({
            type: GET_INDUSTRY_COUNT_FAILURE,
            payload: error.message // Hoặc error.response.data
        });
    }
};

export const getAllIndustries = () => async (dispatch) => {
    dispatch({ type: GET_ALL_INDUSTRIES_REQUEST });
    try {
        const response = await axios.get('${API_BASE_URL}/industry/get-all');
        // Lọc bỏ các ngành nghề có giá trị null hoặc "None"
        const validIndustries = response.data.filter(industry => 
            industry.industryName && 
            industry.industryName.toLowerCase() !== 'none'
        );
        dispatch({
            type: GET_ALL_INDUSTRIES_SUCCESS,
            payload: validIndustries
        });
    } catch (error) {
        dispatch({
            type: GET_ALL_INDUSTRIES_FAILURE,
            payload: error.message
        });
    }
};