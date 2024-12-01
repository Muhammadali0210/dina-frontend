<template>
    <div class="flex flex-col justify-center items-center w-[100%] min-h-[50vh]">
        <div class="loader-container">
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
        </div>
        <h3 class="mt-4 font-medium text-gray-800 dark:text-slate-400">Malumotlar yuklanmoqda...</h3>
    </div>
</template>

<style>
.loader-container {
  --uib-size: 100px;
  --uib-color: rgb(110, 177, 253);
  --uib-speed: 1.5s;
  --dot-size: calc(var(--uib-size) * 0.17);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: var(--uib-size);
  width: var(--uib-size);
  animation: smoothRotate calc(var(--uib-speed) * 1.8) linear infinite;
}

.dot {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  height: 100%;
  width: 100%;
  animation: rotate var(--uib-speed) ease-in-out infinite;
}

.dot::before {
  content: "";
  height: var(--dot-size);
  width: var(--dot-size);
  border-radius: 50%;
  background-color: var(--uib-color);
  transition: background-color 0.3s ease;
}

.dot:nth-child(2),
.dot:nth-child(2)::before {
  animation-delay: calc(var(--uib-speed) * -0.835 * 0.5);
}

.dot:nth-child(3),
.dot:nth-child(3)::before {
  animation-delay: calc(var(--uib-speed) * -0.668 * 0.5);
}

.dot:nth-child(4),
.dot:nth-child(4)::before {
  animation-delay: calc(var(--uib-speed) * -0.501 * 0.5);
}

.dot:nth-child(5),
.dot:nth-child(5)::before {
  animation-delay: calc(var(--uib-speed) * -0.334 * 0.5);
}

.dot:nth-child(6),
.dot:nth-child(6)::before {
  animation-delay: calc(var(--uib-speed) * -0.167 * 0.5);
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  65%,
  100% {
    transform: rotate(360deg);
  }
}

@keyframes smoothRotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
