const API_URL = "http://192.168.1.14:4000/products";


export const addProduct = async (name, description, price, image, rating, category) => {
    try {
        const response = await fetch("http://192.168.1.14:4000/products/add", {

            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, description, price, image, rating, category }),
        });

        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

        const data = await response.json();
        console.log("Sản phẩm đã thêm:", data);
        return data;
    } catch (error) {
        console.error("Lỗi khi thêm sản phẩm:", error);
        return { success: false, message: "Lỗi khi kết nối server!" };
    }
};

export const updateProduct = async (id, updatedData) => {
    try {
        const response = await fetch(`${API_URL}/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updatedData),
        });

        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

        const data = await response.json();
        console.log("Sản phẩm đã cập nhật:", data);
        return data;
    } catch (error) {
        console.error("Lỗi khi cập nhật sản phẩm:", error);
        return { success: false, message: "Lỗi khi kết nối server!" };
    }
};
export const deleteProduct = async (id) => {
    try {
        const response = await fetch(`${API_URL}/${id}`,
            { method: "DELETE" }
        ); 
        
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

        console.log(`Sản phẩm ID ${id} đã bị xóa!`);
        return { success: true, message: "Sản phẩm đã bị xóa!" };
    } catch (error) {
        console.error("Lỗi khi xóa sản phẩm:", error);
        return { success: false, message: "Lỗi khi kết nối server!" };
    }
};

