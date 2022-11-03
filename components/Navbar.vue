<template>
  <header role="banner">
    <nav class="navbar navbar-main navbar-expand-lg navbar-dark">
      <NuxtLink class="navbar-brand d-lg-none" href="/" aria-label="Home">
        <img
          class="brand-image"
          width="1046"
          height="239"
          src="~/assets/images/brand-full.png"
          alt="After Class Logo"
        />
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
      <div class="collapse navbar-collapse justify-content-center" id="mainNav">
        <!-- Links -->
        <ul class="navbar-nav">
          <li class="nav-item me-4">
            <NuxtLink class="nav-link nav-link--large" to="/">
              <font-awesome-icon icon="fa-solid fa-calendar" class="me-1" />
              <span>Calendar</span>
            </NuxtLink>
          </li>
          <li class="nav-item me-3">
            <NuxtLink
              class="nav-link nav-link--large"
              href="/events/interest/7491"
            >
              <font-awesome-icon :icon="['fas', 'moon']" class="me-1" />
              <span>Late Night</span>
            </NuxtLink>
          </li>
          <li class="nav-item me-3">
            <NuxtLink class="nav-link nav-link--large" href="/events/today">
              <font-awesome-icon icon="fa-solid fa-clock" class="me-1" />
              <span>Today</span>
            </NuxtLink>
          </li>
          <li class="nav-item me-3">
            <NuxtLink class="nav-link nav-link--large" href="/events/weekend/">
              <font-awesome-icon
                icon="fa-solid fa-calendar-week"
                class="me-1"
              />
              <span>Weekend</span>
            </NuxtLink>
          </li>

          <li class="nav-item me-3 link nav-item">
            <NuxtLink
              class="nav-link nav-link--large"
              href="/add/"
              title="Add Your Event"
            >
              <font-awesome-icon icon="fa-solid fa-plus-circle" class="me-1" />
              <span>Add Your Event</span>
            </NuxtLink>
          </li>
          <li class="nav-item me-3 link nav-item">
            <NuxtLink
              class="nav-link nav-link--large"
              href="/about-after-class/"
              title="About After Class"
            >
              <font-awesome-icon icon="fa-solid fa-info-circle" class="me-1" />
              <span>About</span>
            </NuxtLink>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>