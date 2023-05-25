import axios from 'axios';

const API_URL = 'http://localhost:8000'; // Replace with your Django backend URL

//Login
const login = async (email, password) => {
    try {
        const response = await axios.post(`${API_URL}/users/login`, {
            email,
            password,
        });
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

//Logout
const logout = async () => {
    try {
        const response = await axios.post(`${API_URL}/users/logout`);
        localStorage.removeItem('email')
        localStorage.removeItem('userToken')
        localStorage.removeItem('name')
        localStorage.removeItem('Phone')
        Store.currentUser = null
        return response.data;

    } catch (error) {
        throw error.response.data;
    }
};

//Register
const register = async (name, email, password, phone) => {
    try {
        const response = await axios.post(`${API_URL}/users/register`, {
            name,
            email,
            password,
            phone,
        });
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};


export default {
    login,
    logout,
    register
};



// import axios from 'axios';

// const apiClient = axios.create({
//   baseURL: "http://localhost:8000",
//   withCredentials: false,
//   headers: {
//     Accept: 'application/json',
//     'Content-Type': 'application/json'
//   }
// });

// export default apiClient;
