import axios from "axios";

const API_BASE_URL = "http://192.168.1.14:4000/informations";

// 🟢 Lấy danh sách thông tin
export const getInformations = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/list`);
        return response.data;
    } catch (error) {
        console.error("Lỗi khi gọi API lấy danh sách:", error);
        return [];
    }
};

// 🟡 Thêm thông tin mới
export const addInformation = async (data) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/add`, data);
        return response.data;
    } catch (error) {
        console.error("Lỗi khi gọi API thêm thông tin:", error);
        throw error;
    }
};

export const updateInformation = async (id, data) => {
    try {
        console.log("ID gửi lên:", id);
        console.log("Dữ liệu gửi lên:", data);
        const response = await axios.put(`${API_BASE_URL}/update/${id}`, data);
        return response.data;
    } catch (error) {
        console.error("Lỗi khi gọi API cập nhật thông tin:", error.response?.data || error.message);
        throw error;
    }
};


export const deleteInformation = async (id) => {
    try {
        await axios.delete(`${API_BASE_URL}/delete/${id}`);
        return true;
    } catch (error) {
        console.error("Lỗi khi gọi API xóa thông tin:", error);
        return false;
    }
};
