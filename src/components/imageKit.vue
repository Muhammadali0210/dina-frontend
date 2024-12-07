<template>
<div>
    <h1>Fayl yuklash</h1>
    <input type="file" @change="handleFileUpload" />
    <div v-if="uploadedUrl">
    <p>Yuklangan fayl:</p>
    <img :src="uploadedUrl" alt="Uploaded Image" />
    </div>
</div>
</template>

<script>
import { ref } from "vue";

export default {
setup() {
    const uploadedUrl = ref(null);

    const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    try {
        const response = await fetch("http://localhost:3002/upload", {
        method: "POST",
        body: formData,
        });

        if (!response.ok) {
            throw new Error("Rasm yuklashda xato");
        }
        console.log(response);
        
        const data = await response.json();
        uploadedUrl.value = data.url; // Yuklangan fayl URL'si
    } catch (error) {
        console.error(error.message);
    }
    };

    return { uploadedUrl, handleFileUpload };
},
};
</script>
  