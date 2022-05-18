import salesInvoice from "../config/salesInvoice.json";
import accountCustomer from "../config/account-Customer-Sales.json";
import vehicleStockInvoice from "../config/vehicleStockInvoice.json";
import vehiclePurchase from "../config/vehiclePurchase.json";
import vehicleMaster from "../config/vehicleMaster.json";
import accountCustomerSS from "../config/account-Customer-SS.json";
import claimsLedger from "../config/claimsLedger.json";
import vehicleDebit from "../config/vehicleDebitNote.json";
import vehicleSalesInvoiceCreditNote from "../config/vehicleSalesInvoice-CreditNote.json";
import vehicleSalesInvoiceDebitNote from "../config/vehicleSalesInvoice-DebitNote.json";
import invoiceHeader from "../config/jobCardInvoiceHeader.json";
import chassisReport from "../config/chassisReport.json";
import claimSettlementGst from "../config/claimSettlementGst.json";
import invoiceDetails from "../config/jobCardInvoiceDetails.json";
import dealerPartMaster from "../config/dealerPartMaster.json";
// import internalOrderInwardDetails from "../config/internalOrderInwardDetailsSearch.json";
import internalOrderOutwardDetails from "../config/internalOrderOutwardDetails.json";
import otcSalesDetails from "../config/otcSalesDetails.json";
import purchaseReturnHeader from "../config/purchaseReturnHeader.json";
import * as Keycloak from 'keycloak-js'

let env = "qa";
// env = "prod"; uncomment when deploying


export const vehicleSalesInvoiceSearch = ({
  INVOICE_DATE,
  INVOICE_NO,
  ORDER_NO,
  debug,
}) => {
  if (debug === true) {
    return salesInvoice;
  }
  return axios
    .post(
      `https://aip-vehicle-sales-invoice-${env}-esb.api.tatamotors.com/api/crm/search1`,
      {
        DEALER_CODE: "3001370",
        INVOICE_DATE,
        INVOICE_NO,
        ORDER_NO,
      }
    )
    .then((res) => res.data);
};

export const vehicleDebitSearch = ({
  INVOICE_DATE,
  INVOICE_NO,
  ORDER_NO,
  debug,
}) => {
  if (debug === true) {
    return vehicleDebit;
  }
  return axios
    .post(
      ` https://aip-crm-vehicle-debit-note-${env}-esb.api.tatamotors.com/api/crm/search`,
      {
        DEALER_CODE: "3001370",
        INVOICE_DATE,
        INVOICE_NO,
        ORDER_NO,
      }
    )
    .then((res) => res.data);
};
export const vehicleStockSearch = ({ INVOICE_DATE, INVOICE_NO, debug }) => {
  if (debug === true) {
    return vehicleStockInvoice;
  }
  return axios
    .post(
      ` https://aip-crm-stock-invoice-jdg-${env}-esb.api.tatamotors.com/api/crm/search`,
      {
        DEALER_CODE: "3001370",
        INVOICE_DATE,
        INVOICE_NO,
      }
    )
    .then((res) => res.data);
};

export const vehiclePurchaseSearch = ({
  LAST_UPDATED_DATE,
  INVOICE_DATE,
  SUPPLIER_NAME,
  debug,
}) => {
  if (debug === true) {
    return vehiclePurchase;
  }
  return axios
    .post(
      `/https://aip-crm-vehicle-sales-purchase-cv-${env}-esb.api.tatamotors.com/api/crm/search`,
      {
        DEALER_CODE: "3001370",
        LAST_UPDATED_DATE,
        INVOICE_DATE,
        SUPPLIER_NAME,
      }
    )
    .then((res) => res.data);
};
export const vehicleMasterSearch = ({ CREATED, VC_NUMBER, PL, debug }) => {
  if (debug === true) {
    return vehicleMaster;
  }
  return axios
    .post(
      `https://aip-crm-product-jdg1-${env}-esb.api.tatamotors.com/api/crm/search1`,
      {
        CREATED,
        VC_NUMBER,
        PL,
      }
    )
    .then((res) => res.data);
};

export const acSalesSearch = ({ LAST_UPDATED_DATE, debug }) => {
  if (debug === true) {
    return accountCustomer;
  }
  return axios
    .post(
      `https://aip-crm-account-customer-sales-cv-${env}-esb.api.tatamotors.com/api/crm/search`,
      {
        DEALER_CODE: "3001370",
        LAST_UPDATED_DATE,
      }
    )
    .then((res) => res.data);
};
export const acSsSearch = ({ LAST_UPDATED_DATE, CUSTOMER_CODE, debug }) => {
  if (debug === true) {
    return accountCustomerSS;
  }
  return axios
    .post(
      `https://aip-crm-customer-ss-cv-${env}-esb.api.tatamotors.com/api/crm/search`,
      {
        DEALER_CODE: "3001370",
        LAST_UPDATED_DATE,
        CUSTOMER_CODE,
      }
    )
    .then((res) => res.data);
};

export const claimsLedgerSearch = ({ LAST_UPD, INVOICE_DATE, debug }) => {
  if (debug === true) {
    return claimsLedger;
  }
  return axios
    .post(
      `https://aip-crm-claims-ledger-jdg-cv-${env}-esb.api.tatamotors.com/api/crm/search`,
      {
        DEALER_CODE: "3001370",
        LAST_UPD,
        INVOICE_DATE,
      }
    )
    .then((res) => res.data);
};

