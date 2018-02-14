<template>
  <div class="navigation" >
    <ul>
      <router-link to="/berlin" tag="li"><a>Berlin</a></router-link>
      <router-link to="/frankfurt" tag="li"><a>Frankfurt</a></router-link>
      <router-link to="/hamburg" tag="li"><a>Hamburg</a></router-link>
      <router-link to="/munich" tag="li"><a>Munich</a></router-link>
      <router-link to="/prague" tag="li"><a>Prague</a></router-link>
    </ul>
  </div>
</template>

<style scoped>

@media (max-width: 800px) {
  .navigation {
  display: none;
  }
}

</style>