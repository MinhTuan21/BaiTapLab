// Công ty A, đang muốn nhờ bạn thống kê tổng các bàn thắng của các cầu thủ bóng 
// đá, tìm ra xem ai là cầu thủ ghi số bàn thắng nhiều nhất. Ngặt nghèo một nỗi, danh 
// sách đầu vào này có dữ liệu không được thống nhất, thiếu dữ liệu ở nhiều chỗ. Nên 
// công ty cần bạn chỉ tính số bàn thắng của cầu thủ hợp lệ, quy tắc là có tên và có số 
// bàn thắng rõ ràng. Cuối cùng bạn cần loại bỏ những cầu thủ không đúng quy tắc 
// LẬP TRÌNH MOBILE ĐA NỀN TẢNG 1 
// TRANG 11 
// LAB 1  trên ra khỏi danh sách, và lọc ra một danh sách cầu thủ có tên và số bàn thắng hợp lệ. 
// Danh sách cầu thủ sẽ như sau: 
// const players = [ 
// { name: 'Messi', goals: 30 }, 
// undefined, 
// { name: 'Ronaldo', goals: 28 }, 
// { name: 'Neymar', goals: 22 }, 
// { goals: 2 }, 
// { name: 'Mbappé', goals: 25 }, 
// { name: 'Pele', goals: null }, 
// ]; 
// Hướng dẫn: - Đầu tiên bạn cần viết một hàm để kiểm tra cầu thủ có dúng quy tắc mà khách 
// hàng đặt ra không, hàm kiểm ra sẽ được viết như sau:
const players = [
    { name: 'Messi', goals: 30 },
    undefined,
    { name: 'Ronaldo', goals: 28 },
    { name: 'Neymar', goals: 22 },
    { goals: 2 },
    { name: 'Mbappé', goals: 25 },
    { name: 'Pele', goals: null },
  ];
  //ktra banthang hople
  const ValidRule = (player) => {
    return player && player.name && Number.isInteger(player.goals) && player.goals >= 0;
  };
  //cauthu hople
  const validPlayers = players.filter(ValidRule);
  
  //tong ban thang
  const totalGoals = validPlayers.reduce((sum, player) => sum + player.goals, 0);
  
  // Ghi ban nhiu
  const topScorer = validPlayers.reduce((max, player) => {
    return player.goals > max.goals ? player : max;
  },
  { name: '', goals: 0 });

  console.log('Danh sách cầu thủ hợp lệ:', validPlayers);
  console.log('Tổng số bàn thắng:', totalGoals);
  console.log('Cầu thủ ghi nhiều bàn thắng nhất:', topScorer);