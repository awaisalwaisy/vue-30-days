<template>
  <div
    class="min-w-screen min-h-screen bg-yellow-500 flex items-center justify-center px-5 py-5"
  >
    <div class="text-yellow-100">
      <h1 class="text-3xl text-center mb-3 font-extralight">
        When will
        <span class="font-light">Vue30Days</span>
        live?*
      </h1>
      <div class="text-6xl text-center flex w-full items-center justify-center">
        <div class="text-2xl mr-1 font-extralight">in</div>
        <div class="w-24 mx-1 p-2 bg-white text-yellow-500 rounded-lg">
          <div class="font-mono leading-none" x-text="days">{{ days }}</div>
          <div class="font-mono uppercase text-sm leading-none">Day</div>
        </div>
        <div class="w-24 mx-1 p-2 bg-white text-yellow-500 rounded-lg">
          <div class="font-mono leading-none" x-text="hours">{{ hours }}</div>
          <div class="font-mono uppercase text-sm leading-none">Hours</div>
        </div>
        <div class="w-24 mx-1 p-2 bg-white text-yellow-500 rounded-lg">
          <div class="font-mono leading-none" x-text="minutes">
            {{ minutes }}
          </div>
          <div class="font-mono uppercase text-sm leading-none">Minutes</div>
        </div>
        <div class="text-2xl mx-1 font-extralight">and</div>
        <div class="w-24 mx-1 p-2 bg-white text-yellow-500 rounded-lg">
          <div class="font-mono leading-none" x-text="seconds">
            {{ seconds }}
          </div>
          <div class="font-mono uppercase text-sm leading-none">Seconds</div>
        </div>
      </div>
      <p class="text-sm text-center mt-3">
        <a
          href="https://rebrand.ly/vue30days"
          class="underline hover:text-yellow-200"
          target="_blank"
        >
          Till then do register yourself
        </a>
      </p>
      <p class="text-sm text-center mt-3">
        <a
          href="http://amicoder.lol/"
          class="underline hover:text-yellow-200"
          target="_blank"
        >
          Read some of my articles
        </a>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
// nuxt head here
// usehead here

import { useStore } from "~~/stores/main";

const days = ref(0);
const hours = ref(0);
const minutes = ref(0);
const seconds = ref(0);

const head = useHead({
  title: `Launching on 1st March 2023`,
  meta: [
    {
      hid: "description",
      name: "description",
      content: `Launching Vue30Days in ${days.value} day - ${hours.value} hours - ${minutes.value} minutes ${seconds.value} seconds}`,
    },
  ],
});

const store = useStore();
store.toggleCounter(true);

const countDownDate = new Date("March 1, 2023 00:00:00").getTime();

const x = setInterval(() => {
  // Get today's date and time
  const now = new Date().getTime();

  // Find the distance between now and the count down date
  const distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  days.value = Math.floor(distance / (1000 * 60 * 60 * 24));
  hours.value = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  minutes.value = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  seconds.value = Math.floor((distance % (1000 * 60)) / 1000);

  // If the count down is over, write some text
  if (distance < 0) {
    // toggle counter
    store.toggleCounter(false);

    clearInterval(x);
    days.value = 0;
    hours.value = 0;
    minutes.value = 0;
    seconds.value = 0;
  }
}, 1000);
</script>
