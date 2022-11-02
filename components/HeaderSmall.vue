<template>
  <div class="header__container header__container--small">
    <div class="container-fluid">
      <header role="banner">
        <nav class="navbar navbar-main navbar-expand-lg navbar-dark">
          <!-- Navbar brand -->
          <NuxtLink class="navbar-brand me-5" href="/" aria-label="Home">
            <img
              class="brand-image"
              width="1046"
              height="239"
              src="~/assets/images/brand-full.png"
              alt="After Class Logo"
            />
          </NuxtLink>
          <!-- Collapse button -->
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
          <div class="collapse navbar-collapse" id="mainNav">
            <!-- Links -->
            <ul class="navbar-nav me-auto">
              <li class="nav-item me-4">
                <NuxtLink class="nav-link" href="/">
                  <font-awesome-icon :icon="['fas', 'calendar']" />
                  Calendar
                </NuxtLink>
              </li>
              <li class="nav-item me-3">
                <NuxtLink class="nav-link" href="/events/interest/7491/">
                  <font-awesome-icon :icon="['fas', 'moon']" /> Late Night
                </NuxtLink>
              </li>
              <li class="nav-item me-3">
                <NuxtLink class="nav-link" href="/events/today">
                  <font-awesome-icon :icon="['fas', 'clock']" /> Today
                </NuxtLink>
              </li>
              <li class="nav-item me-3">
                <NuxtLink class="nav-link" href="/events/weekend/">
                  <font-awesome-icon :icon="['fas', 'calendar-week']" /> Weekend
                </NuxtLink>
              </li>

              <li class="nav-item me-3 link nav-item">
                <NuxtLink class="nav-link" href="/add" title="Add Event">
                  <font-awesome-icon :icon="['fas', 'plus-circle']" />
                  Add Event
                </NuxtLink>
              </li>

              <li class="nav-item me-3 link">
                <NuxtLink
                  class="nav-link"
                  href="/about-after-class/"
                  title="About After Class"
                >
                  <font-awesome-icon :icon="['fas', 'info-circle']" />
                  About
                </NuxtLink>
              </li>
            </ul>
          </div>
          <!-- Collapsible content -->
        </nav>
      </header>
      <!-- <% include Trending %> -->
    </div>
  </div>
</template>