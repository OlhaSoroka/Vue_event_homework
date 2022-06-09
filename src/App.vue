

<template>
  <div>
    <nav class="flex">
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
    <router-view></router-view>
  </div>

</template>


<script>
export default {

}

</script>


<style>
.nav-link {
  @apply p-2 text-red-800 text-xl font-bold
}
</style>
