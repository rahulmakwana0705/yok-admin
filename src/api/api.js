import axios from 'axios';

const BASE_URL = 'http://localhost:3000/api';

export const createProductAPI = async (productData) => {
    try {
        const response = await axios.post(`${BASE_URL}/product/create`, productData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });

        return response.data;
    } catch (error) {
        console.error('Error creating product:', error);
        throw error;
    }
};

export const createBannerAPI = async (bannerData) => {
    try {
        const response = await axios.post(`${BASE_URL}/banner/create`, bannerData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });

        return response.data;
    } catch (error) {
        console.error('Error creating product:', error);
        throw error;
    }
};

export const getAllCategory = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/category/get`, {
            headers: {
                'Content-Type': 'application/json',
            },
        });

        return response.data;
    } catch (error) {
        console.error('Error creating product:', error);
        throw error;
    }
};

export const getFindUsHere = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/find-us-here/get`, {
            headers: {
                'Content-Type': 'application/json',
            },
        });

        return response.data;
    } catch (error) {
        console.error('Error creating product:', error);
        throw error;
    }
};

export const UpdateFindUsHere = async (data) => {
    try {
        const response = await axios.put(`${BASE_URL}/find-us-here/put`, data, {
            headers: {
                'Content-Type': 'application/json',
            },
        });

        return response;
    } catch (error) {
        console.error('Error creating product:', error);
        throw error;
    }
};

export const getFAQ = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/faq/get`, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return response;
    } catch (error) {
        console.error('Error creating product:', error);
        throw error;
    }
};

export const addFAQ = async (data) => {
    try {
        const response = await axios.post(`${BASE_URL}/faq/post`, data, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return response;
    } catch (error) {
        console.error('Error creating product:', error);
        throw error;
    }
};

export const deleteFAQ = async (id) => {
    try {
        const response = await axios.delete(`${BASE_URL}/faq/delete?id=${id}`, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return response;
    } catch (error) {
        console.error('Error creating product:', error);
        throw error;
    }
}

export const fetchPrivacyPolicy = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/policy/get`, {
            headers: {
                'Content-Type': 'application/json',
            },
        });

        return response;
    } catch (error) {
        console.error('Error creating product:', error);
        throw error;
    }
};

export const fetchTermsCondition = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/terms/get`, {
            headers: {
                'Content-Type': 'application/json',
            },
        });

        return response;
    } catch (error) {
        console.error('Error creating product:', error);
        throw error;
    }
};
