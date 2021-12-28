

<template>
  <div id="app" class="container">
    <Particles
      id="tsparticles"
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
            random: true,
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
        <div class="col-sm-12 col-md-6">
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
            <div v-for="(album, index) in albums" :key="album.images" class="col-sm-4 col-md-3" v-on:click="changeParticlesColor(index)">
              <track-blocks :coverart="album.images[0].url" ></track-blocks>
            </div>
          </div>
        </div>
        <div class="col-sm-12 col-md-6 d-flex">
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
import Spotify from "spotify-web-api-js";
import SpotifyWebApi from "spotify-web-api-js";
export default {
  name: "app",
  components: {
    TrackBlocks,
  },
  data() {
    return {
      colorsArray: ["#fff"],
      spot: new Spotify(),
      spotAPI: new SpotifyWebApi(),
      authToken: '',
      albums: {},
    };
  },
  mounted() {
    this.getAuthToken(this.logToken)


  },
  methods: {
    logToken(token){
      this.authToken = token
      this.spotAPI.setAccessToken(token);
      const self = this;
      this.spotAPI.getArtistAlbums(
      "43ZHCT0cAZBISjO8DG9PnE",
      function (err, data) {
        self.albums = data.items;
      }
    );
    },

    changeParticlesColor(index) {
      const self = this;
      let newColorArray = [];
      Vibrant.from(
        this.albums[index].images[0].url
      )
        .maxColorCount(15)
        .getPalette(function (err, palette) {
          for (const property in palette) {
            newColorArray.push(palette[property].hex);
          }
          self.$children[0].container.options.particles.color.value =
            newColorArray;

          self.$children[0].container.refresh();
        });
    },
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
  background: none;
}
</style>
