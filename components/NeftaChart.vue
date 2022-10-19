<template>
  <v-card
    elevation="0"
    color="transparent"
    class="transparent d-flex flex-column justify-center align-center my-16"
  >
    <v-card
      color="#fbd8de"
      width="210"
      height="210"
      style="
        position: absolute;
        top: -40px;
        right: 0;
        border-top-right-radius: 35px !important;
        box-shadow: 0 0 3px 0 #fbd8de !important;
      "
    ></v-card>
    <v-card
      class="rounded-0 transparent"
      elevation="0"
      height="214"
      width="calc(100% - 148px)"
      style="z-index: 1; box-shadow: 0 0 3px 0 rgba(0 0 0 10%) !important"
    >
      <v-img
        width="100%"
        height="100%"
        :src="require('@/assets/image/image-1.png')"
      />
    </v-card>
    <v-card
      color="#f3ddf0"
      width="210"
      height="140"
      style="
        position: absolute;
        bottom: -40px;
        left: 0;
        border-bottom-left-radius: 35px !important;
        box-shadow: 0 0 3px 0 #f3ddf0 !important;
      "
    ></v-card>
  </v-card>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>
