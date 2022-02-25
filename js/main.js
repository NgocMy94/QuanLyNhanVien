var dsnv = new DanhSachNhanVien()
var validation = new  Validation()
//Lấy dữ liệu khi load lại trang
getLocalStore()
function getELE(id){
    return document.getElementById(id);
}
function themNhanVien(){
    var taiKhoan = document.getElementById("tknv").value
    var fullName = getELE("name").value
    var email = getELE("email").value
    var matKhau = getELE("password").value
    var ngayLam = getELE("datepicker").value
    var luongCoBan = getELE("luongCB").value
    var chucVu = getELE("chucvu").value
    var gioLam = getELE("gioLam").value

    //Kiểm Tra dữ liệu
    var isValid = true
    //kiểm tra tài khoản: không được trống, không được trùng
    isValid &= validation.checkEmpty(taiKhoan , "tbTKNV" , "Tài Khoản Không Được Để Trống") && validation.checkTaiKhoan(taiKhoan , "tbTKNV" , "Tài Khoản Không Được Trùng" , dsnv.mangNV)
     //Tên
     isValid &= validation.checkEmpty(fullName , "tbTen" , "Tên Nhân Viên Không Được Để Trống") && validation.checkFullName(fullName , "tbTen" , "Tên Nhân Viên Phải Là Chữ")
     //CheckEmail
     isValid &= validation.checkEmpty(email , "tbEmail" , "Email Không Được Để Trống") &&  validation.checkEmail(email , "tbEmail" , "Email chưa đúng định dạng")
    // /CheckPass
     isValid &= validation.checkEmpty(matKhau , "tbMatKhau" , "Mật Khẩu Không Được Để Trống")  && validation.checkMatKhau(matKhau , "tbMatKhau" , "Mật Khẩu Chưa Đúng Định Dạng")
     //CheckngayLam
    isValid &= validation.checkEmpty(ngayLam , "tbNgay" , "Ngày Làm Không Được Để Trống")
     //CheckChuVu
    isValid &= validation.checkChuVu("chucvu" , "tbChucVu" , "Chức Vụ Chưa Được Chọn")
     //CheckLuongCB
     isValid &= validation.checkEmpty(luongCoBan , "tbLuongCB" , "Lương Không Được Để Trống") && validation.checkLuong(luongCoBan , "tbLuongCB" , "Lương Cơ Bản Chưa Đúng Định Dạng")
     //CheckGioLam
    isValid &= validation.checkEmpty(gioLam , "tbGiolam" ,"Giờ Làm Không Được Để Trống") && validation.checkGioLam(gioLam , "tbGiolam" ,"Giờ làm Chưa Đúng Định Dạng")



    if(isValid){
        var nv = new NhanVien(taiKhoan,fullName,email,matKhau,ngayLam,luongCoBan,chucVu,gioLam)
        nv.tinhTongLuong()
        nv.xepLoai()
        console.log(nv)
        
        dsnv.themNV(nv)
        //console.log(dsnv.mangNV)
        hienThiTable(dsnv.mangNV)
        setLocalStorage(dsnv.mangNV)
    }

   
}
function hienThiTable(mangNV){
    var content = ""
    mangNV.map(function(nv, index){
        content+= `<tr>
        <td>${nv.taiKhoan}</td>
        <td>${nv.fullName}</td>
        <td>${nv.email}</td>
        <td>${nv.ngayLam}</td>
        <td>${nv.chucVu}</td>
        <td>${nv.luong}</td>
        <td>${nv.loai}</td>
        <td>
        <button class="btn btn-danger" onclick = "xoaNhanVien('${nv.taiKhoan}')" >Xóa</button>
       
        </td>
        </tr>
        `
    })
    getELE("tableDanhSach").innerHTML = content;
}
//Lưu Trữ localStorage
function setLocalStorage(mangNV){
    localStorage.setItem("DSNV",JSON.stringify(mangNV))
}
function getLocalStore(){
    if(localStorage.getItem("DSNV") != null){
        dsnv.mangNV = JSON.parse(localStorage.getItem("DSNV"))
        hienThiTable(dsnv.mangNV)
    }
}
//Xoá Nhân Viên
function xoaNhanVien(ma) {
    console.log(ma);
    dsnv.xoaNV(ma);
    setLocalStorage(dsnv.mangNV);
    getLocalStore();
}
//Cập Nhật
function capNhat(){
    var taiKhoan = getELE("tknv").value
    var fullName = getELE("name").value
    var email = getELE("email").value
    var matKhau = getELE("password").value
    var ngayLam = getELE("datepicker").value
    var luongCoBan = getELE("luongCB").value
    var chucVu = getELE("chucvu").value
    var gioLam = getELE("gioLam").value
    var nv = new NhanVien(taiKhoan,fullName,email,matKhau,ngayLam,luongCoBan,chucVu,gioLam)
    nv.tinhTongLuong()
    nv.xepLoai()
    console.log(capNhat)
    dsnv.capNhatNV(nv);
    setLocalStorage(dsnv.mangNV);   
    getLocalStore();
}
function timKiem(){
    var tk = getELE("searchName").value;
    var mangTK = dsnv.timKiemNV(tk);
    hienThiTable(mangTK);
}
// click button rồi mới tìm
getELE("btnTimNV").onclick = timKiem;

//gõ trên ô input và tìm kiếm liền
// keypress (đè phím 1s), keydown (mới đè xuống phím), keyup (giỡ ngón tay khỏi phím)
getELE("searchName").onkeyup = timKiem;

