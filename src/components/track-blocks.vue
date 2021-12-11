<template>
  <div class="wrapper-1" ref="oBox">
    <div class="motion-demo" ref="box">
      <img
        src="https://thefader-res.cloudinary.com/private_images/w_760,c_limit,f_auto,q_auto:best/Screen_Shot_2018-04-06_at_1.26.00_PM_seync5/alina-barazs-color-of-you.jpg"
        height="100px"
        width="100px"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "track-blocks",
  data() {
    return {};
  },
  mounted() {
    this.$refs.box.style.animationDelay = `${Math.floor(Math.random() * 100)}s`;
    this.$refs.oBox.style.animationDelay = `${Math.floor(
      Math.random() * 100
    )}s`;
  },
};
</script>

<style>
.motion-demo {
  width: 50px;
  height: 120px;
  border-radius: 50%;
  animation: x-axis 30s infinite ease;
  animation-direction: alternate;
}
.wrapper-1 {
  animation: y-axis 30s infinite ease-in-out;
  animation-direction: alternate;
}
@keyframes x-axis {
  0% {
    transform: translateX(-2px);
  }

  10% {
    transform: translateX(2px);
  }

  20% {
    transform: translateX(0px);
  }

  30% {
    transform: translateX(2px);
  }

  40% {
    transform: translateX(1px);
  }

  50% {
    transform: translateX(0px);
  }

  60% {
    transform: translateX(-1px);
  }

  70% {
    transform: translateX(2px);
  }

  80% {
    transform: translateX(-2px);
  }

  90% {
    transform: translateX(1px);
  }

  100% {
    transform: translateX(2px);
  }
}

@keyframes y-axis {
  0% {
    transform: translateY(-1px);
  }

  10% {
    transform: translateY(2px);
  }

  20% {
    transform: translateY(-1px);
  }

  30% {
    transform: translateY(2px);
  }

  40% {
    transform: translateY(0px);
  }

  50% {
    transform: translateY(2px);
  }

  60% {
    transform: translateY(3px);
  }

  70% {
    transform: translateY(0px);
  }

  80% {
    transform: translateY(-1px);
  }

  90% {
    transform: translateY(0px);
  }

  100% {
    transform: translateX(-3px);
  }
}
</style>
