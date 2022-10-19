<template>
  <div
    class="carousel"
    tabindex="0"
    @keydown="checkSlide($event)"
    @mousemove="move($event)"
    @mousedown="start($event)"
    @mouseup="end($event)"
    @mouseleave="end($event), startAutoplay()"
    @mouseover="pauseAutoplay($event)"
  >
    <template v-for="(slide, index) in slides">
      <v-card
        :key="'slide-item-' + index"
        class="carousel-slider"
        :class="slide.style"
        @click="validateMove(slide.style)"
      >
        <img :src="slide.image" :alt="slide.image" />
      </v-card>
    </template>

    <v-btn
      class="btn-control"
      fab
      small
      absolute
      top
      left
      depressed
      color="primary"
      @click.prevent="prev"
    >
      <v-icon>mdi-arrow-left</v-icon>
    </v-btn>

    <v-btn
      class="btn-control"
      fab
      small
      absolute
      top
      right
      depressed
      color="primary"
      @click.prevent="next"
    >
      <v-icon>mdi-arrow-right</v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {
  name: 'NeftaCarousel',
  data: () => ({
    autoplayHoverPause: true, // Inicia el autoplay de manera automacita y sera pauseado por el hover
    autoplay: true, // Inicia el autoplay con un control
    autoplayTimeout: 2000, // Tiempo de cambio de slide
    autoplayInterval: null, // Valor del interval play

    minSwipeDistance: 10,
    index: 1,
    slides: [
      {
        style: 'left-opacity',
        show1: true,
        image: 'https://picsum.photos/id/230/600/300',
      },
      {
        style: 'left',
        active: true,
        image: 'https://picsum.photos/id/231/600/300',
      },
      {
        style: 'active',
        show: true,
        image: 'https://picsum.photos/id/232/600/300',
      },
      { style: 'right', image: 'https://picsum.photos/id/233/600/300' },
      { style: 'right-opacity', image: 'https://picsum.photos/id/234/600/300' },
      { style: '', image: 'https://picsum.photos/id/235/600/300' },
      { style: '', image: 'https://picsum.photos/id/236/600/300' },
      { style: '', image: 'https://picsum.photos/id/237/600/300' },
      { style: '', image: 'https://picsum.photos/id/238/600/300' },
      { style: '', image: 'https://picsum.photos/id/239/600/300' },
      { style: '', image: 'https://picsum.photos/id/240/600/300' },
    ],
  }),
  computed: {
    slidesLength() {
      return this.slides.length
    },
  },

  mounted() {
    if (this.autoplayHoverPause) {
      this.startAutoplay()
    }
  },

  destroyed() {
    this.pauseAutoplay()
  },

  methods: {
    next() {
      this.index++

      if (this.index >= this.slidesLength) {
        this.index = 0
      }

      this.activeSlide()
    },
    prev() {
      this.index--
      if (this.index < 0) {
        this.index = this.slidesLength - 1
      }
      this.activeSlide()
    },
    activeSlide() {
      this.slides = this.slides.map((s, i) => {
        const d = s

        if (this.index === i) {
          d.active = true
          d.style = 'active'
        } else {
          d.active = false
          d.style = ''
        }
        return d
      })
      if (this.index + 1 === this.slidesLength) {
        this.slides[this.index - 1].style = 'left' // left
        this.slides[this.index - 2].style = 'left-opacity' // left

        this.slides[0].style = 'right' // right
        this.slides[1].style = 'right-opacity' // right
      } else if (this.index + 2 === this.slidesLength) {
        this.slides[this.index - 1].style = 'left' // left
        this.slides[this.index - 2].style = 'left-opacity' // left

        this.slides[this.index + 1].style = 'right' // right
        this.slides[0].style = 'right-opacity' // right
      } else if (this.index === 0) {
        this.slides[this.slidesLength - 1].style = 'left' // left
        this.slides[this.slidesLength - 2].style = 'left-opacity' // left

        this.slides[this.index + 1].style = 'right' // right
        this.slides[this.index + 2].style = 'right-opacity' // right
      } else if (this.index === 1) {
        this.slides[this.index - 1].style = 'left' // left
        this.slides[this.slidesLength - 1].style = 'left-opacity' // left

        this.slides[this.index + 1].style = 'right' // right
        this.slides[this.index + 2].style = 'right-opacity' // right
      } else {
        this.slides[this.index - 1].style = 'left' // left
        this.slides[this.index - 2].style = 'left-opacity' // left

        this.slides[this.index + 1].style = 'right' // right
        this.slides[this.index + 2].style = 'right-opacity' // right
      }
    },

    checkSlide(event) {
      if (event.keyCode === 39) {
        this.next()
      } else if (event.keyCode === 37) {
        this.prev()
      }
    },

    end() {
      this.mousedown = false
      this.dragOffsetX = 0
      this.dragOffsetY = 0
    },

    start(e) {
      if (!e.touches) {
        e.preventDefault()
      }
      this.mousedown = true
      this.dragStartX =
        'ontouchstart' in window ? e.touches[0].clientX : e.clientX
      this.dragStartY =
        'ontouchstart' in window ? e.touches[0].clientY : e.clientY
    },

    move(e) {
      if (!this.mousedown) {
        return
      }
      const eventPosX =
        'ontouchstart' in window ? e.touches[0].clientX : e.clientX
      const eventPosY =
        'ontouchstart' in window ? e.touches[0].clientY : e.clientY
      const deltaX = this.dragStartX - eventPosX
      const deltaY = this.dragStartY - eventPosY
      this.dragOffsetX = deltaX
      this.dragOffsetY = deltaY

      // If the swipe is more significant on the Y axis, do not move the slides because this is a scroll gesture
      if (Math.abs(this.dragOffsetY) > Math.abs(this.dragOffsetX)) {
        return
      }
      if (this.dragOffsetX > this.minSwipeDistance) {
        this.end()
        this.next()
      } else if (this.dragOffsetX < -this.minSwipeDistance) {
        this.end()
        this.prev()
      }
    },

    pauseAutoplay() {
      if (this.autoplayInterval) {
        this.autoplayInterval = clearInterval(this.autoplayInterval)
      }
    },

    startAutoplay() {
      if (this.autoplay) {
        this.autoplayInterval = setInterval(() => {
          this.next()
        }, this.autoplayTimeout)
      }
    },

    validateMove(style) {
      if (style === 'left') {
        this.prev()
      } else if (style === 'right') {
        this.next()
      }
    },
  },
}
</script>

