<template>
  <div class="container mx-auto p-4">
    <h1 class="text-2xl font-semibold mb-4">Index Page</h1>

    <!-- List of all created tickets -->
    <div v-if="tickets.length > 0" class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4">
      <div v-for="(ticket, index) in tickets" :key="index" class="p-4 border-2 rounded-lg" :class="{ 'border-green-500': ticket.isVIP, 'border-blue-200': !ticket.isVIP }">
        <!-- Ticket Information -->
        <h3 class="text-lg font-semibold">{{ ticket.name }}</h3>
        <p class="text-gray-600">{{ ticket.description }}</p>
        <p class="text-sm mt-2">
          <span :class="{'text-green-600 font-semibold': ticket.isVIP, 'text-blue-600': !ticket.isVIP }">
            {{ ticket.isVIP ? 'VIP' : 'Regular' }}
          </span>
          - Count: {{ ticket.count }} - Price: ${{ ticket.price }}
        </p>

        <!-- Add to Cart Button -->
        <button
          @click="addToCart(ticket)"
          class="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600 mt-2"
        >
          Add to Cart
        </button>
      </div>
    </div>

    <!-- If there are no tickets available -->
    <div v-else>
      <p class="text-lg text-center mt-4">
        No tickets available. Create New <router-link to="/admin" class="text-blue-500">here</router-link>.
      </p>
    </div>
  </div>
</template>



<script lang="ts">
import { computed, defineComponent } from 'vue';
import { Ticket } from '../types';
import { useShoppingStore } from '../store/store';

export default defineComponent({
  setup() {
    const store = useShoppingStore(); // Access the store using useStore

    const addToCart = (ticket: Ticket) => {
      store.addToCart(ticket).then(() => {
        alert('Ticket has been added')
      })
    };

    return {
      addToCart,
      tickets: computed(() => store.allTickets),
    };
  },
});
</script>


