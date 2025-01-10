const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Promise 1 hoàn thành!"), 1000);
  });
  const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => reject("Promise 2 thất bại!"), 2000);
  });
  const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Promise 3 hoàn thành!"), 1500);
  });
// Yêu cầu thứ nhất
  Promise.all([promise1, promise2, promise3])
    .then((results) => {
      console.log("Tất cả Promise hoàn thành:", results);
    })
    .catch((error) => {
      console.error("Một Promise thất bại:", error);
    });
// Yêu cầu thứ hai
  Promise.allSettled([promise1, promise2, promise3])
    .then((results) => {
      console.log("Kết quả của tất cả Promise:");
      console.table(results); // Hiển thị trạng thái của từng Promise

      const hasError = results.some(result => result.status === "rejected");
      if (hasError) {
        console.warn("Có Promise bị lỗi, nhưng tất cả Promise đã chạy xong.");
      } else {
        console.log("Tất cả Promise đều thành công!");
      }
    })
    .finally(() => {
      console.log("Chương trình đã hoàn thành.");
    });
  