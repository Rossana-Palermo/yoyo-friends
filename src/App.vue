<template>
  <div id="app">
    <header class="site-header">
      <router-link to="/" class="wordmark">YoYo <span>Friends</span></router-link>
    </header>
    <router-view />
  </div>
</template>
<style>
.site-header {
  padding: 28px 24px;
  background-color: var(--color-bg);
}

.wordmark {
  font-family: var(--font-heading);
  font-weight: 300;
  font-size: 22px;
  text-decoration: none;
  color: var(--color-primary-dark);
  letter-spacing: 0.5px;
}

.wordmark span {
  font-style: italic;
  color: var(--color-accent);
}

#app {
  min-height: 100vh;
}
</style>