import {BaseDomain} from './base-domain';

export class OrderDetail implements BaseDomain {
  
  id: string;
  lastModifiedTime: number;
  lastModifiedUser: string;
  isDeleted: boolean;

  orderId: string;
  productId: string;
  quantity: number;
  gia: number;
}
