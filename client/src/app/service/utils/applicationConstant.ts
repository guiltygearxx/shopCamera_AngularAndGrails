export const USER_TOKEN = "userToken";
export const SORT_ASC = "asc";
export const SORT_DES = "des";

export const MAX_ENTRIES_CONFIGS = [10, 20, 30];

export const CRITERIA_TYPE_OPTIONAL = "optional";
export const CRITERIA_TYPE_MANDATORY = "mandatory";

export const ERROR_CODE_FIELD_ERROR = "FIELD_ERROR";

export const VALIDATOR_CODE_SIZE = "size";
export const VALIDATOR_CODE_SIZE_TOO_SMALL = "size.toosmall";
export const VALIDATOR_CODE_SIZE_TOO_BIG = "size.toobig";

export const VALIDATOR_CODE_FILE_SIZE = "fileSize";
export const VALIDATOR_CODE_FILE_SIZE_TOO_SMALL = "fileSize.toosmall";
export const VALIDATOR_CODE_FILE_SIZE_TOO_BIG = "fileSize.toobig";

export const VALIDATOR_CODE_FILE_TYPE = "filetype";
export const VALIDATOR_CODE_FILE_TYPE_FALSE_FORMAT = "filetype.falseFormat";

export const VALIDATOR_CODE_MATCHES = "matches";
export const VALIDATOR_CODE_MATCHES_INVALID = "matches.invalid";

export const VALIDATOR_CODE_RANGE = "range";
export const VALIDATOR_CODE_RANGE_TOO_SMALL = "range.toosmall";
export const VALIDATOR_CODE_RANGE_TOO_BIG = "range.toobig";

export const VALIDATOR_CODE_REQUIRED = "nullable";
export const VALIDATOR_CODE_NUMBER_FORMAT = "numberFormat";
export const VALIDATOR_CODE_INT_FORMAT = "intFormat";
export const VALIDATOR_CODE_DATE_FORMAT = "dateFormat";
export const VALIDATOR_CODE_DATE_INVALID = "date.invalid";

export const VALIDATOR_CODE_LIST = "list";
export const VALIDATOR_CODE_LIST_SUB_ERROR = "listValidatorSubError";

export const EVENT_CODE_CLICK = "click";
export const EVENT_CODE_FOCUS = "focus";

export const VALIDATOR_EMAIL ="^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@"+"[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$";

export const DEFAULT_IMPORT_PROJECT_COL_MAPPING = [

  "itemNo",
  "name", "projectPurpose", "projectScale",
  "planNo", "planDate",
  "approvalNo", "approvalDate", "approvalPerson", "investor", "contSelectForm", "contSelectReason", "approvalTotalInvestment", "yearTotalInvestment",
  "biddingNo", "biddingDate", "biddingApprovalPerson", "packagePrice", "biddingPrice", "contractor",
  "contractDate", "contractValidDate", "executionTime", "contractValue", "yearContractValue",
  "acceptanceDate", "acceptanceAmount", "yearAcceptanceAmount",
  "spendingAmount", "yearSpendingAmount",
  "settlementNo", "settlementDate", "settlementApprovalPerson", "settlementValue",
  "projectType", "projectCode"
];

