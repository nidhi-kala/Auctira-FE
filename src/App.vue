<template>
  <div>
    <header class="bg-blue-500 p-4">
      <nav class="container mx-auto flex items-center justify-between">
        <router-link to="/" class="text-white text-2xl font-semibold">
          Ticket App
        </router-link>
        <div class="space-x-4">
          <router-link to="/admin" class="text-white">
            Admin
          </router-link>
          <router-link to="/cart" class="text-white">
            Cart
          </router-link>
        </div>
      </nav>
    </header>
    <main class="container mx-auto p-4">
      <router-view></router-view>
    </main>
  </div>
</template>
