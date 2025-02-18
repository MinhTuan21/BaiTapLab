const API_URL = "http://172.16.53.132:4000/users";

export const registerUser = async (name, email, password) => {
    try {
        const response = await    ("http://172.16.53.132:4000/users/register", {  // API_URL đã sửa
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email, password }),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Phản hồi từ API đăng ký:", data);
        return data;
    } catch (error) {
        console.error("Lỗi đăng ký:", error);
        return { success: false, message: "Không thể kết nối server! Kiểm tra đường truyền mạng." };
    }
};

export const loginUser = async (email, password) => {
    try {
      console.log("Gửi dữ liệu lên API:", { email, password });
  
      const response = await fetch("http://172.16.53.132:4000/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
  
      const data = await response.json();
      console.log("Kết quả từ server:", data);
      return data;
    } catch (error) {
      console.error("Lỗi gọi API:", error);
      return { success: false, message: "Lỗi server!" };
    }
  };
  
