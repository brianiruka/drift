

<template>
  <div id="app" class="container">
    <Particles
      id="tsparticles"
      :particlesInit="particlesInit"
      :particlesLoaded="particlesLoaded"
      :options="{
        background: {
          color: {
            value: '#191414',
          },
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onClick: {
              enable: false,
              mode: 'push',
            },
            onHover: {
              enable: false,
              mode: 'repulse',
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 400,
              duration: 2,
              opacity: 0,
              size: 0,
            },
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: this.colorsArray,
          },
          links: {
            color: '#ffffff',
            distance: 150,
            enable: false,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: 'none',
            enable: true,
            outMode: 'out',
            random: false,
            speed: 0.5,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              value_area: 800,
            },
            value: 160,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: 'circle',
          },
          size: {
            random: true,
            value: 5,
          },
        },
        detectRetina: true,
      }"
    />
    <div class="container">
      <div class="row">
        <div class="col-sm-6">
          <div
            class="row inner-row"
            style="background: rgba(237, 237, 237, 0.04)"
          >
            <input
              class="form-control basicAutoComplete"
              type="text"
              data-url="myurl"
              autocomplete="off"
            />
            <div class="col-sm-3">
              <track-blocks></track-blocks>
            </div>
            <div class="col-sm-3">
              <track-blocks></track-blocks>
            </div>
            <div class="col-sm-3">
              <track-blocks></track-blocks>
            </div>
            <div class="col-sm-3">
              <track-blocks></track-blocks>
            </div>
            <div class="col-sm-3">
              <track-blocks></track-blocks>
            </div>
            <div class="col-sm-3">
              <track-blocks></track-blocks>
            </div>
            <div class="col-sm-3">
              <track-blocks></track-blocks>
            </div>
            <div class="col-sm-3">
              <track-blocks></track-blocks>
            </div>
            <div class="col-sm-3">
              <track-blocks></track-blocks>
            </div>
            <div class="col-sm-3">
              <track-blocks></track-blocks>
            </div>
            <div class="col-sm-3">
              <track-blocks></track-blocks>
            </div>
            <div class="col-sm-3">
              <track-blocks></track-blocks>
            </div>
            <div class="col-sm-3">
              <track-blocks></track-blocks>
            </div>
            <div class="col-sm-3">
              <track-blocks></track-blocks>
            </div>
            <div class="col-sm-3">
              <track-blocks></track-blocks>
            </div>
            <div class="col-sm-3">
              <track-blocks></track-blocks>
            </div>
            <div class="col-sm-3">
              <track-blocks></track-blocks>
            </div>
            <div class="col-sm-3">
              <track-blocks></track-blocks>
            </div>
            <div class="col-sm-3">
              <track-blocks></track-blocks>
            </div>
            <div class="col-sm-3">
              <track-blocks></track-blocks>
            </div>
            <div class="col-sm-3">
              <track-blocks></track-blocks>
            </div>
            <div class="col-sm-3">
              <track-blocks></track-blocks>
            </div>
          </div>
        </div>
        <div class="col-sm-6 d-flex">
          <div
            class="container inner"
            style="background: rgba(237, 237, 237, 0.04)"
          >
            <div class="row">
              <div class="col-sm-12 py-sm-3" style="color: #fff">Test</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TrackBlocks from "./components/track-blocks.vue";
import * as Vibrant from "node-vibrant";

export default {
  name: "app",
  components: {
    TrackBlocks,
  },
  data() {
    return {
      colorsArray: ["#fff"],
    };
  },
  mounted() {
    window.vm = this;
    let newColorArray = [];
    Vibrant.from(
      "https://thefader-res.cloudinary.com/private_images/w_760,c_limit,f_auto,q_auto:best/Screen_Shot_2018-04-06_at_1.26.00_PM_seync5/alina-barazs-color-of-you.jpg"
    )
      .maxColorCount(15)
      .getPalette(function (err, palette) {
        TouchList.colorsArray = [];
        for (const property in palette) {
          newColorArray.push(palette[property].hex);
        }
      });
    // "https://upload.wikimedia.org/wikipedia/en/b/ba/Last_day_of_summer.png"

    this.colorsArray = newColorArray;
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

canvas {
  z-index: -1 !important;
}

.container.inner,
.row.inner-row {
  border: 5px solid white;
  margin: 0 16px;
}

.form-control {
  border-radius: 0;
}
</style>