export const DEFAULT_IMPORT_PROJECT_COL_CONFIG = {

  "itemNo": {type: "text", cellClass: "width1"},
  "name": {type: "text", cellClass: "width5"},

  "projectPurpose": {type: "text", cellClass: "width4"},
  "projectScale": {type: "text", cellClass: "width4"},

  "planNo": {type: "text", cellClass: "width2"},
  "planDate": {type: "date", cellClass: "width2"},

  "approvalNo": {type: "text", cellClass: "width2"},
  "approvalDate": {type: "date", cellClass: "width2"},
  "approvalPerson": {type: "text", cellClass: "width2"},
  "investor": {type: "text", cellClass: "width2"},
  "contSelectForm": {type: "text", cellClass: "width2"},
  "contSelectReason": {type: "text", cellClass: "width2"},
  "approvalTotalInvestment": {type: "number", cellClass: "width2"},
  "yearTotalInvestment": {type: "number", cellClass: "width2"},

  "biddingNo": {type: "text", cellClass: "width2"},
  "biddingDate": {type: "date", cellClass: "width2"},
  "biddingApprovalPerson": {type: "text", cellClass: "width2"},
  "packagePrice": {type: "number", cellClass: "width2"},
  "biddingPrice": {type: "number", cellClass: "width2"},
  "contractor": {type: "text", cellClass: "width4"},

  "contractDate": {type: "date", cellClass: "width2"},
  "contractValidDate": {type: "date", cellClass: "width2"},
  "executionTime": {type: "text", cellClass: "width2"},
  "contractValue": {type: "number", cellClass: "width2"},
  "yearContractValue": {type: "number", cellClass: "width2"},

  "acceptanceDate": {type: "date", cellClass: "width2"},
  "acceptanceAmount": {type: "number", cellClass: "width2"},
  "yearAcceptanceAmount": {type: "number", cellClass: "width2"},

  "spendingAmount": {type: "number", cellClass: "width2"},
  "yearSpendingAmount": {type: "number", cellClass: "width2"},

  "settlementNo": {type: "text", cellClass: "width2"},
  "settlementDate": {type: "date", cellClass: "width2"},
  "settlementApprovalPerson": {type: "text", cellClass: "width2"},
  "settlementValue": {type: "number", cellClass: "width2"},

  "projectType": {type: "text", cellClass: "width2"},
  "projectCode": {type: "text", cellClass: "width2"},
};


export const COL_MAPPING_ADJUST_FORWARD_GROUP_C = [

  "itemNo",
  "name", "projectPurpose", "projectScale",
  "investmentNo", "investmentGranted", "investmentDate",
  "totalInvestment",
  "approvalProjectYear", "startTimeApproval", "planContract", "startTimeContract",
  "planAcceptance", "startTimeAcceptance", "totalSpending",
  "spendingQuarter1", "spendingQuarter2", "spendingQuarter3", "spendingQuarter4",
  "projectCode"
];

export const COL_MAPPING_NEW_GROUP_C = [

  "itemNo",
  "name", "projectPurpose", "projectScale",
  "totalInvestment",
  "approvalProjectYear", "startTimeApproval", "planContract", "startTimeContract",
  "planAcceptance", "startTimeAcceptance", "totalSpending",
  "spendingQuarter1", "spendingQuarter2", "spendingQuarter3", "spendingQuarter4",
  "projectCode"
];

export const COL_MAPPING_ADJUST_FORWARD_GROUP_B = [

  "itemNo",
  "name", "projectPurpose", "projectScale",
  "investmentNo", "investmentGranted", "investmentDate",
  "totalInvestment",
  "approvalProjectYear", "startTimeApproval", "planContract", "startTimeContract",
  "planAcceptance", "startTimeAcceptance", "totalSpending",
  "spendingQuarter1", "spendingQuarter2", "spendingQuarter3", "spendingQuarter4",
  "approvalNo2", "approvalDate2",
  "projectCode"
];

export const COL_MAPPING_NEW_GROUP_B = [

  "itemNo",
  "name", "projectPurpose", "projectScale",
  "totalInvestment",
  "approvalProjectYear", "startTimeApproval", "planContract", "startTimeContract",
  "planAcceptance", "startTimeAcceptance", "totalSpending",
  "spendingQuarter1", "spendingQuarter2", "spendingQuarter3", "spendingQuarter4",
  "approvalNo2", "approvalDate2",
  "projectCode"
];

export const COL_MAPPING_CANCEL_C_B = [
  "itemNo", "name", "projectPurpose", "projectScale", "investmentNo", "investmentGranted",
  "investmentDate", "totalInvestment", "projectCode"
];

