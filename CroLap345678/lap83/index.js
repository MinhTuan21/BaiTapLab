import { useEffect, useState } from "react";
import { View, Text, FlatList, TextInput, Button, TouchableOpacity } from "react-native";
import { getInformations, addInformation, updateInformation, deleteInformation } from "../api/information"; // Import API

const InformationScreen = () => {
    const [data, setData] = useState([]);
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const [date, setDate] = useState("");
    const [editingId, setEditingId] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    // 🟢 Lấy danh sách thông tin
    const fetchData = async () => {
        const result = await getInformations();
        setData(result);
    };

    // 🟡 Thêm hoặc cập nhật thông tin
    const handleSave = async () => {
        if (!name || !address || !phone || !date) {
            alert("Vui lòng nhập đầy đủ thông tin!");
            return;
        }

        try {
            if (editingId) {
                await updateInformation(editingId, { name, address, phone, date });
            } else {
                await addInformation({ name, address, phone, date });
            }
            fetchData();
            resetForm();
        } catch (error) {
            console.error("Lỗi khi lưu thông tin:", error);
        }
    };

    // 🔴 Xóa thông tin
    const handleDelete = async (id) => {
        const success = await deleteInformation(id);
        if (success) fetchData();
    };

    // Reset form sau khi thêm/sửa
    const resetForm = () => {
        setEditingId(null);
        setName("");
        setAddress("");
        setPhone("");
        setDate("");
    };

    return (
        <View style={{ padding: 20 }}>
            <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 10 }}>Danh sách thông tin</Text>

            {/* Ô nhập thông tin */}
            <TextInput placeholder="Tên" value={name} onChangeText={setName} style={styles.input} />
            <TextInput placeholder="Địa chỉ" value={address} onChangeText={setAddress} style={styles.input} />
            <TextInput placeholder="Số điện thoại" value={phone} onChangeText={setPhone} style={styles.input} />
            <TextInput placeholder="Ngày sinh (DD-MM-YYYY)" value={date} onChangeText={setDate} style={styles.input} />

            {/* Nút Thêm / Cập nhật */}
            <Button title={editingId ? "Cập nhật" : "Thêm"} onPress={handleSave} />

            {/* Danh sách hiển thị */}
            <FlatList
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <Text style={{ fontSize: 18, fontWeight: "bold" }}>{item.name}</Text>
                        <Text>{item.address}</Text>
                        <Text>{item.phone}</Text>
                        <Text>{item.date}</Text>

                        {/* Nút Sửa */}
                        <TouchableOpacity onPress={() => {
                            setEditingId(item.id);
                            setName(item.name);
                            setAddress(item.address);
                            setPhone(item.phone);
                            setDate(item.date);
                        }}>
                            <Text style={styles.editButton}>✏️ Sửa</Text>
                        </TouchableOpacity>

                        {/* Nút Xóa */}
                        <TouchableOpacity onPress={() => handleDelete(item.id)}>
                            <Text style={styles.deleteButton}>🗑️ Xóa</Text>
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>
    );
};

const styles = {
    input: { borderWidth: 1, marginBottom: 10, padding: 5, borderRadius: 5 },
    item: { marginBottom: 10, borderBottomWidth: 1, paddingBottom: 5, borderRadius: 10, padding: 10, backgroundColor: "#f8f8f8" },
    editButton: { color: "blue", marginTop: 5 },
    deleteButton: { color: "red", marginTop: 5 },
};

export default InformationScreen;
