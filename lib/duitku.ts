import CryptoJS from 'crypto-js';
import axios from 'axios';

const MERCHANT_CODE = process.env.DUITKU_MERCHANT_CODE || 'DS29082';
const MERCHANT_KEY = process.env.DUITKU_API_KEY || '37800158db082d5d910b6c6ab7b63d69';
const ENVIRONMENT = process.env.DUITKU_ENVIRONMENT || 'sandbox';

const BASE_URL = ENVIRONMENT === 'sandbox' 
  ? 'https://sandbox.duitku.com/webapi' 
  : 'https://passport.duitku.com/webapi';

export interface PaymentMethod {
  paymentMethod: string;
  paymentName: string;
  paymentImage: string;
  totalFee: number;
}

export interface CreateInvoiceParams {
  paymentAmount: number;
  merchantOrderId: string;
  productDetails: string;
  email: string;
  phoneNumber: string;
  customerVaName: string;
  callbackUrl: string;
  returnUrl: string;
  expiryPeriod?: number;
  paymentMethod?: string;
}

export const getPaymentMethods = async (amount: number): Promise<PaymentMethod[]> => {
  const datetime = new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '');
  const signature = CryptoJS.SHA256(MERCHANT_CODE + datetime + MERCHANT_KEY).toString();

  try {
    const response = await axios.post(`${BASE_URL}/api/merchant/paymentmethod/getpaymentmethod`, {
      merchantcode: MERCHANT_CODE,
      amount: amount.toString(),
      datetime: datetime,
      signature: signature
    });

    if (response.data.paymentFee) {
      return response.data.paymentFee;
    }
    return [];
  } catch (error) {
    console.error('Duitku getPaymentMethods error:', error);
    return [];
  }
};

export const createInvoice = async (params: CreateInvoiceParams) => {
  const signature = CryptoJS.MD5(MERCHANT_CODE + params.merchantOrderId + params.paymentAmount + MERCHANT_KEY).toString();

  const payload = {
    merchantCode: MERCHANT_CODE,
    paymentAmount: params.paymentAmount,
    merchantOrderId: params.merchantOrderId,
    productDetails: params.productDetails,
    email: params.email,
    phoneNumber: params.phoneNumber,
    customerVaName: params.customerVaName,
    callbackUrl: params.callbackUrl,
    returnUrl: params.returnUrl,
    signature: signature,
    expiryPeriod: params.expiryPeriod || 1440
  };

  try {
    const response = await axios.post(`${BASE_URL}/api/merchant/v2/inquiry`, payload);
    return response.data;
  } catch (error) {
    console.error('Duitku createInvoice error:', error);
    throw error;
  }
};

export const verifyCallback = (data: any) => {
  const { merchantCode, amount, merchantOrderId, signature, resultCode } = data;
  const calculatedSignature = CryptoJS.MD5(merchantCode + amount + merchantOrderId + MERCHANT_KEY).toString();
  
  return signature === calculatedSignature;
};
