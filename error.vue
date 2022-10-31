<template>
  <div>
    <IowaBar />

    <div>
      <Title>Event not found</Title>
      <HeaderSmall />

      <div class="container">
        <div class="row justify-content-center">
          <div
            class="col-sm col-lg-9 col-xl-8 content-container pt-5"
            role="main"
          >
            <article>
              <h1>Event not found.</h1>
              <div class="content">
                <p>We can't find event you're looking for.</p>
                <p>
                  After Class doesn't keep past events listed for very long. The
                  event you're looking for may have already happened. Check out
                  what's
                  <NuxtLink href="/events/today/">happening today</NuxtLink>
                  or
                  <NuxtLink href="/events/weekend/">this weekend!</NuxtLink>
                </p>
                <h2>Commonly searched-for pages:</h2>
                <ul>
                  <li>
                    <NuxtLink href="/add/">Submit Your Event</NuxtLink>
                  </li>
                  <li>
                    <NuxtLink href="/about-after-class/"
                      >About After Class</NuxtLink
                    >
                  </li>
                </ul>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>

    <Footer />
  </div>
</template>