export const DEFAULT_IMPORT_PROJECT_PLAN_COL_CONFIG = {

  "itemNo": {type: "text", cellClass: "width1"}, // Số item
  "name": {type: "text", cellClass: "width5"},  // tên dự án

  "projectPurpose": {type: "text", cellClass: "width4"}, //   MỤC ĐÍCH
  "projectScale": {type: "text", cellClass: "width4"},  // QUY MÔ DỰ ÁN

  "approvalNo": {type: "text", cellClass: "width2"},  // Quyết định đầu tư dự án gần nhất - Số
  "approvalDate": {type: "text", cellClass: "width2"}, // Quyết định đầu tư dự án gần nhất - Cấp

  "approvalNo2": {type: "text", cellClass: "width2"},  // Quyết định đầu tư dự án gần nhất - Số
  "approvalDate2": {type: "text", cellClass: "width2"}, // Quyết định đầu tư dự án gần nhất - Cấp

  "investmentNo": {type: "text", cellClass: "width2"},  // Quyết định đầu tư dự án gần nhất - Số
  "investmentGranted": {type: "text", cellClass: "width2"}, // Quyết định đầu tư dự án gần nhất - Cấp
  "investmentDate": {type: "date", cellClass: "width2"},  // Quyết định đầu tư dự án gần nhất - Ngày

  "totalInvestment": {type: "number", cellClass: "width2"}, // Tổng mức đầu tư kế hoạch
  "approvedTotalInvestment": {type: "number", cellClass: "width2"}, //Tổng mức đầu tư trong QĐ phê duyệt

  "totalValueOfSignedContracts": {type: "number", cellClass: "width2"}, //Tổng giá trị các  hợp đồng đã ký
  "totalValueOfAcceptance": {type: "number", cellClass: "width2"}, // Tổng giá trị nghiệm thu
  "totalValueOfSpending": {type: "number", cellClass: "width2"}, // Tổng giá trị thanh toán

  "approvalProjectYear": {type: "number", cellClass: "width2"}, // Kế hoạch phê duyệt dự án năm
  "startTimeApproval": {type: "text", cellClass: "width2"}, // Thời gian phê duyệt dự án kể từ thời điểm giao

  "planContract": {type: "number", cellClass: "width2"}, // Kế hoach ký HĐ năm
  "startTimeContract": {type: "text", cellClass: "width2"}, // Thời gian bắt đầu ký hợp đồng kể từ thời điểm giao

  "planAcceptance": {type: "number", cellClass: "width2"}, // Kế hoạch nghiệm thu năm
  "startTimeAcceptance": {type: "text", cellClass: "width2"}, // Thời gian nghiệm thu kể từ thời điểm giao

  "totalSpending": {type: "number", cellClass: "width2"}, // Kế hoạch thanh toán năm Tổng cộng
  "spendingQuarter1": {type: "number", cellClass: "width2"}, // Kế hoạch thanh toán năm Quy 1
  "spendingQuarter2": {type: "number", cellClass: "width2"}, // Kế hoạch thanh toán năm Quy 2
  "spendingQuarter3": {type: "number", cellClass: "width2"}, // Kế hoạch thanh toán năm Quy 3
  "spendingQuarter4": {type: "number", cellClass: "width2"}, // Kế hoạch thanh toán năm Quy 4

  "projectCode": {type: "text", cellClass: "width2"},  // Mã dự án
};

export const INPUT_FORMAT_TEXT = "text";
export const INPUT_FORMAT_DATE = "date";
export const INPUT_FORMAT_NUMBER = "number";
export const INPUT_FORMAT_INT = "int";

export const DECIMAL_LENGTH = 2;

export const HTTP_ERROR_UNAUTHORIZED = 403;

export const DATE_FORMAT = "DD/MM/YYYY";

export const PROJECT_PLAN_TYPE_ADJUST = "adjust";
export const PROJECT_PLAN_TYPE_NEW = "new";
export const PROJECT_PLAN_TYPE_FORWARD = "forward";
export const PROJECT_PLAN_TYPE_CANCEL = "cancel";

export const PROJECT_GROUP_C = "GROUP_C";
export const PROJECT_GROUP_B = "GROUP_B";

export const ELEMENT_TYPE_INPUT_TEXT = "inputText";
export const ELEMENT_TYPE_TEXT_AREA = "textArea";
export const ELEMENT_TYPE_SELECT = "select";
export const ELEMENT_TYPE_DATE_PICKER = "datepicker";
export const ELEMENT_TYPE_CHECKBOX = "checkbox";

export const DATA_TYPE_NUMBER = "number";
export const DATA_TYPE_STRING = "string";
export const DATA_TYPE_DATE = "date";
export const DATA_TYPE_BOOLEAN = "boolean";

