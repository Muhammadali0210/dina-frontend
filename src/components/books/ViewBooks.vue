<template>
    <div ref="fullscreenPage" class="w-full h-screen ">
        <button @click="backPageButton" class="fullscreen-button">Orqaga</button>
        <div style="">
            <iframe style="
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        " :src="bookLink[0].link" frameborder="0" allowfullscreen="true" allowtransparency="true"></iframe>
        </div>
        <br />
        <a :href="bookLink[0].link" title="Soulte 2A new" target="_blank">
            Soulte 2A new
        </a>
    </div>z
</template>

<script>
export default {
    data() {
        return {
            bookLink: [
                { link: 'https://www.yumpu.com/xx/embed/view/KhD89B27bf5apr1o' },
            ],
        };
    },
    mounted() {
        this.openFullScreen();
    },
    methods: {
        backPageButton() {
            this.$router.push('/books')
        },
        openFullScreen() {
            const element = this.$refs.fullscreenPage;
            if (element.requestFullscreen) {
                element.requestFullscreen();
            } else if (element.mozRequestFullScreen) {

                element.mozRequestFullScreen();
            } else if (element.webkitRequestFullscreen) {

                element.webkitRequestFullscreen();
            } else if (element.msRequestFullscreen) {

                element.msRequestFullscreen();
            }
        },
    },
};
</script>

<style scoped>
.fullscreen-button {
    position: absolute;
    top: 50px;
    left: 20px;
    background-color: rgba(0, 0, 255, 0.6);
    color: white;
    border: none;
    padding: 10px 20px;
    font-size: 16px;
    border-radius: 5px;
    cursor: pointer;
    z-index: 9999;
}
</style>
