import { defineStore } from 'pinia'
import { Ticket, CartItem } from '../types'

export interface State {
  tickets: Ticket[],
  cart: CartItem[]
}


export const useShoppingStore = defineStore('shopping', {
  state: () => { 
    return {
      tickets: [] as Ticket[],
      cart: [] as CartItem[],
    }
  },
  actions: {
    async addTicket(ticket: Ticket) {
      this.tickets.push(ticket)
    },
    async deleteTicket(index: number) {
      this.tickets.splice(index, 1);
    },
    async addToCart(ticket: Ticket) {
      let cartItem: CartItem = { ticket: ticket, count: 1 }
      this.cart.push(cartItem);
    },
    async removeFromCart(index: number) {
      this.cart.splice(index, 1)
    },
  },
  getters: {
    allTickets: (state: State): Ticket[] => state.tickets,
    cartItems: (state: State): CartItem[] => state.cart
  },
});