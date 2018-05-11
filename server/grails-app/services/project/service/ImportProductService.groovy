package project.service

import grails.converters.JSON
import grails.gorm.transactions.Transactional
import org.apache.poi.hssf.util.CellReference
import org.grails.plugins.excelimport.AbstractExcelImporter
import org.joda.time.LocalDate
import project.ApplicationConstants
import project.bean.ImportProductRow
import project.domain.Attribute

import java.text.DecimalFormat
import java.text.DecimalFormatSymbols

@Transactional
class ImportProductService extends AbstractExcelImporter {

    static scope = "request";

    public static final int DEFAULT_COLUMN_COUNT = 16;

    def excelImportService;
    def cacheService;

    private String templateType;

    private DecimalFormatSymbols decimalFormatSymbols_;

    private Map attributeMapByCode;

    private Map importConfig = [
            startRow : 1, lastRow: 1000,
            columnMap: [
                    "A": "categoryName",
                    "B": "name",
                    "C": "image1",
                    "D": "image2",
                    "E": "image3",
                    "F": "image4",
                    "G": "hangSanXuat",
                    "H": "baoHanh",
                    "I": "khoHang",
                    "J": "giaTruocKhiHa",
                    "K": "phanTramGiamGia",
                    "L": "thongTinChiTiet",
                    "M": "thongSoKiThuat",
                    "N": "khuyenMai",
                    "O": "thongTinBoSung",
                    "P": "thongTinMoRong",
            ]
    ];

    private void buildConfig() {

        this.attributeMapByCode = cacheService.attributes?.groupBy { it.code };

        Integer sheetIndex = 0;

        while (this.workbook.isSheetHidden(sheetIndex)) {
            sheetIndex++;
        }

        this.importConfig.sheet = this.workbook.getSheetName(sheetIndex);

        cacheService.attributes?.findAll {

            it.group == this.templateType

        }?.eachWithIndex { Attribute attribute, int index ->

            importConfig.columnMap << [(CellReference.convertNumToColString(index + DEFAULT_COLUMN_COUNT)): attribute.code];
        }

        println importConfig as JSON;
    }

    private convertCellValueToString(Object cellValue) {

        if (cellValue == null) return null;

        if (cellValue == "-") {

            return "";

        } else if (cellValue instanceof Date) {

            return (cellValue as Date).format(ApplicationConstants.DATE_FORMAT);

        } else if (cellValue instanceof LocalDate) {

            return (cellValue as LocalDate).toDate().format(ApplicationConstants.DATE_FORMAT);

        } else {

            return cellValue?.toString().trim();
        }
    }

    private DecimalFormatSymbols getDecimalFormatSymbols() {

        if (!decimalFormatSymbols_) {

            decimalFormatSymbols_ = new DecimalFormatSymbols();

            decimalFormatSymbols_.setDecimalSeparator(',' as Character);
        }

        return decimalFormatSymbols_;
    }

    private convertCellNumberToString(Object cellValue) {

        if (cellValue instanceof String) {

            DecimalFormat df = new DecimalFormat("#0.00#", this.decimalFormatSymbols);

            try {

                return !cellValue ? null : df.format(cellValue as BigDecimal);

            } catch (Exception ex) {

                return cellValue;
            }
        } else {

            return cellValue;
        }
    }

    private Boolean isDynamicField(String code) {

        return attributeMapByCode?.get(code) ? true : false;
    }

    List<ImportProductRow> readFile(InputStream is, String templateType) {

        this.templateType = templateType;

        this.read(is);

        this.buildConfig();

        return this.excelImportService.columns(this.workbook, importConfig)?.collect { Map cellValueMap ->

            ImportProductRow item = new ImportProductRow(attribute: [:]);

            cellValueMap.each { String columnName, def cellValue ->

                switch (columnName) {

                    case "giaTruocKhiHa":
                    case "phanTramGiamGia":
                        cellValue = convertCellNumberToString(convertCellValueToString(cellValue));
                        break;

                    default:
                        cellValue = convertCellValueToString(cellValue);
                        break;
                }

                if (isDynamicField(columnName)) {

                    item.attribute."${columnName}" = cellValue;
                } else {

                    item."${columnName}" = cellValue;
                }
            }

            return item;
        }
    }
}
