<template>
  <div class="example">
    <quill-editor
      class="editor"
      ref="myTextEditor"
      :value="content"
      :options="editorOption"
      @change="onEditorChange"
      @blur="onEditorBlur($event)"
      @focus="onEditorFocus($event)"
      @ready="onEditorReady($event)"
    />
    <div class="output code">
      <code class="hljs" v-html="contentCode"></code>
    </div>
    <div class="output ql-snow">
      <div class="ql-editor" v-html="content"></div>
    </div>
  </div>
</template>

<script>
import dedent from "dedent";
import hljs from "highlight.js";
import debounce from "lodash/debounce";
import { quillEditor } from "vue-quill-editor";

// highlight.js style
import "highlight.js/styles/tomorrow.css";

// import theme style
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";

export default {
  name: "quill-example-snow",
  title: "Theme: snow",
  components: {
    quillEditor,
  },
  data() {
    return {
      editorOption: {
        modules: {
          toolbar: [
            ["bold", "italic", "underline", "strike"],
            ["blockquote", "code-block"],
            [{ header: 1 }, { header: 2 }],
            [{ list: "ordered" }, { list: "bullet" }],
            [{ script: "sub" }, { script: "super" }],
            [{ indent: "-1" }, { indent: "+1" }],
            [{ direction: "rtl" }],
            [{ size: ["small", false, "large", "huge"] }],
            [{ header: [1, 2, 3, 4, 5, 6, false] }],
            [{ font: [] }],
            [{ color: [] }, { background: [] }],
            [{ align: [] }],
            ["clean"],
            ["link", "image", "video"],
          ],
          syntax: {
            highlight: (text) => hljs.highlightAuto(text).value,
          },
        },
      },
      content: dedent`  `,
    };
  },
  methods: {
    onEditorChange: debounce(function(value) {
      this.content = value.html;
    }, 466),
    onEditorBlur(editor) {
      // console.log("editor blur!", editor);
    },
    onEditorFocus(editor) {
      // console.log("editor focus!", editor);
    },
    onEditorReady(editor) {
      // console.log("editor ready!", editor);
    },
  },
  computed: {
    editor() {
      return this.$refs.myTextEditor.quill;
    },
    contentCode() {
      return hljs.highlightAuto(this.content).value;
    },
  },
  mounted() {
    console.log("this is Quill instance:", this.editor);
  },
};
</script>

<style>
.example {
  display: flex;
  flex-direction: column;
}
.editor {
  /* min-height: 10rem; */
  max-height: auto;
  overflow: hidden;
}

.output {
  width: 100%;
  height: auto;
  margin: 0;
  border: 1px solid #ccc;
  overflow-y: auto;
  resize: vertical;
}
.code {
  padding: 1rem;
  height: auto;
  box-sizing: border-box;
}
.ql-editor,
.hljs {
  min-height: 10rem;
}
</style>
