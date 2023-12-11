<template>
  <div class="container mx-auto p-4">
    <h1 class="text-2xl font-semibold mb-4">Shopping Cart</h1>
    <router-link to="/">Home</router-link>

    <!-- Display the shopping cart contents -->
    <div v-if="cart.length > 0">
      <ul>
        <li
          v-for="(cartItem, index) in cart"
          :key="index"
          class="mb-4 p-4 border-2 rounded-lg"
          :class="cartItem.ticket.isVIP ? 'border-green-500' : 'border-blue-100'"
        >
          <div class="md:flex md:items-center">
            <!-- Ticket Information -->
            <div class="md:w-3/4">
              <h3 class="text-lg font-semibold">{{ cartItem.ticket.name }}</h3>
              <p class="text-gray-600">Count: {{ cartItem.count }} - Price: ${{ cartItem.ticket.price }} - 
                <span :class="{ 'text-green-500': cartItem.ticket.isVIP, 'text-blue-600': !cartItem.ticket.isVIP }">
                  {{ cartItem.ticket.isVIP ? 'VIP' : 'Regular' }}
                </span>
              </p>
            </div>
            <div class="md:w-1/4 mt-4 md:mt-0 md:text-right">
              <button
                @click="removeFromCart(index)"
                class="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
              >
                Remove
              </button>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div v-else>
      <p>Your shopping cart is empty. Add tickets <router-link to="/" class="text-blue-500">here</router-link>.</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useShoppingStore } from '../store/store'; 

export default defineComponent({
  setup() {
    const store = useShoppingStore();

    const removeFromCart = (index: number) => {
      store.removeFromCart(index);
    };

    return {
      removeFromCart,
      cart: computed(() => store.cartItems),
    };
  },
});
</script>
