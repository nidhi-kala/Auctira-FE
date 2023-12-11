<template>
  <div class="container mx-auto p-4 bg-white">
    <h1 class="text-2xl font-semibold mb-4 text-blue-700">Create New Ticket</h1>
    <router-link to="/">Go to Index Page</router-link>
    <div class="md:flex my-4">
      <!-- Form for creating tickets -->
      <form @submit.prevent="addTicket" class="mb-4 md:w-1/2 md:mr-4 bg-gray-100 p-4 rounded-lg shadow-md">
        <div class="mb-2">
          <label for="ticketName" class="block text-gray-700">Ticket Name</label>
          <input v-model="newTicket.name" id="ticketName" type="text" class="w-full" required />
        </div>
        <div class="mb-2">
          <label for="description" class="block text-gray-700">Description</label>
          <textarea v-model="newTicket.description" id="description" rows="3" class="w-full"></textarea>
        </div>
        <div class="flex flex-col mb-2 space-y-3">
          <div class="mb-2 items-center space-x-2 flex">
            <label class="block text-gray-700">VIP</label>
            <input v-model="newTicket.isVIP" type="checkbox" class="h-6 w-6" />
          </div>
          <div class="flex items-center space-x-3">
            <label for="count" class="block text-gray-700">Count</label>
            <input v-model="newTicket.count" id="count" type="number" class="w-full" min="1" required />
          </div>
          <div class="flex items-center space-x-3">
            <label for="price" class="block text-gray-700">Price</label>
            <input v-model="newTicket.price" id="price" type="number" class="w-full" min="0" required />
          </div>
        </div>
        
        <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 w-full">Add Ticket</button>
      </form>
      <!-- List of created tickets -->
      <div v-if="tickets.length > 0" class="md:w-1/2">
        <h2 class="text-xl font-semibold mb-2 text-green-700">Created Tickets</h2>
        <ul>
          <li v-for="(ticket, index) in tickets" :key="index" class="mb-2 bg-gray-100 p-4 border-2 rounded-lg shadow-md" :class="{ 'border-green-500': ticket.isVIP, 'border-blue-200': !ticket.isVIP }">
            {{ ticket.name }} - {{ ticket.isVIP ? 'VIP' : 'Regular' }} - Count: {{ ticket.count }} - Price: {{ ticket.price }}
            <button @click="deleteTicket(index)" class="ml-2 text-red-600">Delete</button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>







<script lang="ts">
import { computed, defineComponent, ref } from 'vue';
import { useShoppingStore } from '../store/store';
import { Ticket } from '../types';

export default defineComponent({
  setup() {
    const store = useShoppingStore();
    
    const newTicket = ref<Ticket>({
      name: '',
      description: '',
      isVIP: false,
      count: 1,
      price: 0,
    });

    const addTicket = () => {
      store.addTicket({ ...newTicket.value }).then(() => {
        newTicket.value = {
          name: '',
          description: '',
          isVIP: false,
          count: 1,
          price: 0,
        };
      })
    };

    const deleteTicket = (index: number) => store.deleteTicket(index)

    return {
      newTicket,
      addTicket,
      deleteTicket,
      tickets: computed(() => store.allTickets), // Return the tickets computed property
    };
  },
});
</script>


