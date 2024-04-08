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

export const createCategoryAPI = async (categoryData) => {
    try {
        const response = await axios.post(`${BASE_URL}/category/create`, categoryData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });

        return response.data;
    } catch (error) {
        console.error('Error creating category:', error);
        throw error;
    }
};

export const getAllBanners = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/banner/get`, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        console.log(response.data)

        return response.data;
    } catch (error) {
        console.error('Error creating product:', error);
        throw error;
    }
};

export const deleteBanner = async (id) => {
    try {
        const response = await axios.post(`${BASE_URL}/banner/delete`, { id }, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        console.log(response.data)

        return response.data;
    } catch (error) {
        console.error('Error creating product:', error);
        throw error;
    }
};

export const deleteCategory = async (id) => {
    try {
        const response = await axios.post(`${BASE_URL}/category/delete`, { id }, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        console.log(response.data)

        return response.data;
    } catch (error) {
        console.error('Error deleting category:', error);
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

export const creteSubmenu = async (data) => {
    try {
        const response = await axios.post(`${BASE_URL}/sub-category/create`, data, {
            headers: {
                'Content-Type': 'application/json',
            },
        });

        return response;
    } catch (error) {
        console.error('Error creating submeny:', error);
        throw error;
    }
};
export const updateSubmenu = async (data) => {
    try {
        const response = await axios.post(`${BASE_URL}/sub-category/update`, data, {
            headers: {
                'Content-Type': 'application/json',
            },
        });

        return response;
    } catch (error) {
        console.error('Error creating submeny:', error);
        throw error;
    }
};


export const getSubmenus = async (id = null) => {
    try {
        let url = `${BASE_URL}/sub-category/get`;

        if (id) {
            url += `?id=${id}`;
        }

        const response = await axios.get(url, {
            headers: {
                'Content-Type': 'application/json',
            },
        });

        return response;
    } catch (error) {
        console.error('Error fetching submenus:', error);
        throw error;
    }
};


export const deleteSubCategory = async (id) => {
    try {
        const response = await axios.post(`${BASE_URL}/sub-category/delete`, { id }, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        console.log(response.data)

        return response.data;
    } catch (error) {
        console.error('Error creating product:', error);
        throw error;
    }
};

export const signIn = async (data) => {
    try {
        const response = await axios.post(`${BASE_URL}/users/login`, data, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        console.log(response.data)

        return response.data;
    } catch (error) {
        console.error('Error creating product:', error);
        throw error;
    }
};

export const getProducts = async () => {
    try {
        const url = `${BASE_URL}/product/get`;

        const response = await axios.get(url, {
            headers: {
                'Content-Type': 'application/json',
            },
        });

        return response;
    } catch (error) {
        console.error('Error fetching submenus:', error);
        throw error;
    }
};

export const editProductAPI = async (productData) => {
    try {
        const response = await axios.post(`${BASE_URL}/product/edit`, productData, {
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

export const deleteProductAPI = async (productData) => {
    try {
        const response = await axios.post(`${BASE_URL}/product/delete`, productData, {
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