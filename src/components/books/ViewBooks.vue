<template>
    <div ref="fullscreenPage" class="w-full h-screen">
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
    </div>
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
        this.openFullScreen(); // Komponent yuklanganda fullscreen holatiga o'tadi
    },
    methods: {
        openFullScreen() {
            const element = this.$refs.fullscreenPage; // Sahifani tanlaymiz
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

<style lang="">

</style>
