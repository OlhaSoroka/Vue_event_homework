<template>
  <nav class="flex border-2 bg-green-700 text-white p-4">
    <router-link :to="{ name: 'home' }">
      <div class="nav-link">Home</div>
    </router-link>
    <router-link :to="{ name: 'events' }">
      <div class="nav-link">Events Dashboard</div>
    </router-link>
    <router-link :to="{ name: 'create' }">
      <div class="nav-link">Create new Event</div>
    </router-link>
  </nav>
</template>

<script>

</script>

<style>
.nav-link {
  @apply p-2 text-white text-xl font-bold border-2 border-white rounded-xl mx-2 bg-emerald-600 transition-colors hover:bg-emerald-800
}
</style>