const studentName = document.getElementById("formName");
const email = document.getElementById("formEmail");
const phoneNumber = document.getElementById("formPhoneNumber");
const address = document.getElementById("formAddress");
const gender = document.getElementsByName("gender");
const formElement = document.querySelector("#form");
const tbodyElement = document.getElementById("tbody");

let students = JSON.parse(localStorage.getItem("students")) || [];

// hàm reset lại form
function handleResetForm() {
  studentName.value = "";
  email.value = "";
  phoneNumber.value = "";
  address.value = "";
  gender.value = "";
}
// hàm render danh sách học sinh
function renderStudents() {
  const trHtmls = students.map((student, index) => {
    return `
      <tr>
      <td>${index + 1}</td>
      <td>${student.studentName}}</td>
      <td>${student.email}</td>
      <td>${student.phoneNumber}</td>
      <td>${student.address}</td>
      <td>${student.gender}</td>
      <td><button id="btnEdit" class="btnEdit">Sửa</button>
          <button id="btnDelete" class="btnDelete">Xóa</button></td>
  </tr>
          `;
  });
  // ép kiểu từ mảng về string
  const trHtml = trHtmls.join("");
  // gắn chuỗi html và tbody
  tbodyElement.innerHTML = trHtml;
}
// lấy dữ liệu từ form
// lắng nghe sự kiện submit form
formElement.addEventListener("submit", (e) => {
  // ngăn chặn hành vi mặc định của form
  e.preventDefault;
  // tạo đối tượng newStudent chứa dữ liệu lấy từ form
  const newStudent = {
    studentId: Math.ceil(Math.random() * 1000000),
    studentName: studentName.value,
    email: email.value,
    phoneNumber: phoneNumber.value,
    address: address.value,
  };
  // thêm dữ liệu và đầu mảng
  students.unshift(newStudent);

  // lưu dữ liệu lên local
  localStorage.setItem("students", JSON.stringify(students));

  // gọi hàm reset lại form
  handleResetForm();

  // gọi hàm render students để lấy dữ liệu mới nhất từ local
  renderStudents();
});
