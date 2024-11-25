<template>
    <div>
        <h1 style="text-align: center;">PDF Kitob Varaqlash Ko'rinishi</h1>
        <div id="flipbook" ref="flipbook"></div>
    </div>
</template>

<script>
export default {
    data() {
        return {
           
            pdfUrl: require('@/assets/Soulte 2A new.pdf'),
        };
    },
    mounted() {
        this.loadPDF();
    },
    methods: {
        async loadPDF() {
            // PDF.js yuklash
            const pdfjsLib = await import("https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.16.105/pdf.min.js");
            const pdf = await pdfjsLib.getDocument(this.pdfUrl).promise;

            const container = this.$refs.flipbook;

            // Har bir sahifani yuklash va canvasda chizish
            for (let i = 1; i <= pdf.numPages; i++) {
                const page = await pdf.getPage(i);
                const canvas = document.createElement("canvas");
                canvas.style.width = "100%";

                const div = document.createElement("div");
                div.classList.add("page");
                div.appendChild(canvas);
                container.appendChild(div);

                await this.renderPage(page, canvas, 1.5); // Sahifani render qilish
            }

            // Turn.js bilan varaqlash effektini o‘rnatish
            $(container).turn({
                width: 800,
                height: 500,
                autoCenter: true,
            });
        },
        async renderPage(page, canvas, scale) {
            const viewport = page.getViewport({ scale });
            canvas.width = viewport.width;
            canvas.height = viewport.height;
            const context = canvas.getContext("2d");

            await page.render({ canvasContext: context, viewport }).promise;
        },
    },
};
</script>

<style>
#flipbook {
    width: 800px;
    height: 500px;
    margin: 50px auto;
}

.page {
    background: #f3f3f3;
    border: 1px solid #ddd;
    text-align: center;
    font-size: 20px;
    line-height: 500px;
}
</style>
