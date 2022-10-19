<template>
  <div>
    <section id="banner">
      <v-img
        :src="require('@/assets/cielo.png')"
        :height="$vuetify.breakpoint.xsOnly ? '' : '100vh'"
        width="100%"
        alt="image-main-banner"
        class="mt-n16 pt-16 banner_image"
      >
        <v-card
          elevation="0"
          color="transparent"
          height="100%"
          class="d-flex flex-column justify-center"
        >
          <v-container>
            <v-row no-gutters>
              <v-col cols="12" md="8" lg="6" xl="6" order="1" order-md="0">
                <div class="my-md-10 text-center text-md-left pb-5 pb-md-0">
                  <h1
                    class="text-h5 text-sm-h4 text-md-h4 text-lg-h3 mb-4 mb-md-8 font-weight-bold text--lighten-1"
                  >
                    Centro de recreación
                    <span
                      class="primary--text font-weight-black d-block d-md-auto"
                    >
                      "Finca La Luna"
                    </span>
                    en afueras de Paucartambo
                  </h1>
                  <p class="text-body-2 text-sm-body-1 font-weight-regular">
                    Cansado de la actividades rutinarias, cansado de la ruidosa
                    ciudad, visitanos un fin de semana a pasar momentos
                    inolvidables en la naturaleza y divierte con las actividades
                    que tenemos para ti.
                  </p>
                  <v-btn :block="$vuetify.breakpoint.xsOnly" color="accent"
                    >Reservar Espacio</v-btn
                  >
                </div>
              </v-col>
              <v-col cols="12" md="4" lg="6" xl="6" order="0" order-md="1">
                <v-img
                  :style="
                    $vuetify.breakpoint.xsOnly
                      ? ' '
                      : $vuetify.breakpoint.smOnly
                      ? 'position: absolute; bottom: 10px; right: -300px; opacity: .2; z-index:-1'
                      : 'position: absolute; top: 10px'
                  "
                  min-width="500"
                  :src="require('@/assets/image-banner.png')"
                ></v-img>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-img>
    </section>
    <section style="position: relative">
      <LazyHydrate when-visible>
        <img
          :src="require('@/assets/forest-left.png')"
          class="img_decoration_left"
        />
      </LazyHydrate>
      <v-container class="text-center">
        <h2 class="text-h6 text-md-h5 text-lg-h4 font-weight-bold">
          ¿Cansado de una ciudad ruidosa?
          <span class="font-weight-black primary--text d-block">
            Finca La Luna</span
          >
          Te da la oportunidad de:
        </h2>

        <v-row dense>
          <v-col
            v-for="item in [
              {
                id: 1,
                image: 'https://picsum.photos/200?random=1',
                title: 'Respirar aire limpio!',
                description:
                  'Seguramente estas cansado del aire sucio de la ciudad, ven a limpiar tus pulmones y renovar energia!',
              },
              {
                id: 2,
                image: 'https://picsum.photos/200?random=2',
                title: 'Diversión en familia',
                description:
                  'No sabes donde relajarte, divertirte o compartir un momento con la familia y amigos, acompañanos!',
              },
              {
                id: 3,
                image: 'https://picsum.photos/200?random=3',
                title: 'Espacios para eventos',
                description:
                  'Encuentrar un lugar adecuado para tus eventos o actividades',
              },
              {
                id: 4,
                image: 'https://picsum.photos/200?random=4',
                title: 'Espacios de Descanso',
                description:
                  'Si solo quieres pasar un tiempo de meditación, leer un libro o caminar, este es el lugar ideal!',
              },
            ]"
            :key="'section-1-' + item.id"
            cols="12"
            sm="6"
          >
            <v-card
              elevation="0"
              max-width="350"
              class="mx-auto transparent text-center px-4 py-2 py-md-4 mb-0"
            >
              <v-img
                :src="item.image"
                :alt="'image-' + item.id"
                class="rounded-circle mx-auto mb-6"
                width="130"
              ></v-img>
              <h3
                class="text-subtitle-1 text-md-subtitle-1 font-weight-bold primary--text"
              >
                {{ item.title }}
              </h3>
              <v-divider
                class="my-4 mx-16 primary mx-auto"
                style="max-width: 120px"
              ></v-divider>
              <p class="mb-0 text-body-1">
                {{ item.description }}
              </p>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
      <LazyHydrate when-visible>
        <img
          :src="require('@/assets/forest-right.png')"
          class="img_decoration_right"
        />
      </LazyHydrate>
    </section>

    <LazyHydrate when-visible>
      <section class="py-8 py-md-15" style="position: relative; z-index: 1">
        <v-container>
          <nefta-carousel />
        </v-container>
        <v-container class="py-16">
          <v-row align="center">
            <v-col cols="12" sm="6" class="pl-10" style="position: relative">
              <v-divider
                vertical
                class="primary lighten-2"
                style="
                  max-height: 40%;
                  min-height: 40%;
                  position: absolute;
                  left: -1px;
                  border-width: 0 1px;
                  box-shadow: 0 0 2px 0 #31f529;
                  z-index: 1;
                "
              ></v-divider>
              <v-divider
                vertical
                class="grey lighten-3"
                style="
                  max-height: 90%;
                  min-height: 80%;
                  position: absolute;
                  left: 0;
                  top: 0;
                "
              ></v-divider>
              <div class="text-left">
                <h3 class="text-h4 mb-4">
                  Know <span class="d-block text-h3">Your Air Quality</span>
                </h3>
                <p class="text-body-2 mb-8">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Cupiditate, facilis? Et natus placeat laudantium numquam,
                  eaque iste illum fugiat quaerat quam, necessitatibus a est
                  tempore cum laborum fugit error similique!
                </p>
                <v-btn color="primary" class="text-none">Read more</v-btn>
              </div>
            </v-col>
            <v-col cols="12" sm="6">
              <nefta-chart />
            </v-col>
          </v-row>
          <v-row align="center">
            <v-col cols="12" sm="6">
              <nefta-chart />
            </v-col>
            <v-col cols="12" sm="6" class="pr-10" style="position: relative">
              <v-divider
                vertical
                class="primary lighten-2"
                style="
                  max-height: 40%;
                  min-height: 40%;
                  position: absolute;
                  right: -1px;
                  border-width: 0 1px;
                  box-shadow: 0 0 4px 0 #31f529;
                  z-index: 1;
                "
              ></v-divider>
              <v-divider
                vertical
                class="grey lighten-3"
                style="
                  max-height: 90%;
                  min-height: 80%;
                  position: absolute;
                  right: 0;
                  top: 0;
                "
              ></v-divider>
              <div class="text-right">
                <h3 class="text-h4 mb-4">
                  Its Impact <span class="d-block text-h3">On Your health</span>
                </h3>
                <p class="text-body-2 mb-8">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Cupiditate, facilis? Et natus placeat laudantium numquam,
                  eaque iste illum fugiat quaerat quam, necessitatibus a est
                  tempore cum laborum fugit error similique!
                </p>
                <v-btn color="primary" class="text-none">Read more</v-btn>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </section>
    </LazyHydrate>

    <LazyHydrate when-visible>
      <section class="py-8 py-md-15" style="position: relative; z-index: 1">
        <v-container>
          <h2
            class="text-h6 text-md-h5 text-lg-h4 font-weight-bold text-center text-md-left"
          >
            <span class="primary--text text-subtitle-1">Conocenos</span>
            <br />
            <span class="primary--text d-block">"Finca la luna"</span> es el
            lugar ideal para relajarse.
          </h2>
        </v-container>
        <v-slide-group v-if="$vuetify.breakpoint.smAndDown" class="transparent">
          <v-slide-item
            v-for="item in [
              {
                id: 1,
                image: 'https://picsum.photos/320/200?random=10',
                description:
                  'Nuestra base se encuentra en un área ecológicamente limpia.',
              },
              {
                id: 2,
                image: 'https://picsum.photos/320/200?random=4',
                description: 'Ofrecemos una amplia variedad de servicios',
              },
              {
                id: 3,
                image: 'https://picsum.photos/320/200?random=12',
                description: 'Podrás celebrar cualquier tipo de evento',
              },
              {
                id: 4,
                image: 'https://picsum.photos/320/200?random=15',
                description:
                  'Podrás realizar actividades de campo junto a nosotros',
              },
            ]"
            :key="'section-2-' + item.id"
            class="ml-4 my-2"
          >
            <v-card
              :width="$vuetify.breakpoint.xsOnly ? 220 : 'calc(50% - 32px)'"
              class="card-slides"
            >
              <v-img :src="item.image" contain></v-img>
              <div class="pa-2 text-body-2">{{ item.description }}</div>
            </v-card>
          </v-slide-item>
        </v-slide-group>
        <v-container v-else>
          <v-slide-group class="transparent slider-destok">
            <v-slide-item
              v-for="item in [
                {
                  id: 1,
                  image: 'https://picsum.photos/320/200?random=10',
                  description:
                    'Nuestra base se encuentra en un área ecológicamente limpia.',
                },
                {
                  id: 2,
                  image: 'https://picsum.photos/320/200?random=4',
                  description: 'Ofrecemos una amplia variedad de servicios',
                },
                {
                  id: 3,
                  image: 'https://picsum.photos/320/200?random=12',
                  description: 'Podrás celebrar cualquier tipo de evento',
                },
                {
                  id: 4,
                  image: 'https://picsum.photos/320/200?random=15',
                  description:
                    'Podrás realizar actividades de campo junto a nosotros',
                },
              ]"
              :key="'section-2-' + item.id"
              class="mr-4 my-2"
            >
              <v-card :width="'calc(50% - 4px)'" class="card-slides">
                <v-img :src="item.image" contain></v-img>
                <div class="pa-2 text-body-2">{{ item.description }}</div>
              </v-card>
            </v-slide-item>
          </v-slide-group>
        </v-container>
      </section>
    </LazyHydrate>

    <LazyHydrate when-visible>
      <section id="house" class="py-8 py-md-15" style="position: relative">
        <img
          :src="require('@/assets/cielo-two.png')"
          class="img_decoration_top"
        />

        <img
          :src="require('@/assets/forest-two-right.png')"
          class="img_decoration_two_right"
        />
        <v-img
          :src="require('@/assets/cielo-two.png')"
          class="img_decoration_bottom"
        >
          <v-container>
            <h2
              class="pt-5 pb-10 py-md-8 text-center text-h6 text-md-h5 text-lg-h4 font-weight-bold"
            >
              Cada momento en nuestra base
              <span class="primary--text font-weight-black"
                >Será Inolvidable</span
              >
            </h2>
            <v-row
              v-for="item in [
                {
                  id: 1,
                  image: 'https://picsum.photos/300/200?random=41',
                  description:
                    'Tu boda será como un cuento de hadas. Tenemos muchos lugares hermosos para fotos de bodas. Nuestras casas y cenadores están diseñados para cualquier número de huéspedes.',
                  tag: 'Bodas',
                },
                {
                  id: 2,
                  image: 'https://picsum.photos/300/200?random=52',
                  description:
                    'Sus vacaciones definitivamente serán recordadas por mucho tiempo, porque aquí puede encontrar entretenimiento para todos los gustos.',
                  tag: 'Cumpleaños',
                },
                {
                  id: 3,
                  image: 'https://picsum.photos/300/200?random=63',
                  description:
                    'Olvídate del trabajo y diviértete con tus compañeros. En nuestra base puede realizar no solo una fiesta corporativa, sino todo un evento temático.',
                  tag: 'Corporativo',
                },
              ]"
              :key="'section-3-' + item.id"
              class="mb-8"
            >
              <v-col cols="12" md="7">
                <v-card class="transparent" elevation="0">
                  <v-img
                    :src="item.image"
                    :max-width="$vuetify.breakpoint.xsOnly ? '100%' : '90%'"
                    class="rounded-lg"
                  >
                  </v-img>
                  <v-btn
                    color="primary darken-1"
                    class="pa-2 rounded-0 text-caption text-md-body-1"
                    absolute
                    right
                    :top="$vuetify.breakpoint.xsOnly"
                    :bottom="!$vuetify.breakpoint.xsOnly"
                    :min-width="$vuetify.breakpoint.xsOnly ? 100 : 150"
                    elevation="9"
                  >
                    {{ item.tag }}
                  </v-btn>
                </v-card>
              </v-col>
              <v-col cols="12" md="5">
                <v-card
                  elevation="0"
                  max-width="300"
                  class="transparent px-2 mx-auto ml-sm-auto text-center text-md-left"
                >
                  <p class="text-body-2 text-sm-body-1">
                    {{ item.description }}
                  </p>
                  <v-btn
                    color="accent"
                    min-width="170"
                    large
                    elevation="9"
                    class="text-none text-subtitle-2 rounded-xl"
                  >
                    Enviar Solicitud
                  </v-btn>
                </v-card>
              </v-col>
            </v-row>
          </v-container>

          <v-container>
            <h2
              class="text-center text-h6 text-md-h5 text-lg-h4 font-weight-bold"
            >
              <span class="primary--text text-subtitle-1">Alojamiento </span>
              <br />
              Nuestras Casas
            </h2>
            <v-card class="mx-auto transparent mb-4 mb-sm-16" elevation="0">
              <v-img
                class="rounded-lg"
                :max-width="$vuetify.breakpoint.xsOnly ? '100%' : '80%'"
                max-height="500"
                :src="require('@/assets/home.jpeg')"
              >
              </v-img>
              <v-card
                color="primary"
                class="rounded-lg rounded-t-0 rounded-sm-0 pa-4 mb-sm-2 white--text"
                :max-width="$vuetify.breakpoint.xsOnly ? '100%' : 300"
                elevation="8"
                style="position: absolute; right: 0; z-index: 1"
                :style="
                  $vuetify.breakpoint.xsOnly
                    ? 'bottom: 0; opacity:.8'
                    : 'bottom: -50px; '
                "
              >
                <h3 class="text-h6 font-weight-bold mb-1">Casa de campo</h3>
                <p class="text-body-2 text-lg-body-1">
                  Viviendas unifamiliares con ventanales panorámicos, terrazas y
                  barbacoa
                </p>
                <v-btn
                  outlined
                  small
                  class="white--text text-subtitle-2 text-none"
                  >Ver mas</v-btn
                >
              </v-card>
            </v-card>
          </v-container>
        </v-img>
      </section>
    </LazyHydrate>

    <LazyHydrate when-visible>
      <section id="services" style="position: relative">
        <img
          :src="require('@/assets/forest-two-left.png')"
          class="img_decoration_two_left"
        />
        <v-container>
          <h2
            class="text-center text-h6 text-md-h5 text-lg-h4 font-weight-bold"
          >
            Nuestros <span class="primary--text">servicios</span>
          </h2>
          <v-row>
            <v-col cols="12" md="4" lg="3">
              <div class="text-body-2 text-sm-body-2">
                Alquiler de vehículos de todo terreno
              </div>
              <v-divider class="my-4 primary"></v-divider>
              <div class="text-body-2 text-sm-body-2">
                Alquiler de bicicletas
              </div>
              <v-divider class="my-4 primary"></v-divider>
              <div class="text-body-2 text-sm-body-2">Alquiler de barbacoa</div>
              <v-divider class="my-4 primary"></v-divider>
              <div class="text-body-2 text-sm-body-2">
                Alquiler de cañas de pescar
              </div>
              <v-divider class="my-4 primary"></v-divider>
              <div class="text-body-2 text-sm-body-2">
                Alquiler de motos acuáticas
              </div>
            </v-col>
            <v-col cols="12" md="8" lg="8" offset-lg="1">
              <v-img
                max-height="500"
                :src="require('@/assets/cuatri-motos.jpeg')"
                class="rounded-lg"
              ></v-img>
            </v-col>
            <v-col cols="12">
              <v-card
                elevation="0"
                max-width="700"
                class="transparent text-center mx-auto my-sm-8"
              >
                <p class="ma-0 text-body-1 text-lg-h6 font-weight-regular">
                  !Deje una solicitud ahora y obtenga 30 minutos de
                  <span class="primary--text font-weight-bold"
                    >alquiler gratis</span
                  >
                  de vehículos todo terreno!
                </p>
                <v-btn
                  color="accent"
                  min-width="180"
                  large
                  elevation="8"
                  class="mt-8 rounded-xl mx-auto text-none text-subtitle-2 text-md-subtitle-1"
                  >Enviar solicitud</v-btn
                >
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </section>
    </LazyHydrate>

    <LazyHydrate when-visible>
      <section>
        <v-container>
          <h2
            class="text-center text-h6 text-md-h5 text-lg-h4 font-weight-bold"
          >
            ¡Siempre nos tomamos
            <span class="primary--text">con responsabilidad</span> nuestro
            trabajo!
          </h2>

          <v-card class="mx-auto transparent mb-sm-16" elevation="0">
            <v-img
              class="rounded-lg"
              :max-width="$vuetify.breakpoint.xsOnly ? '100%' : '80%'"
              max-height="500"
              :src="require('@/assets/team.jpg')"
            >
            </v-img>
            <v-card
              color="primary"
              class="rounded-0 pa-4 py-8 mb-2 white--text mt-4 mt-sm-0"
              :max-width="$vuetify.breakpoint.xsOnly ? '100%' : 300"
              elevation="8"
              :style="
                $vuetify.breakpoint.xsOnly
                  ? ''
                  : 'position: absolute; bottom: -50px; right: 0; z-index: 1'
              "
            >
              <p class="text-body-2 text-lg-body-1 ma-0">
                ¡Nuestro equipo está haciendo todo lo posible para que sus
                vacaciones sean de lo mejor!
              </p>
            </v-card>
          </v-card>
        </v-container>
      </section>
    </LazyHydrate>

    <LazyHydrate when-visible>
      <section>
        <v-img
          class="py-sm-8 py-md-16 main-image-gallery"
          :src="require('@/assets/cielo-three.png')"
        >
          <v-container :fluid="$vuetify.breakpoint.smOnly">
            <v-card
              elevation="0"
              max-width="700"
              class="transparent text-center mx-auto my-8"
            >
              <v-divider
                class="primary mx-auto mb-8"
                style="max-width: 320px"
              ></v-divider>
              <p class="ma-0 text-body-1 text-lg-h6 font-weight-regular">
                El descanso en nuestra base es garantía de buen humor y
                seguridad.
              </p>
            </v-card>

            <h2
              class="text-center text-h6 text-md-h5 text-lg-h4 font-weight-bold"
            >
              Nuestra Galeria de <span class="primary--text">Fotos</span>
            </h2>
            <v-row>
              <v-col
                v-for="item in [1, 2, 3, 4, 5, 6, 7, 8, 9]"
                :key="'photo-' + item"
                cols="12"
                sm="6"
                md="4"
              >
                <v-img
                  class="elevation-6 rounded-lg"
                  :src="`https://picsum.photos/300/200?random=${2 * item}`"
                  alt="alt"
                ></v-img>
              </v-col>
            </v-row>
          </v-container>
        </v-img>
      </section>
    </LazyHydrate>

    <LazyHydrate when-visible>
      <section id="resenas">
        <img
          style="position: absolute; opacity: 0.1; margin: auto"
          width="70%"
          :src="require('@/assets/nature.png')"
          alt=""
        />
        <v-container>
          <h2
            class="text-center text-h6 text-md-h5 text-lg-h4 font-weight-bold"
          >
            Testimonios
          </h2>
          <v-row
            v-for="(item, index) in [
              'Estábamos en esta base por primera vez, me gustó mucho el personal educado, un territorio grande, una casa cálida y acogedora. ¡Definitivamente regresaremos!',
              'Decidimos tomar un descanso con la familia del bullicio de la ciudad y el aire sucio, cayó en esta base. Por mucho que se arrepintieran, todo fue muy agradable, y los niños quedaron encantados y los padres!',
              'Celebramos un cumpleaños con amigos, fue muy divertido, el personal preparó todo muy bien, montó en cuatrimotos, lo tomó durante media hora, pero luego lo extendió. así que toma más',
            ]"
            :key="'item-' + index"
            class="mb-8"
            align="center"
          >
            <v-col cols="12" sm="4" lg="3">
              <v-img
                class="rounded-circle mx-auto"
                width="150"
                height="150"
                :src="require(`@/assets/avatars/avatar-${1 + index}.png`)"
              ></v-img>
            </v-col>
            <v-col cols="12" sm="8" lg="9">
              <p
                class="text-center text-sm-left mb-4 text-body-2 text-body-sm-1"
              >
                {{ item }}
              </p>
              <v-divider
                class="primary mx-auto ml-sm-0"
                style="max-width: 250px"
              ></v-divider>
              <v-divider
                class="primary mx-auto ml-sm-0"
                style="max-width: 250px"
              ></v-divider>
            </v-col>
          </v-row>
        </v-container>
      </section>
    </LazyHydrate>

    <LazyHydrate when-visible>
      <section style="position: relative; z-index: 1">
        <img
          :src="require('@/assets/forest-right.png')"
          class="img_decoration_three_right"
        />
        <v-container style="z-index: 2">
          <h2
            class="text-center text-h6 text-md-h5 text-lg-h4 font-weight-bold"
          >
            Preguntas & Respuestas
          </h2>
          <v-row>
            <v-col
              v-for="(item, index) in [
                '¿Es posible reprogramar la fecha de vencimiento?',
                '¿Es posible venir con animales?',
                '¿Me pueden devolver el dinero si no puedo ir?',
                '¿Puedo ir a ti con mi parrillada?',
                '¿Tienes una cafetería en el lugar?',
                '¿Tienen cañas de pescar para alquilar?',
              ]"
              :key="'item-2' + index"
              cols="12"
              sm="8"
              md="9"
              lg="7"
            >
              <v-card
                class="white--text px-4 py-1 rounded-0 mb-2 mb-sm-4 d-flex flex-column justify-center"
                color="primary"
                height="60"
              >
                {{ item }}
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </section>
    </LazyHydrate>

    <LazyHydrate when-visible>
      <section class="pt-16" style="position: relative">
        <img
          :src="require('@/assets/forest-left.png')"
          class="img_decoration_left"
          style="top: 50%; z-index: 1"
        />
        <img
          :src="require('@/assets/cielo-two.png')"
          class="img_decoration_top"
        />
        <v-img
          :src="require('@/assets/cielo-four.png')"
          class="img_decoration_two_bottom"
        >
          <v-container class="pb-16">
            <h2
              class="text-h6 text-md-h5 text-lg-h4 font-weight-bold text-center"
            >
              ¿Todavía tienes <span class="primary--text">preguntas</span> ?
            </h2>
            <v-row>
              <v-col cols="12" md="6">
                <p class="text-center text-md-left">
                  Complete el formulario, nuestros gerentes se comunicarán con
                  usted dentro de 15 minutos.
                </p>
                <v-card
                  class="px-4 py-12 rounded-1"
                  elevation="8"
                  color="primary"
                >
                  <div>
                    <v-text-field
                      placeholder="Nombre"
                      solo
                      color="black"
                    ></v-text-field>
                    <v-text-field
                      placeholder="Telefono"
                      solo
                      color="black"
                    ></v-text-field>
                    <v-btn color="accent" elevation="8" large>Contactar</v-btn>
                  </div>
                </v-card>
              </v-col>
              <v-col cols="12" md="6">
                <div class="text-center text-md-left">
                  <p class="mt-8 mt-sm-0">
                    Contáctenos usted mismo nuestros contactos:
                  </p>
                  <ul>
                    <li>rusbel.ccana@gmail.com</li>
                    <li>+51 901581092</li>
                  </ul>
                </div>
              </v-col>
            </v-row>
          </v-container>
          <v-container>
            <h2
              class="text-h6 text-md-h5 text-lg-h4 font-weight-bold text-center"
            >
              Nuestra Ubicación
            </h2>
            <v-card color="transparent" elevation="0">
              <div class="mapouter">
                <div class="gmap_canvas">
                  <iframe
                    id="gmap_canvas"
                    width="100%"
                    height="438"
                    src="https://maps.google.com/maps?q=-13.2425648,-71.7007658&t=&z=9&ie=UTF8&iwloc=&output=embed"
                    frameborder="0"
                    scrolling="no"
                    marginheight="0"
                    marginwidth="0"
                  ></iframe>
                </div>
              </div>
            </v-card>
          </v-container>
          <v-container class="py-10">
            <v-row>
              <v-col v-show="!$vuetify.breakpoint.smAndDown" cols="12" sm="4">
                <ul style="list-style: none" class="pa-0">
                  <li>Alojamiento</li>
                  <li>Servicios</li>
                  <li>Precios</li>
                  <li>Reseñas</li>
                </ul>
              </v-col>
              <v-col cols="12" sm="4">
                <v-img alt="logo"></v-img>
              </v-col>
              <v-col cols="12" sm="4">
                <div class="text-center">
                  <p>+051 901581092</p>
                  <div class="d-flex justify-center">
                    <v-icon class="mx-1" color="primary">mdi-facebook</v-icon>
                    <v-icon class="mx-1" color="primary lighten-2"
                      >mdi-twitter</v-icon
                    >
                    <v-icon class="mx-1" color="red">mdi-youtube</v-icon>
                  </div>
                </div>
              </v-col>
            </v-row>
          </v-container>
        </v-img>
      </section>
    </LazyHydrate>
  </div>
