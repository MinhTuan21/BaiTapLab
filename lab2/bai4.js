const oldData = [
    { code: 'P001', name: 'Son môi' },
    { code: 'P002', name: 'Kem nền' },
    { code: null, name: 'Phấn mắt' },
    { code: 'P003', name: null },
    { code: undefined, name: 'Kẻ mắt' },
    { code: 'P004', name: 'Mascara' },
  ];
  
  const newData = {
    P001: { code: 'P001', name: 'Son Moi1' },
    P002: { code: 'P002', name: 'Kem Nền1' },
    P004: { code: 'P004', name: 'Mascara1' },
  };
  // Hàm chuyển đổi từ array sang object
  const parseArrayToObject = ({ array = [], keyId = '' }) =>
    Object.fromEntries(
      array?.filter(item => item?.[keyId] && item?.name)?.map(item => [item?.[keyId], item]) || [],
    );
  // Hàm hợp nhất object cũ với object mới (newData)
  const mergeObjects = (oldObj, newObj) => {
    const mergedObj = { ...oldObj };
    Object.keys(newObj).forEach(key => {
      if (mergedObj[key]) {
        mergedObj[key] = { ...mergedObj[key], ...newObj[key] }; // Cập nhật giá trị từ newData
      }
    });
    return mergedObj;
  };
  
  // Chuyển oldData thành object và loại bỏ sản phẩm không hợp lệ
  const oldDataObject = parseArrayToObject({ array: oldData, keyId: 'code' });
  
  // Hợp nhất oldDataObject với newData
  const finalData = mergeObjects(oldDataObject, newData);
  
  // Kết quả
  console.log('Dữ liệu cũ sau khi lọc và chuyển đổi:', oldDataObject);
  console.log('Dữ liệu cuối cùng sau khi cập nhật:', finalData);
 