<style lang="scss">
.carousel {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 300px;
  z-index: 10;
  display: flex;
  justify-content: center;
}
.btn-control {
  top: 50% !important;
  z-index: 2;
}

.carousel-slider img {
  width: 100%;
  height: 100%;
}

.carousel-slider {
  width: 30%;
  position: absolute;
  top: 0;
  bottom: 0;
  display: none;
}

.carousel-slider.active {
  display: block;
  z-index: 1;
  transform: translateX(0%);
  transition: transform 0.5s ease-out;
}

.carousel-slider.left-opacity {
  display: block;
  opacity: 0.2;
  transform: translateX(-110%) scale(0.4);
  transition: transform 0.5s ease-out;
  z-index: -1;
  overflow: hidden;
}

.carousel-slider.left {
  display: block;
  opacity: 0.9;
  transform: translateX(-60%) scale(0.7);
  transition: transform 0.5s ease-out;
  z-index: 0;
}

.carousel-slider.right {
  display: block;
  opacity: 0.9;
  transform: translateX(60%) scale(0.7);
  transition: transform 0.5s ease-out;
}

.carousel-slider.right-opacity {
  display: block;
  opacity: 0.2;
  transform: translateX(110%) scale(0.4);
  transition: transform 0.5s ease-out;
}
</style>