</template>

<script>
import LazyHydrate from 'vue-lazy-hydration'

export default {
  name: 'HomePage',
  components: {
    LazyHydrate,
    NeftaCarousel: () => import('@/components/NeftaCarousel.vue'),
    NeftaChart: () => import('@/components/NeftaChart.vue'),
  },
  data: () => ({ slideModel: null }),
}
</script>

<style lang="scss">
.banner_image > .v-image__image {
  margin-top: -25vh;
  transform: scale(-1, 1);
  width: 100%;
}
.img_decoration_left {
  position: absolute;
  width: 25%;
  left: 0;
  top: 0;
  margin-top: -20%;
  @media only screen and (max-width: 600px) {
    width: 50%;
    top: 5%;
    opacity: 0.1;
  }
}
.img_decoration_two_left {
  position: absolute;
  width: 18%;
  left: 0;
  top: 0;
  margin-top: -20%;
  @media only screen and (max-width: 600px) {
    width: 50%;
    opacity: 0.1;
  }
}
.img_decoration_right {
  position: absolute;
  width: 25%;
  right: 0;
  bottom: 0;
  @media only screen and (max-width: 600px) {
    width: 50%;
    opacity: 0.1;
    bottom: -10%;
  }
}
.img_decoration_two_right {
  position: absolute;
  width: 25%;
  right: 0;
  top: 10%;
  z-index: 1;
  @media only screen and (max-width: 600px) {
    width: 50%;
    opacity: 0.1;
    top: 0;
  }
}
.img_decoration_three_right {
  position: absolute;
  width: 30%;
  top: 15%;
  right: 0;
  z-index: 1;
  @media only screen and (max-width: 600px) {
    width: 50%;
    opacity: 0.1;
    top: 0;
  }
}
.img_decoration_top {
  transform: rotateZ(180deg);
  height: 100vh;
  margin-top: -50vh;
  width: 100vw;
  position: absolute;
  opacity: 0.4;
}
.img_decoration_bottom > .v-image__image {
  transform: scale(-1, 1);
  margin-top: 50vh;
  opacity: 0.4;
}
.img_decoration_two_bottom > .v-image__image {
  transform: scale(-1, 1);
  opacity: 0.5;
  margin-top: 50vh;
  z-index: -2;
  width: 100%;
}
.main-image-gallery > .v-image__image {
  transform: rotateZ(180deg);
}
h2 {
  padding: 50px 0 30px;
  font-size: 2.1rem;
}

.mapouter {
  position: relative;
  text-align: right;
  height: 438px;
  width: 100%;
}
.gmap_canvas {
  overflow: hidden;
  background: none !important;
  height: 438px;
  width: 100%;
}
.card-slides {
  box-shadow: 0 0 1px rgba(12, 26, 75, 0.24),
    0 3px 8px -1px rgba(50, 50, 71, 0.3) !important;
}

.slider-destok {
  position: relative;
  .v-slide-group__prev {
    position: absolute;
    z-index: 1;
    top: 50%;
    left: -60px;
  }
  .v-slide-group__next {
    position: absolute;
    z-index: 1;
    top: 50%;
    right: -60px;
  }
}
</style>
