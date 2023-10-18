<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div>
      <ckeditor
        :editor="editor"
        v-model="description"
        :editorConfigs="editorConfigs"
      ></ckeditor>
    </div>
  </template>
  
  <script>
  import { reactive, ref } from "vue";
  import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
  export default {
    setup() {
      const description = ref();
      const editorConfigs = reactive({
        codeBlock: {
          languages: [
            { language: "css", label: "CSS" },
            { language: "html", label: "HTML" },
          ],
        },
      });
      return { description, editor: ClassicEditor, editorConfigs };
    },
  };
  </script>
  
  <style></style>
  