// Công ty A, đang muốn nhờ bạn thống kê tổng các bàn thắng của các cầu thủ bóng 
// đá, tìm ra xem ai là cầu thủ ghi số bàn thắng nhiều nhất. Ngặt nghèo một nỗi, danh 
// sách đầu vào này có dữ liệu không được thống nhất, thiếu dữ liệu ở nhiều chỗ. Nên 
// công ty cần bạn chỉ tính số bàn thắng của cầu thủ hợp lệ, quy tắc là có tên và có số 
// bàn thắng rõ ràng. Cuối cùng bạn cần loại bỏ những cầu thủ không đúng quy tắc 

// Hướng dẫn: - Đầu tiên bạn cần viết một hàm để kiểm tra cầu thủ có dúng quy tắc mà khách 
// hàng đặt ra không, hàm kiểm ra sẽ được viết như sau:

// - Tiếp theo bạn khai báo một biến để lưu trữ có cầu thủ có số lượng ghi bàn nhiều 
// nhất. - Một biến tiếp theo dùng để lưu danh sách cầu thủ đã được lọc. - Bạn sử dụng phương thức filter trong mảng của Javascript để thực hiện lọc ra 
// một danh sách nhân viên mới, đồng thời kiếm cầu thủ có số bàn thắng nhiều nhất. 
// Lưu ý, hãy sử dụng thêm optional chaining để chương trình của bạn không bị 
// crash.
const players = [
   //1
    { name: 'Messi', goals: 30 },
    undefined,
    //2
    { name: 'Ronaldo', goals: 28 },
    //3
    { name: 'Neymar', goals: 22 },
    //4
    { goals: 2 },
    //5
    { name: 'Mbappé', goals: 25 },
    //6
    { name: 'Pele', goals: null },
  ];
  //ktra hople
  const ValidRule = (player) => {
    return player && player.name && Number.isInteger(player.goals) && player.goals >= 0;
    //kiểm tra tên nếu tên hợp lệ (bỏ 4) sau đó kiêmr tra ban thắng(bỏ null hoặc gtri ko phai la sô)tiếp ktra ban so ban thang(bot 6 vi goals là null và ko đc là số âm)
  };
  //cauthu hople
  const validPlayers = players.filter(ValidRule);
  
  //tong ban thang
  const totalGoals = validPlayers.reduce((sum, player) => sum + player.goals, 0);
  //lọc và cộng dồn (sum ban đầu có gtri bằng 0 và lần lượt cộng dồn từ 0+30+28+22+25)
  // Ghi ban nhiu
  const topScorer = validPlayers.reduce((max, player) => {
    return player.goals > max.goals ? player : max;
  },
  //lọc
  { name: '', goals: 0 });

  console.log('Danh sách cầu thủ hợp lệ:', validPlayers);
  console.log('Tổng số bàn thắng:', totalGoals);
  console.log('Cầu thủ ghi nhiều bàn thắng nhất:', topScorer);