package project.domain

class Solution implements BaseDomain {

    String tieuDe;
    String hinhAnh;
    String noiDungNgan;
    String noiDungChiTiet;

    static constraints = {

        tieuDe nullable: false, maxSize: 1000
        hinhAnh nullable: true, maxSize: 1000
        noiDungNgan nullable: false;
        noiDungChiTiet nullable: false;

        lastModifiedTime nullable: true
        lastModifiedUser nullable: true
        isDeleted nullable: true
    }

    static mapping = {

        id generator: 'uuid'
        isDeleted defaultValue: false
    }
}