export const PROJECT_ATTRIBUTE_GROUPS = [
  "layYKienDonViLienQuan",
  "trinhPheDuyetDuAnDauTu",
  "thamDinhDuAnDauTu",
  "yKienPheDuyetCuaLanhDaoTCT",
  "quyetDinhPheDuyetDuAnDauTuVaKHLCNT",
  "keHoachChonThau", // << important dont delete
  "lapTrinhPheDuyetHoSoMoiSoTuyen",
  "thamDinhHoSoMoiSoTuyen",
  "pheDuyetHoSoMoiSoTuyen",
  "phatHanhHoSoMoiSoTuyen",
  "thamDinhKetQuaDanhGiaHoSoTuyen",
  "pheDuyetDanhSachNgan",

  "lapTrinhPheDuyetHSMTHSYC",
  "thamDinhPheDuyetHSMTHSYC",
  "pheDuyetHSMTHSYC",
  "phatHanhHSMTHSYCvaDanhGiaHSDTHSDX",
  "thamDinhKeQuaDanhGiaNhaThauDatKiThuat",
  "pheDuyetKeQuaDanhGiaNhaThauDatKiThuat",
  "moVaDanhGiaHoSoTaiChinhXepHangNhaThau",
  "thuongThaoHopDong",
  "trinhPheDuyetKetQuaLuaChonNhaThau",
  "thamDinhKetQuaLuaChonNhaThau",
  "pheDuyetKetQuaLuaChonNhaThau",
  "hoanThienVaKiKetHopDong",
  "nghiemThu",
  "trinhHoSoThanhToan",
  "thanhToan",
  "trinhPheDuyetQuyetToan",
  "thamDinhHoSoQuyetToan",
  "pheDuyetQuyetToan",
];

export const PROJECT_MULTIPLE_VALUE_ATTRIBUTE_GROUPS = [

  "layYKienDonViLienQuan",
  "trinhHoSoThanhToan",
  "thanhToan",
]

export const GROUPS_FOR_PROJECT = [

  "layYKienDonViLienQuan",
  "trinhPheDuyetDuAnDauTu",
  "thamDinhDuAnDauTu",
  "yKienPheDuyetCuaLanhDaoTCT",
  "quyetDinhPheDuyetDuAnDauTuVaKHLCNT",
  "keHoachChonThau",

  "trinhPheDuyetQuyetToan",
  "thamDinhHoSoQuyetToan",
  "pheDuyetQuyetToan",
];

export const GROUPS_FOR_BID = [
  "keHoachChonThau",
  "lapTrinhPheDuyetHoSoMoiSoTuyen",
  "thamDinhHoSoMoiSoTuyen",
  "pheDuyetHoSoMoiSoTuyen",
  "phatHanhHoSoMoiSoTuyen",
  "thamDinhKetQuaDanhGiaHoSoTuyen",
  "pheDuyetDanhSachNgan",

  "lapTrinhPheDuyetHSMTHSYC",
  "thamDinhPheDuyetHSMTHSYC",
  "pheDuyetHSMTHSYC",
  "phatHanhHSMTHSYCvaDanhGiaHSDTHSDX",
  "thamDinhKeQuaDanhGiaNhaThauDatKiThuat",
  "pheDuyetKeQuaDanhGiaNhaThauDatKiThuat",
  "moVaDanhGiaHoSoTaiChinhXepHangNhaThau",
  "thuongThaoHopDong",
  "trinhPheDuyetKetQuaLuaChonNhaThau",
  "thamDinhKetQuaLuaChonNhaThau",
  "pheDuyetKetQuaLuaChonNhaThau",
  "hoanThienVaKiKetHopDong",
  "nghiemThu",
  "trinhHoSoThanhToan",
  "thanhToan"
];

export const ROLE_ACTION_UPDATE = "update";
export const ROLE_ACTION_VIEW = "view";

export const VALUE_REFERENCE_TYPE_PROJECT = "project";
export const VALUE_REFERENCE_TYPE_BID = "bid";

export const STATUS_LOCK = "lock";
export const STATUS_UNLOCK = "unlock";

export const ROLES_CODE_CHU_TRI = "banChuTri";
export const ROLES_CODE_LANH_DAO_DON_VI = "lanhDaoDonVi";

export const UNIT_CODE_BAN_DAU_TU = "banDauTu";

export const PROJECT_ATTRIBUTE_GROUP_KHCT = "keHoachChonThau";
