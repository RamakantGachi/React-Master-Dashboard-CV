import { useRouter } from "next/router";
import React from "react";

import BasicTable from "@components/Dashboard/table";
import salesInvoice from "../../../config/salesInvoice.json";
import accountCustomer from "../../../config/account-Customer-Sales.json";
import vehicleStockInvoice from "../../../config/vehicleStockInvoice.json";
import vehiclePurchase from "../../../config/vehiclePurchase.json";
import vehicleMaster from "../../../config/vehicleMaster.json";
import accountCustomerSS from "../../../config/account-Customer-SS.json";
import claimsLedger from "../../../config/claimsLedger.json";
import vehicleDebit from "../../../config/vehicleDebitNote.json";
import vehicleSalesInvoiceCreditNote from "../../../config/vehicleSalesInvoice-CreditNote.json";
import vehicleSalesInvoiceDebitNote from "../../../config/vehicleSalesInvoice-DebitNote.json";
import invoiceHeader from "../../../config/jobCardInvoiceHeader.json";
import chassisReport from "../../../config/chassisReport.json";
import claimSettlementGst from "../../../config/claimSettlementGst.json";
import invoiceDetails from "../../../config/jobCardInvoiceDetails.json";
import creditNote from "../../../config/vehicleCreditNote.json";
import dealerPartMaster from "../../../config/dealerPartMaster.json";
import internalOrderInwardDetails from "../../../config/internalOrderInwardDetails.json";
import internalOrderOutwardDetails from "../../../config/internalOrderOutwardDetails.json";
import otcSalesDetails from "../../../config/otcSalesDetails.json";
import purchaseReturnHeader from "../../../config/purchaseReturnHeader.json";

import {
  vehicleSalesInvoiceSearch,
  vehicleDebitSearch,
  vehicleStockSearch,
  vehiclePurchaseSearch,
  vehicleMasterSearch,
  acSalesSearch,
  acSsSearch,
  claimsLedgerSearch,
  vehicleCreditNoteSearch,
  vehicleDebitNoteSearch,
  invoiceHeaderSearch,
  chassisReportSearch,
  claimSettlementGstSearch,
  invoiceDetailsSearch,
  creditNoteSearch,
  dealerPartMasterSearch,
  internalOrderInwardDetailsSearch,
  internalOrderOutwardDetailsSearch,
  otcSalesDetailsSearch,
  purchaseReturnHeaderSearch,
} from "../../../handlers";

