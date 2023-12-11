export interface Ticket {
  name: string;
  description: string;
  isVIP: boolean;
  count: number;
  price: number;
}

export interface CartItem {
  ticket: Ticket;
  count: number;
}