export const vehicleCreditNoteSearch = ({
  INVOICE_NO,
  INVOICE_DATE,
  debug,
}) => {
  if (debug === true) {
    return vehicleSalesInvoiceCreditNote;
  }
  return axios
    .post(
      `https://aip-crm-vehicle-credit-note-${env}-esb.api.tatamotors.com/api/crm/search`,
      {
        DEALER_CODE: "3000380",
        INVOICE_NO,
        INVOICE_DATE,
      }
    )
    .then((res) => res.data);
};

export const vehicleDebitNoteSearch = ({ INVOICE_NO, INVOICE_DATE, debug }) => {
  if (debug === true) {
    return vehicleSalesInvoiceDebitNote;
  }
  return axios
    .post(
      `https://aip-crm-vehicle-debit-note-${env}-esb.api.tatamotors.com/api/crm/search`,
      {
        DEALER_CODE: "3000380",
        INVOICE_NO,
        INVOICE_DATE,
      }
    )
    .then((res) => res.data);
};

export const invoiceHeaderSearch = ({
  LAST_UPD,
  INVOICE_DATE,
  INVOICE_NO,
  INVOICE_STATUS,
  debug,
}) => {
  if (debug === true) {
    return invoiceHeader;
  }
  return axios
    .post(
      `https://aip-ae-header-invoice-${env}-esb.api.tatamotors.com/api/crm/search`,
      {
        DEALER_CODE: "3000380",
        LAST_UPD,
        INVOICE_DATE,
        INVOICE_NO,
        INVOICE_STATUS,
      }
    )
    .then((res) => res.data);
};

export const invoiceDetailsSearch = ({ Invoice_Date, Invoice_No, debug }) => {
  if (debug === true) {
    return invoiceDetails;
  }
  return axios
    .post(
      `https://aip-crm-job-card-invoice-detail-cv-${env}-esb.api.tatamotors.com/api/crm/search`,
      {
        Invoice_Date,
        Invoice_No,
      }
    )
    .then((res) => res.data);
};

export const creditNoteSearch = ({ INVOICE_DATE, INVOICE_NO, debug }) => {
  if (debug === true) {
    return creditNote;
  }
  return axios
    .post(
      `https://aip-crm-vehicle-credit-note-${env}-esb.api.tatamotors.com/api/crm/search`,
      {
        INVOICE_DATE,
        INVOICE_NO,
      }
    )
    .then((res) => res.data);
};

export const chassisReportSearch = ({ CHAS_NO, SERV_DLR_CD, debug }) => {
  if (debug === true) {
    return chassisReport;
  }
  return axios
    .post(
      `https://aip-chassis-report-sap-jdg-cv-${env}-esb.api.tatamotors.com/api/sap/search`,
      {
        CHAS_NO,
        SERV_DLR_CD,
      }
    )
    .then((res) => res.data);
};

export const claimSettlementGstSearch = ({ DEALER_CODE, ZCLAIM_NO, debug }) => {
  if (debug === true) {
    return claimSettlementGst;
  }
  return axios
    .post(
      `https://aip-claim-settlement-cv-jdg-${env}-esb.api.tatamotors.com/api/sap/search`,
      {
        DEALER_CODE,
        ZCLAIM_NO,
      }
    )
    .then((res) => res.data);
};
export const dealerSearch = ({ LAST_UPD, INVOICE_DATE, debug }) => {
  if (debug === true) {
    return dummyData;
  }
  return axios
    .post(`/xyxxxx`, {
      DEALER_CODE: "3001370",
      LAST_UPD,
      INVOICE_DATE,
    })
    .then((res) => res.data);
};

export const dealerPartMasterSearch = ({ Part_Number, debug }) => {
  if (debug === true) {
    return dealerPartMaster;
  }
  return axios
    .post(
      `http://aip-crm-dealer-part-master-cv-${env}-esb.api.tatamotors.com/api/crm/search`,
      {
        // DEALER_CODE: "3001370",
        Part_Number,
        // INVOICE_DATE,
      }
    )
    .then((res) => res.data);
};

export const internalOrderOutwardDetailsSearch = ({
  LAST_UPD_DT,
  ORDER_NUMBER,
  debug,
}) => {
  if (debug === true) {
    return internalOrderOutwardDetails;
  }
  return axios
    .post(
      `https://aip-crm-internal-order-outward-detail-cv-${env}-esb.api.tatamotors.com/api/crm/search`,
      {
        // DEALER_CODE: "3001370",
        // Part_Number,
        // INVOICE_DATE,
        LAST_UPD_DT,
        ORDER_NUMBER,
      }
    )
    .then((res) => res.data);
};

export const otcSalesDetailsSearch = ({ INVOICE_DATE, INVOICE_NO, debug }) => {
  if (debug === true) {
    return otcSalesDetails;
  }
  return axios
    .post(
      `https://aip-crm-otc-sales-detail-cv-${env}-esb.api.tatamotors.com/api/crm/search`,
      {
        // DEALER_CODE: "3001370",
        // Part_Number,
        // INVOICE_DATE,
        INVOICE_DATE,
        INVOICE_NO,
      }
    )
    .then((res) => res.data);
};

export const purchaseReturnHeaderSearch = ({ LAST_UPDATED_DT, debug }) => {
  if (debug === true) {
    return purchaseReturnHeader;
  }
  return axios
    .post(
      `https://aip-crm-purchase-return-header-cv-${env}-esb.api.tatamotors.com/api/crm/search`,
      {
        // DEALER_CODE: "3001370",
        // Part_Number,
        // INVOICE_DATE,
        LAST_UPDATED_DT,
      }
    )
    .then((res) => res.data);
};

//     case "dealer-part-master":
//       break;
//     default:
//       break;
