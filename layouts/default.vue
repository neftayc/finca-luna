<template>
  <v-app>
    <v-app-bar
      elevate-on-scroll
      app
      :dark="slideFixes"
      :class="slideFixes ? 'header_bg' : 'transparent'"
      :elevation="slideFixes ? '6' : 0"
      :color="slideFixes ? '' : 'transparent'"
    >
      <v-container class="d-flex align-center pa-0">
        <div class="text-h6 text-md-h4 font-weight-bold text-italic">
          @Finca
        </div>
        <v-spacer></v-spacer>
        <template v-if="$vuetify.breakpoint.smAndDown">
          <v-app-bar-nav-icon
            :dark="slideFixes"
            :class="slideFixes ? 'white--text' : 'primary--text'"
          ></v-app-bar-nav-icon>
        </template>
        <template v-else>
          <v-btn text class="text-capitalize text-subtitle-2" to="#house"
            >Alojamiento</v-btn
          >
          <v-btn text class="text-capitalize text-subtitle-2" to="#services"
            >Servicios</v-btn
          >
          <v-btn text class="text-capitalize text-subtitle-2" to="#pricing"
            >Precios</v-btn
          >
          <v-btn text class="text-capitalize text-subtitle-2" to="#resenas"
            >Reseñas</v-btn
          >
        </template>
      </v-container>
    </v-app-bar>
    <!-- Sizes your content based upon application components -->
    <v-main>
      <Nuxt />
    </v-main>
    <v-footer
      color="primary darken-1"
      class="py-2 justify-center text-center pa-0"
    >
      <p class="text-center text-subtitle-2 white--text ma-0">
        Todo los derechos Reservados
      </p>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire',
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js',
      slideFixes: false,
    }
  },
  mounted() {
    const styeleHeader = this
    function onScroll() {
      // window.addEventListener('scroll', _.throttle(callbackFunc, 200))
      /**
       * Replace the line above with the following one
       * to see how many more times the "callbackFunc" is executed
       */
      window.addEventListener('scroll', callbackFunc)

      function callbackFunc() {
        const y = window.pageYOffset
        if (y < 100) {
          styeleHeader.slideFixes = false
        } else {
          styeleHeader.slideFixes = true
        }
      }
    }

    window.onload = function () {
      onScroll()
    }
  },
}
</script>
<style lang="scss" scoped>
.header_bg {
  background-color: rgba(78, 156, 130, 0.9) !important;
  border-color: rgba(78, 156, 130) !important;
}
</style>
