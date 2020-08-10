<template>
  <div>
    <header-navigation />
    <div class="content">
      <Nuxt />
    </div>
  </div>
</template>

<style>
html {
  font-family:
    -apple-system,
    BlinkMacS
    stemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.content {
  margin: 0 auto;
  max-width: 47rem;
}
</style>
