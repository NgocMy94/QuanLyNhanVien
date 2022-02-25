function Validation(){
    this.checkEmpty = function(value,spanID,massage){
        if(value.trim() == ""){
            document.getElementById(spanID).innerHTML = massage
            document.getElementById(spanID).style.display = "block"
            return false
        }
        document.getElementById(spanID).innerHTML = ""
        document.getElementById(spanID).style.display = "none"
        return true
    }
    this.checkTaiKhoan = function(value,spanID,massage,mangNV){
        var isExist = false
        isExist = mangNV.some(function(nv,index){
            return value.trim() == nv.taiKhoan
            
        })
        if(isExist){
            document.getElementById(spanID).innerHTML = massage
            document.getElementById(spanID).style.display = "block"
            return false
        }
        document.getElementById(spanID).innerHTML = ""
        document.getElementById(spanID).style.display = "none"
        return true
    }
    this.checkFullName = function(value,spanID,message){
        var pattern = "^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" + "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" + "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹý\\s]+$";
        var reg = new RegExp(pattern);
        if(reg.test(value)){
            //hợp lệ
            document.getElementById(spanID).innerHTML = "";
            document.getElementById(spanID).style.display = "none";
            return true;
        }
        document.getElementById(spanID).innerHTML = message;
        document.getElementById(spanID).style.display = "block";
        return false;
    }
    this.checkEmail = function(value,spanID,message){
        var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(value.match(pattern)){
            document.getElementById(spanID).innerHTML = "";
            document.getElementById(spanID).style.display = "none";
            return true;
        }
        document.getElementById(spanID).innerHTML = message;
        document.getElementById(spanID).style.display = "block";
        return false;
    }
    this.checkMatKhau = function(value,spanID,message){
        var pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,10}$/;
        if(value.match(pattern)){
            //hợp lệ
            document.getElementById(spanID).innerHTML = "";
            document.getElementById(spanID).style.display = "none";
            return true;
        }
        document.getElementById(spanID).innerHTML = message;
        document.getElementById(spanID).style.display = "block";
        return false;
    }
    this.checkChuVu = function(selectID,spanID,message){
        var index = document.getElementById(selectID).selectedIndex;
        if(index != 0){
            //hợp lệ
            document.getElementById(spanID).innerHTML = "";
            document.getElementById(spanID).style.display = "none";
            return true;
        }
        document.getElementById(spanID).innerHTML = message;
        document.getElementById(spanID).style.display = "block";
        return false;
    }
    this.checkLuong = function(value,spanID,message){
        var pattern = /^(\d{1,2345678}(\.\d{1,2345678})?)$/;
        if(value.match(pattern) && value >= 1000000 && value <= 20000000){
            document.getElementById(spanID).innerHTML = "";
            document.getElementById(spanID).style.display = "none";
            return true;
        }
        document.getElementById(spanID).innerHTML = message;
        document.getElementById(spanID).style.display = "block";
        return false;
    }
    this.checkGioLam = function(value,spanID,message){
        var pattern = /^(\d{1,23}(\.\d{1,23})?)$/;
        if(value.match(pattern) && value >= 80 && value <= 200){
            document.getElementById(spanID).innerHTML = "";
            document.getElementById(spanID).style.display = "none";
            return true;
        }
        document.getElementById(spanID).innerHTML = message;
        document.getElementById(spanID).style.display = "block";
        return false;
    }
}