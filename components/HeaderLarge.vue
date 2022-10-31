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
                  alt="After Class: UI Culture, arts, and entertainment."
                  width="2880"
                  height="786"
                />
              </NuxtLink>
            </div>
          </div>
        </div>
        <header role="banner">
          <!--Navbar-->
          <nav class="navbar navbar-main navbar-expand-lg navbar-dark">
            <NuxtLink class="navbar-brand d-lg-none" href="/" aria-label="Home">
              <img class="brand-image" src="~/assets/images/brand-full.png" />
            </NuxtLink>
            <button
              class="navbar-toggler border-0"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#mainNav"
              aria-controls="mainNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <!-- Collapsible content -->
            <div
              class="collapse navbar-collapse justify-content-center"
              id="mainNav"
            >
              <!-- Links -->
              <ul class="navbar-nav">
                <li class="nav-item me-4">
                  <NuxtLink class="nav-link nav-link--large" to="/">
                    <font-awesome-icon icon="fa-solid fa-calendar" />
                    Calendar
                  </NuxtLink>
                </li>
                <li class="nav-item me-3">
                  <NuxtLink
                    class="nav-link nav-link--large"
                    href="/events/interest/7491"
                  >
                    <font-awesome-icon :icon="['fas', 'moon']" /> Late Night
                  </NuxtLink>
                </li>
                <li class="nav-item me-3">
                  <NuxtLink
                    class="nav-link nav-link--large"
                    href="/events/today"
                  >
                    <font-awesome-icon icon="fa-solid fa-clock" /> Today
                  </NuxtLink>
                </li>
                <li class="nav-item me-3">
                  <NuxtLink
                    class="nav-link nav-link--large"
                    href="/events/weekend/"
                  >
                    <font-awesome-icon icon="fa-solid fa-calendar-week" />
                    Weekend
                  </NuxtLink>
                </li>

                <li class="nav-item me-3 link nav-item">
                  <NuxtLink
                    class="nav-link nav-link--large"
                    href="/add/"
                    title="Add Your Event"
                  >
                    <font-awesome-icon icon="fa-solid fa-plus-circle" />
                    Add Your Event
                  </NuxtLink>
                </li>
                <li class="nav-item me-3 link nav-item">
                  <NuxtLink
                    class="nav-link nav-link--large"
                    href="/about-after-class/"
                    title="About After Class"
                  >
                    <font-awesome-icon icon="fa-solid fa-info-circle" /> About
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </nav>
        </header>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
</style>
<script setup>
</script>