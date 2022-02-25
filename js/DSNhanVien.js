function DanhSachNhanVien(){
    this.mangNV = [];

    this.themNV = function(nv){
        this.mangNV.push(nv);
    }
    this.timViTri = function(ma){
        var viTri = -1
        this.mangNV.map(function(nv,index){
            if(nv.taiKhoan == ma){
                viTri = index
            }
        })
        return viTri
    }
    this.xoaNV = function(ma){
        var viTriNV = this.timViTri(ma)
        if(viTriNV = -1){
            this.mangNV.splice(viTriNV,1)
        }
        else{
            console.log("Không tìm thấy nhân viên")
        }
    }
    this.capNhatNV = function(nv){
        var viTriNV = this.timViTri(nv.taiKhoan);
        if(viTriNV > -1){
            
            dsnv.mangNV[viTriNV] = nv;
           
        }else{
           
            console.log("Chức năng cập nhật: Không tìm thấy Không Tìm Thấy Nhân Viên");
        }
    }
}
//Tìm Kiếm Nhân Viên Giỏi
DanhSachNhanVien.prototype.timKiemNV = function(tk){
    var mangTK = []
    var tkLowerCase = tk.toLowerCase()
    this.mangNV.map(function(nv){
        var loaiLowerCase = nv.loai.toLowerCase()
        var indexTK = loaiLowerCase.indexOf(tkLowerCase)
        if(indexTK > -1){
            // tìm thấy sv
            //lưu sv vào mảng TK
            mangTK.push(nv);
        }
    })
    return mangTK
}