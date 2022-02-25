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
    var truongPhong = document.getElementById("truongPhong").value
    var nhanVien = document.getElementById("nhanvien").value
    if(this.chucVu === sep){
        this.luong = this.luongCoBan * 3
    }else if(this.chucVu === truongPhong){
        this.luong = this.luongCoBan * 2
    }else if(this.chucVu === nhanVien){
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
