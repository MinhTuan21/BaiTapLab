const lop1 = [ 
  { 
    mssv: 'PS0000', 
    name: 'Nguyen Van A', 
    avgPoint: 8.9, 
    avgTraningPoint: 7, 
    status: 'pass', 
  }, 
  { 
      mssv: 'PD10690', 
      name: 'Đỗ Văn Minh Tuấn', 
      avgPoint: 10, 
      avgTraningPoint: 10, 
      status: 'pass', 
    }, 
  { 
    mssv: 'PS0001', 
    name: 'Nguyen Van B', 
    avgPoint: 6.5, 
    avgTraningPoint: 10, 
    status: 'pass', 
  } 
]; 
 
const lop2 = [ 
  { 
    mssv: 'PS0002', 
    name: 'Nguyen Van C', 
    avgPoint: 5, 
    avgTraningPoint: 10, 
    status: 'failed', 
  }, 
  { 
    mssv: 'PS0003', 
    name: 'Nguyen Van D', 
    avgPoint: 8, 
    avgTraningPoint: 10, 
    status: 'pass', 
  }, 
  { 
    mssv: 'PS0004', 
    name: 'Nguyen Van E',
    avgPoint: 7, 
    avgTraningPoint: 2, 
    status: 'failed', 
  }
];
// Gộp hai lớp và loại bỏ sinh viên có status là `failed`
const allStudents = lop1.concat(lop2).filter(student => student?.status !== 'failed');
console.log('1. Danh sách gộp sinh viên 2 lớp loại bỏ status ở dạng failed:');
console.table(allStudents);

// Danh sách sinh viên bị loại
console.log('Danh sách sinh viên bị loại:');
console.table(lop2.filter(student => student?.status === 'failed'));

// Sắp xếp theo điểm trung bình
const diem = [...allStudents].sort((a, b) => b.avgPoint - a.avgPoint); // Sao chép mảng trước khi sắp xếp
console.log('2. Danh sách sinh viên theo điểm số từ cao xuống thấp:');
console.table(diem);

// Sắp xếp theo điểm rèn luyện
const diemrenluyen = [...allStudents].sort((a, b) => b.avgTraningPoint - a.avgTraningPoint); // Sao chép mảng trước khi sắp xếp
console.log('3. Danh sách sinh viên theo điểm rèn luyện từ cao xuống thấp:');
console.table(diemrenluyen);

// Lấy sinh viên có điểm trung bình cao nhất (Ong vàng)
const ongVang = diem[0];
console.log('4. Thông tin Ong vàng:');
console.table(ongVang);
