<template>
  <MaterialCard :date="articleInfo.createdAt" link-name="Lire l'article" link-type="article" :link-u-r-l="articleInfo.path" :title="articleInfo.title">
    {{ articleInfo.description || "erreur" }}
  </MaterialCard>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";
import { extendOrOverwrite, IContentDocument } from "@nuxt/content/types/content";

export default Vue.extend({
  name: "ArticleCard",
  props: {
    article: { type: Object as PropType<IContentDocument>, required: true }
  },
  data () {
    return {
      articleInfo: Object as extendOrOverwrite<IContentDocument>
    };
  },
  created () {
    this.articleInfo = this.article;
  }
});
</script>

<style scoped>

</style>
