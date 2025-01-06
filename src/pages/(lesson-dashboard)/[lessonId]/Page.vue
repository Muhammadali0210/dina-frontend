<script setup lang="ts">
import { ref, onMounted, watch } from "vue";
import { useRoute } from "vue-router";
import VideoLesson from "./_components/VideoLesson.vue";
import { useLessonStore } from "./store";
import { useGetLesson } from "./service";
import { Skeleton } from "@/components/ui/skeleton";
import { Loader2 } from "lucide-vue-next";

const route = useRoute();
const lessonStore = useLessonStore();
const { isLoading, getLesson } = useGetLesson();

const lesson = ref();

watch(
  () => route.query.lessonid,
  async (newLessonId, oldLessonId) => {
    if (newLessonId !== oldLessonId) {
      await getLesson(Number(newLessonId));
      lesson.value = lessonStore.getLesson;
    }
  }
);

onMounted(async () => {
  await getLesson(Number(route.query.lessonid));
  lesson.value = lessonStore.getLesson;
  console.log(1, lesson.value);
});
</script>
<template>
  <div class="p-2 md:p-5 max-w-[1000px] mx-auto">
    <div
      v-if="isLoading"
      class="relative h-[36vh] w-full rounded-md bg-secondary sm:h-[30] md:h-[50vh] lg:h-[75vh]"
    >
      <Skeleton
        class="absolute right-0 top-0 flex size-full items-center justify-center rounded-md bg-slate-500/80"
      />
      <div
        class="absolute right-0 top-0 h-full w-full flex size-full items-center justify-center"
      >
        <Loader2 class="w-[100px] h-[100px] animate-spin text-primary" />
      </div>
    </div>
    <VideoLesson
      v-if="!isLoading"
      :get-loading="isLoading"
      :class="{ hidden: isLoading }"
      :lesson="lesson"
    />
    <div class="p-5 mt-4 bg-gray-300 dark:bg-gray-800 w-full">
      <h1 class="text-lg font-bold">{{ lesson?.title }}</h1>

      Lug'atlar va mashqlar Lorem, ipsum dolor sit amet consectetur adipisicing elit.
      Repudiandae omnis et atque iure, dignissimos repellendus quibusdam magni earum. Quam
      at labore molestias accusamus in dolor atque neque voluptatem, consequuntur rerum!
      Aspernatur repellat fugiat debitis dolorem a aliquid, quo, ducimus odit, nam optio
      rerum. Doloremque perspiciatis veritatis dolore quidem tempora consequuntur earum!
      Quae debitis doloremque iste et, tempora commodi explicabo atque. Dolorum, ratione!
      Officia mollitia libero tempore, quae sint repudiandae, pariatur minus autem modi
      sunt obcaecati fugiat expedita molestiae nulla iusto nisi enim provident debitis
      aliquid architecto doloribus eaque laborum? Inventore? Odio fugiat ut saepe harum
      consectetur quisquam tempora pariatur. Consequatur, alias? Esse dolorem iusto
      placeat vitae, debitis exercitationem tempore adipisci ullam eaque delectus quas
      facilis, quam, praesentium dolores sed ut. Recusandae, qui ea a necessitatibus
      quaerat fugit libero excepturi quidem vero labore nesciunt et rerum? Ducimus nostrum
      repellat dolorum consequuntur dolore laboriosam id! Nostrum modi tenetur asperiores
      laborum temporibus in? Consequatur fugiat facere voluptatem non quisquam ab nihil,
      aperiam, saepe sit quo id sequi veniam, rerum quas itaque mollitia vitae et pariatur
      architecto nobis est soluta? Non nisi quasi magni! Beatae consequuntur facere
      officia dolores repellat suscipit unde voluptatibus. Culpa soluta officia similique
      quos ratione quisquam assumenda. Molestiae perspiciatis quaerat totam. Assumenda
      sapiente, optio id quibusdam nostrum unde obcaecati perferendis? Accusantium dolore
      beatae illum expedita! Unde temporibus officiis aliquid exercitationem accusamus
      illum architecto odit, rem reprehenderit voluptatum nobis deleniti facere officia
      distinctio adipisci! Qui dolores vel blanditiis temporibus sunt. Iste. Dolorem odio
      numquam labore libero eligendi laborum aliquam autem aperiam, veritatis quod
      consectetur qui magnam pariatur ipsam molestiae iste delectus tenetur, temporibus
      ex! Debitis ipsum, alias adipisci repellat dolorum corrupti. Fugiat nisi quae error?
      Quo hic perferendis ratione explicabo voluptates suscipit, sequi natus repellat eos
      vitae doloremque, nihil, odit dolore sed sit? Eaque nisi laboriosam debitis velit
      asperiores aliquam reiciendis. Facilis magni possimus voluptatem porro ab. Dolorem
      saepe, dolorum quaerat dicta odio tempore nostrum non deserunt voluptatum explicabo.
      Temporibus atque sunt est libero, veritatis rem ipsum! Ipsa molestiae reprehenderit
      beatae. Vitae iure reprehenderit animi eligendi! Id impedit, dolorem obcaecati ipsum
      eveniet iure quod. Maxime sed, beatae commodi soluta accusantium recusandae esse,
      est inventore fuga, nobis laudantium earum. Laudantium, perferendis suscipit. Ut
      labore, atque veniam tenetur, dolores optio est architecto cumque delectus
      accusantium voluptatum impedit mollitia dolore consequuntur? Tenetur pariatur iste
      quia laborum autem ipsa praesentium veritatis eos, facere earum atque! Culpa quasi
      eos aliquam est assumenda earum quos, eaque sed recusandae non aut porro perferendis
      maiores officiis veritatis consectetur quidem natus excepturi ipsum odio, corrupti
      dicta, harum reiciendis. Aperiam, consequatur. Facere provident nesciunt harum dolor
      impedit sit eius est maiores dolores, molestias incidunt quaerat dolore ex delectus
      iure tempore nisi! Sed labore dolores fuga omnis quia sequi consequuntur fugiat
      veniam? Fugit corporis suscipit ipsa qui saepe consequatur similique error officiis
      rerum facilis nulla obcaecati, ad iste tempora sint! Debitis, ut perspiciatis
      maiores ratione delectus possimus sed vitae exercitationem optio porro! Architecto,
      fugiat eaque cupiditate rerum recusandae officiis odit et distinctio minima,
      laudantium eveniet repellendus aspernatur eum nam debitis id atque dolores expedita
      deserunt optio? Officiis praesentium facere qui deleniti perferendis. Voluptate
      beatae facere obcaecati optio nesciunt sit, aliquid repudiandae non dignissimos
      debitis delectus architecto in explicabo tempore sed amet minima tenetur at
      praesentium dicta eaque, doloremque accusantium adipisci autem! Alias. Dolorum
      voluptas optio molestias ipsum praesentium, perferendis, at ipsa quibusdam inventore
      quod veritatis itaque deleniti corrupti quo hic amet officia consequatur mollitia
      molestiae expedita fuga consectetur! Nisi maxime harum veritatis. Magni tenetur
      culpa soluta mollitia corporis vero hic quod qui. Quam, facilis placeat! Delectus
      assumenda, sapiente eveniet ex vero, alias velit saepe eos, tenetur harum non odit
      dolorum. Iste, dolor. Nobis modi sed, illo dolor iure incidunt nam beatae ea animi
      recusandae delectus facilis eveniet natus quisquam iusto eius veritatis est placeat
      vero necessitatibus aut itaque numquam repellat et? Alias! Culpa rem tempora quod
      consequatur quis facere doloremque officia, odit ipsa sit pariatur voluptates? Rerum
      ab voluptatem doloribus magni expedita, iusto ducimus pariatur. Quaerat voluptate
      aperiam, eos atque blanditiis quam! Quae, ad sit nobis asperiores qui explicabo id
      a. Unde molestias adipisci quia inventore, natus aspernatur molestiae sed dolore
      quas ad, vel cum facilis porro repudiandae amet incidunt voluptatem quaerat?
      Consequatur placeat quod a corporis laborum. Quis iusto voluptatibus ipsum
      accusantium cupiditate vero, in maiores ullam aliquam deserunt. Eius fugit doloribus
      accusantium facere iste? Ab fuga quod mollitia minus odit. Illum, labore, suscipit
      dolor, nulla incidunt eveniet et repellat magni consectetur quis dolore sequi optio
      nostrum earum asperiores praesentium vero amet libero cum saepe aliquam a tempore
      illo natus. Quaerat. Quidem voluptate dolore expedita eaque dolorum. Numquam animi
      ducimus voluptate nostrum aperiam tenetur doloribus. Deserunt nam quidem omnis
      numquam sequi quasi repellat est dolores! Dicta molestiae doloribus sit in. Tenetur.
      Maiores nisi quasi, molestias explicabo eius recusandae officia sint! Impedit est
      cupiditate deleniti asperiores beatae ipsa omnis error placeat. Error repellendus
      accusantium aliquam asperiores commodi repellat officiis ut blanditiis? Accusamus?
      Reprehenderit suscipit, deserunt ab voluptatibus at accusamus laudantium impedit,
      harum ut eius perspiciatis quod neque earum rem dolor repellat culpa molestiae
      corporis reiciendis error adipisci quos magnam quidem dolorem. Suscipit. Maiores,
      aliquam deserunt amet minus illo sapiente corporis? Possimus doloremque hic nisi
      quisquam animi recusandae id voluptatum consequuntur rem, dolorum corporis
      similique. Similique omnis, in unde quidem soluta odit debitis. Eveniet consectetur
      molestiae qui at, cumque rem? Quaerat eos beatae vero. Illum architecto porro
      deleniti voluptate sed sequi sunt dolore laborum maiores repellat, optio iusto?
      Aliquid id modi atque pariatur. Itaque facilis quidem nam porro necessitatibus
      molestiae distinctio impedit harum dolorum minima suscipit, natus illo ratione!
      Nulla accusamus sunt dolore deleniti, iure cum porro minima nostrum unde.
      Repudiandae, dolores aut. Ex id impedit tenetur omnis? Nihil veritatis repellat quia
      ab aliquam delectus adipisci similique voluptates eius qui, harum alias optio animi
      excepturi. Laboriosam nisi et ab tempora accusamus, amet reiciendis! Architecto
      ipsam, impedit fuga autem corrupti numquam laudantium, cumque dolor, quibusdam optio
      labore vero quis expedita praesentium odit assumenda amet blanditiis error. Libero
      vero eligendi modi dolores magni repudiandae aperiam! Nemo corrupti molestias, esse
      architecto odit consequatur voluptate voluptatibus velit provident iusto ab amet
      delectus eum facere ea praesentium tempore nostrum non blanditiis beatae aperiam
      harum. Magni eum earum deleniti? Praesentium cum reprehenderit, exercitationem,
      earum omnis architecto fugiat placeat expedita corporis neque commodi dolorem nemo
      qui sint quo officiis blanditiis alias distinctio odio explicabo dolore rerum!
      Labore dolorum sit reprehenderit. Ut dolorum est quia cumque quaerat minus
      consequuntur ex inventore tempore soluta porro delectus unde repellendus nostrum
      praesentium, laudantium corporis cupiditate quasi tenetur culpa beatae labore vero
      odit! Aliquid, nobis! Culpa ipsam cum aliquam doloribus autem quis unde, facere,
      debitis quos excepturi iste atque earum assumenda? Explicabo nostrum dolorum harum
      sint soluta quo aliquid facere dolores, optio ad laboriosam odit. Architecto,
      asperiores incidunt dicta fugit non hic, dolore velit ea nihil harum maiores enim
      ratione earum modi aliquam assumenda consectetur ab fuga tempore similique delectus
      unde itaque nisi sed. Officiis. Ipsum recusandae vel qui consequatur deleniti iure,
      officiis eaque aperiam atque. Dolores nisi sequi maxime nemo est doloremque, neque
      non ullam, hic corrupti aut vitae numquam ratione ea eius minima. Nostrum tempore
      facilis sequi mollitia possimus placeat fugiat cupiditate rem quisquam, corrupti
      ipsum ex minus et aliquid quae consequatur soluta veniam. Voluptatibus fuga adipisci
      animi ipsam eius dignissimos provident aut! Totam eaque dicta minima placeat
      delectus expedita eligendi, quia, consequuntur ipsum exercitationem, sit tenetur
      excepturi. Sunt rem, magni voluptas iusto unde dolorem eius in? Distinctio laborum
      rem modi consequatur corrupti? Cum quam dicta, sed provident quisquam excepturi
      porro neque, ipsa consectetur aspernatur quod omnis cupiditate saepe voluptate odio
      expedita explicabo obcaecati laudantium ipsam. Vel fugiat recusandae dolores,
      pariatur quaerat voluptatibus! Ex provident fugiat expedita ab commodi enim corrupti
      accusamus quidem possimus nam, fuga explicabo praesentium unde placeat veritatis
      eum? Soluta perspiciatis, odio totam atque excepturi itaque porro rem neque at. Est
      magnam perferendis eveniet, at et asperiores fugit saepe, placeat ratione autem, vel
      rerum voluptatibus laborum cumque facilis ad odit quisquam reiciendis accusamus
      expedita minima! Natus necessitatibus rerum quas ipsam. Sit magni inventore eligendi
      animi nihil corrupti ab voluptatibus, nisi earum quisquam velit! In iusto eveniet
      iste perferendis, sint, laboriosam sapiente, officiis maxime libero fugit fugiat
      vitae nihil eaque eos! Ut accusantium voluptas sunt accusamus. Dicta commodi ipsam,
      quod nemo ex ipsa corporis deleniti error nulla, alias dolorum facere consequuntur
      esse debitis qui corrupti ut praesentium, dolor laudantium excepturi tenetur. Iusto
      at reiciendis saepe alias! Esse ad eum, et enim, iure odio inventore, laboriosam
      vitae neque magnam vel veritatis nihil corporis? Voluptates neque molestias, quam
      qui necessitatibus tempora. Maiores, excepturi? Ipsa nisi ad doloremque, impedit
      officia similique quis consequatur error rem qui reprehenderit blanditiis voluptate
      hic maiores odio voluptatibus cupiditate aliquam ut numquam porro ipsum optio esse
      voluptates. Suscipit, corrupti. Ea neque minima dignissimos explicabo maxime cumque
      similique laboriosam ut velit, ipsam quas quam quae et repellendus obcaecati fuga
      hic quisquam debitis incidunt quasi atque, eligendi recusandae saepe? Earum, quae?
      Voluptatem cupiditate, corporis hic cum consectetur tenetur. Quo nulla, quos quis
      rerum perferendis sapiente porro quasi! Iusto perspiciatis nemo, voluptates atque
      eius perferendis accusantium aspernatur est dolorum mollitia dolor unde.
    </div>
  </div>
</template>
