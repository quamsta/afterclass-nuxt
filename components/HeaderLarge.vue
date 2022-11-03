<template>
  <div>
    <div class="header__container">
      <div class="container-fluid">
        <div class="row d-none d-lg-block">
          <div class="col-lg-12">
            <div class="header-graphic">
              <NuxtLink to="/" class="d-block">
                <img
                  class="header-graphic__img"
                  src="~/assets/images/header.png"
                  alt="After Class: Student Events at Iowa"
                  width="2880"
                  height="786"
                />
              </NuxtLink>
            </div>
          </div>
        </div>
        <Navbar />
      </div>
    </div>
  </div>
</template>
<style lang="scss">
</style>
<script setup>
</script>