function Page({ slug }) {
  let requiredFields = [];
  let requiredFieldsPost = [];
  let dateFields = [];
  let hiddenFields = [];
  let dummyData = [];
  let handleSubmit = () => {};

  switch (slug) {
    case "vehicle-debit-note":
      requiredFields = [
        "FROM INVOICE DATE",
        "TO INVOICE DATE",
        ,
        "INVOICE NUMBER",
      ];
      requiredFieldsPost = [
        "FROM_INVOICE_DATE",
        "TO_INVOICE_DATE",
        "INVOICE_NO",
      ];
      dateFields = [
        "FROM INVOICE DATE",
        "TO INVOICE DATE",
        ,
        "CREATED",
        "LAST UPDATED",
        "ORDER DATE",
        "IRN DATE",
        "LOAD DATE",
      ];
      hiddenFields = ["DEALER CODE", "ORG ID", "ROW ID"];
      dummyData = vehicleDebit;
      handleSubmit = vehicleDebitSearch;
      break;
    case "vehicle-stock-invoice":
      requiredFields = [
        "FROM INVOICE DATE",
        "TO INVOICE DATE",
        ,
        "INVOICE NUMBER",
      ];
      requiredFieldsPost = [
        "FROM_INVOICE_DATE",
        "TO_INVOICE_DATE",
        ,
        "INVOICE_NO",
      ];
      dateFields = [
        "FROM INVOICE DATE",
        "TO INVOICE DATE",
        "CREATED",
        "LAST UPDATED",
        "ORDER DATE",
        "IRN DATE",
        "LOAD DATE",
      ];
      hiddenFields = ["DEALER CODE", "ORG ID", "ROW ID"];
      dummyData = vehicleStockInvoice;
      handleSubmit = vehicleStockSearch;
      break;
    case "vehicle-sales-invoice":
      requiredFields = [
        "FROM INVOICE DATE",
        "TO INVOICE DATE",
        "INVOICE NUMBER",
        "ORDER NUMBER",
      ];
      requiredFieldsPost = [
        "FROM_INVOICE_DATE",
        "TO_INVOICE_DATE",
        ,
        "INVOICE_NO",
        "ORDER_NO",
      ];
      dateFields = [
        "FROM INVOICE DATE",
        "TO INVOICE DATE",
        "CREATED",
        "LAST UPDATED",
        "ORDER DATE",
        "IRN DATE",
        "LOAD DATE",
      ];
      hiddenFields = ["DEALER CODE", "ORG ID"];
      dummyData = salesInvoice;
      handleSubmit = vehicleSalesInvoiceSearch;
      break;
    case "vehicle-purchase":
      requiredFields = [
        "LAST UPDATED DATE",
        "FROM INVOICE DATE",
        "TO INVOICE DATE",
        "SUPPLIER NAME",
      ];
      requiredFieldsPost = [
        "LAST_UPDATED DATE",
        "FROM_INVOICE_DATE",
        "TO_INVOICE_DATE",
        ,
        "SUPPLIER_NAME",
      ];

      dateFields = [
        "FROM INVOICE DATE",
        "TO INVOICE DATE",
        "CREATED",
        "LAST UPDATED DATE",
        "ORDER DATE",
        "IRN DATE",
        "LOAD DATE",
      ];
      hiddenFields = ["DEALER CODE", "ORG ID", "ROW ID"];
      dummyData = vehiclePurchase;
      handleSubmit = vehiclePurchaseSearch;
      break;
    case "vehicle-master":
      requiredFields = ["CREATED", "VC NUMBER", "PL"];
      requiredFieldsPost = ["CREATED", "VC_NUMBER", "PL"];
      dateFields = [
        "FROM INVOICE DATE",
        "TO INVOICE DATE",
        "CREATED",
        "LAST UPDATED",
        "ORDER DATE",
        "IRN DATE",
        "LOAD DATE",
      ];
      hiddenFields = ["DEALER CODE", "ORG ID"];
      dummyData = vehicleMaster;
      handleSubmit = vehicleMasterSearch;
      break;
    case "ac-sales":
      requiredFields = ["LAST UPDATED DATE"];
      requiredFieldsPost = ["LAST_UPD"];
      dateFields = ["LAST UPDATED DATE"];
      hiddenFields = ["DEALER CODE", "ORG ID", "ROW ID"];
      dummyData = accountCustomer;
      handleSubmit = acSalesSearch;
      break;
    case "ac-ss":
      hiddenFields = ["DEALER CODE", "ORG ID", "ROW ID"];
      dateFields = ["LAST UPDATED DATE", "CREATED DATE"];
      requiredFields = ["LAST UPDATED DATE", "CUSTOMER CODE"];
      requiredFieldsPost = ["LAST_UPD_DATE", "CUSTOMER_CODE"];
      dummyData = accountCustomerSS;
      handleSubmit = acSsSearch;
      break;
    case "claims-ledger":
      hiddenFields = ["DEALER CODE", "ORG ID", "ROW ID"];
      dateFields = [
        "CREATED",
        "LAST UPD",
        "FROM INVOICE DATE",
        "TO INVOICE DATE",
        "JOB CARD DATE",
      ];
      requiredFields = ["LAST UPD", "FROM INVOICE DATE", "TO INVOICE DATE"];
      requiredFieldsPost = ["LAST_UPD", "FROM_INVOICE_DATE", "TO_INVOICE_DATE"];
      dummyData = claimsLedger;
      handleSubmit = claimsLedgerSearch;
      break;
    case "vehicle-sales-invoice-credit-note":
      hiddenFields = ["DEALER CODE", "ORG ID", "ROW ID"];
      dateFields = [
        "CREATED",
        "LAST UPDATED",
        "FROM INVOICE DATE",
        "TO INVOICE DATE",
        "ORDER DATE",
      ];
      requiredFields = [
        "INVOICE NUMBER",
        "FROM INVOICE DATE",
        "TO INVOICE DATE",
      ];
      requiredFieldsPost = [
        "INVOICE_NO",
        "FROM_INVOICE_DATE",
        "TO_INVOICE_DATE",
      ];
      dummyData = vehicleSalesInvoiceCreditNote;
      handleSubmit = vehicleCreditNoteSearch;
      break;
    case "vehicle-sales-invoice-debit-note":
      hiddenFields = ["DEALER CODE", "ORG ID", "ROW ID"];
      dateFields = [
        "CREATED",
        "LAST UPDATED",
        "FROM INVOICE DATE",
        "TO INVOICE DATE",
        "ORDER DATE",
      ];
      requiredFields = [
        "INVOICE NUMBER",
        "FROM INVOICE DATE",
        "TO INVOICE DATE",
      ];
      requiredFieldsPost = [
        "INVOICE_NO",
        "FROM_INVOICE_DATE",
        "TO_INVOICE_DATE",
      ];
      dummyData = vehicleSalesInvoiceDebitNote;
      handleSubmit = vehicleDebitNoteSearch;
      break;
    case "job-card-invoice-header":
      hiddenFields = ["DEALER CODE", "ORG ID", "ROW ID"];
      dateFields = [
        "CREATED DATE",
        "LAST UPDATED DATE",
        "FROM INVOICE DATE",
        "TO INVOICE DATE",
      ];
      requiredFields = [
        "LAST UPDATED DATE",
        "FROM INVOICE DATE",
        "TO INVOICE DATE",
        "INVOICE STATUS",
      ];
      requiredFieldsPost = [
        "LAST_UPD",
        "FROM_INVOICE_DATE",
        "TO_INVOICE_DATE",
        ,
        "INVOICE_NO",
        "INVOICE_STATUS",
      ];
      dummyData = invoiceHeader;
      handleSubmit = invoiceHeaderSearch;
      break;
    case "job-card-invoice-details":
      dateFields = [
        "Last Updated Date",
        "FROM INVOICE DATE",
        "TO INVOICE DATE",
      ];
      requiredFields = ["FROM INVOICE DATE", "TO INVOICE DATE", "Invoice No"];
      requiredFieldsPost = [
        "FROM_INVOICE_DATE",
        "TO_INVOICE_DATE",
        ,
        "Invoice_No",
      ];
      dummyData = invoiceDetails;
      handleSubmit = invoiceDetailsSearch;
      break;
    case "vehicle-credit-note":
      hiddenFields = ["DEALER CODE", "ORG ID", "ROW ID"];
      dateFields = [
        "CREATED",
        "LAST UPDATED",
        "FROM INVOICE DATE",
        "TO INVOICE DATE",
        "ORDER DATE",
      ];
      requiredFields = ["INVOICE NO", "FROM INVOICE DATE", "TO INVOICE DATE"];
      requiredFieldsPost = [
        "FROM_INVOICE_DATE",
        "TO_INVOICE_DATE",
        ,
        "INVOICE_NO",
      ];
      dummyData = creditNote;
      handleSubmit = creditNoteSearch;
      break;
    case "fsb-settlement-chassis-report":
      dateFields = ["SERVICE DATE", "UPDATED DATE"];
      requiredFields = ["CHASSIS NUMBER", "SERVICE DEALER CODE"];
      requiredFieldsPost = ["CHAS_NO", "SERV_DLR_CD"];
      dummyData = chassisReport;
      handleSubmit = chassisReportSearch;
      break;
    case "claim-settlement-gst":
      requiredFields = ["DEALER CODE", "PROWAC NO"];
      requiredFieldsPost = ["DEALER_CODE", "ZCLAIM_NO"];
      dummyData = claimSettlementGst;
      handleSubmit = claimSettlementGstSearch;
      break;

    case "dealer-part-master":
      requiredFields = ["PART NUMBER"];
      requiredFieldsPost = ["Part_Number"];
      dateFields = [];
      hiddenFields = [];
      dummyData = dealerPartMaster;
      handleSubmit = dealerPartMasterSearch;
      break;

    case "dealer-part-master":
      requiredFields = [];
      requiredFieldsPost = [];
      dateFields = ["LAST UPDATED"];
      hiddenFields = ["DEALER CODE", "ORG ID", "CREATED DATE"];
      dummyData = dealerPartMaster;
      handleSubmit = internalOrderInwardDetailsSearch;
      break;

    case "internal-Order-outward-detail":
      requiredFields = ["LAST UPDATED DATE", "ORDER NUMBER", "DEALER CODE"];
      requiredFieldsPost = ["LAST_UPD_DT", "ORDER_NUMBER", "DEALER_CODE"];
      dateFields = ["LAST UPDATED", "CREATED DATE"];
      hiddenFields = ["LAST UPDATED DATE", "ORDER NUMBER", "DEALER CODE"];
      dummyData = internalOrderOutwardDetails;
      handleSubmit = internalOrderOutwardDetailsSearch;
      break;
    case "otc-sales-details":
      requiredFields = ["FROM INVOICE DATE", "TO INVOICE DATE", "INVOICE NO"];
      requiredFieldsPost = [
        "FROM_INVOICE_DATE",
        "TO_INVOICE_DATE",
        ,
        "INVOICE_NO",
      ];
      dateFields = ["LAST UPDATED", "CREATED DATE"];
      hiddenFields = ["LAST UPDATED DATE", "ORDER NUMBER", "DEALER CODE"];
      dummyData = otcSalesDetails;
      handleSubmit = otcSalesDetailsSearch;
      break;
    case "purchase-return-header":
      requiredFields = ["LAST UPDATED DATE"];
      requiredFieldsPost = ["LAST_UPDATED_DT"];
      dateFields = ["LAST UPDATED DATE"];
      hiddenFields = ["LAST UPDATED DATE", "ORDER NUMBER", "DEALER CODE"];
      dummyData = purchaseReturnHeader;
      handleSubmit = purchaseReturnHeaderSearch;
      break;
    default:
      // requiredFields = ["FROM INVOICE DATE",
      // "TO INVOICE DATE", "INVOICE NUMBER", "ORDER NUMBER"];
      // requiredFieldsPost = ["INVOICE_DATE", "INVOICE_NO", "ORDER_NO"];
      // dateFields = [
      //   "FROM INVOICE DATE",
      // "TO INVOICE DATE",
      //   "CREATED",
      //   "LAST UPDATED",
      //   "ORDER DATE",
      //   "IRN DATE",
      //   "LOAD DATE",
      // ];
      // hiddenFields = ["DEALER CODE", "ORG ID"];
      // dummyData = salesInvoice;
      // handleSubmit = vehicleSalesInvoiceSearch;
      break;
  }

  // console.log(
  //   dummyData,
  //   requiredFields,
  //   requiredFieldsPost,
  //   dateFields,
  //   hiddenFields.length,
  //   slug,
  //   handleSubmit,
  //   "props"
  // );
  if (!slug) {
    return null;
  }
  return (
    <div
      style={{
        minHeight: "91vh",
        backgroundImage: "url(/bgimage.png)",
        backgroundSize: "cover",
        minWidth: "91vw",
        margin: 0,
        overflow: "hidden",
      }}
    >
      <div className="fw-bold text-white text h2">{slug}</div>
      <BasicTable
        dummyData={dummyData}
        requiredKeys={requiredFields}
        requiredKeysPost={requiredFieldsPost}
        dateFields={dateFields}
        hiddenFieldLength={hiddenFields.length}
        title={slug}
        handleSearch={handleSubmit}
      />
    </div>
  );
}

export const getServerSideProps = async (context) => {
  const { slug } = context.query;
  // If slug is "undefined", since "undefined" cannot be serialized, server will throw error
  // But null can be serializable
  if (!slug) {
    slug = null;
  }
  // now we are passing the slug to the component
  return { props: { slug } };
};
export default Page;
