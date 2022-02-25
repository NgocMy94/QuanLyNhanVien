function NhanVien(
  taiKhoan,
  fullName,
  email,
  matKhau,
  ngayLam,
  luongCoBan,
  chucVu,
  gioLam
) {
  this.taiKhoan = taiKhoan;
  this.fullName = fullName;
  this.email = email;
  this.matKhau = matKhau;
  this.ngayLam = ngayLam;
  this.luongCoBan = luongCoBan;
  this.chucVu = chucVu;
  this.gioLam = gioLam;
  //Phương Thức Tính Lương
  this.tinhTongLuong = function () {
    this.luong = 0 
    var sep = document.getElementById("sep").value
    var truong_Phong = document.getElementById("truong_Phong").value
    var nhan_Vien = document.getElementById("nhan_vien").value
    if(this.chucVu === sep){
        this.luong = this.luongCoBan * 3
    }else if(this.chucVu === truong_Phong){
        this.luong = this.luongCoBan * 2
    }else if(this.chucVu === nhan_Vien){
        this.luong = this.luongCoBan * 1
    }
  };
  this.xepLoai = function () {
    this.loai = "";
    if (gioLam >= 192) {
      this.loai = "Xuất sắc";
    } else if (gioLam >= 176) {
      this.loai = "Giỏi";
    } else if (gioLam >= 160) {
      this.loai = "Khá";
    } else if (gioLam < 160) {
      this.loai = "Trung Bình";
    }
  };
}
