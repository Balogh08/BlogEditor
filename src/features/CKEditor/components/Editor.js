import React, {useState} from "react";
import {CKEditor} from "@ckeditor/ckeditor5-react";
import {
  ClassicEditor,
  Alignment,
  Autoformat,
  Bold,
  CKBox,
  Code,
  Italic,
  Strikethrough,
  Subscript,
  Superscript,
  Underline,
  BlockQuote,
  CloudServices,
  CodeBlock,
  Essentials,
  FindAndReplace,
  Font,
  Heading,
  Highlight,
  HorizontalLine,
  GeneralHtmlSupport,
  AutoImage,
  Image,
  ImageCaption,
  ImageInsert,
  ImageResize,
  ImageStyle,
  ImageToolbar,
  ImageUpload,
  Base64UploadAdapter,
  PictureEditing,
  Indent,
  IndentBlock,
  TextPartLanguage,
  AutoLink,
  Link,
  LinkImage,
  List,
  ListProperties,
  TodoList,
  MediaEmbed,
  Mention,
  PageBreak,
  Paragraph,
  PasteFromOffice,
  RemoveFormat,
  SpecialCharacters,
  SpecialCharactersEssentials,
  Style,
  Table,
  TableCaption,
  TableCellProperties,
  TableColumnResize,
  TableProperties,
  TableToolbar,
  TextTransformation,
  WordCount} from "ckeditor5";

// import {
//   CaseChange,
//   ExportPdf,
//   ExportWord,
//   FormatPainter,
//   ImportWord,
//   MultiLevelList,
//   SlashCommand,
//   TableOfContents,
//   Template,
// } from "ckeditor5-premium-features";

import "ckeditor5/ckeditor5.css";

// CKEditor Commercial Features require a license key to work properly.
// * You can get a trial license key: https://orders.ckeditor.com/trial/premium-features.
// * Or you can comment out (disable) the plugins imported from the "ckeditor5-premium-features" package.
const LICENSE_KEY = "";

// CKBox plugin requires a valid token URL in order to use the CKBox application.
// After registering to CKBox, the fastest way to try out CKBox is to use the development token endpoint:
// https://ckeditor.com/docs/ckbox/latest/guides/configuration/authentication.html#token-endpoint
const CKBOX_TOKEN_URL = "";

// WProofreader plugin require a license key to work properly.
// For more info how to get the key, see https://ckeditor.com/docs/ckeditor5/latest/features/spelling-and-grammar-checking.html.
const WEB_SPELL_CHECKER_LICENSE_KEY = "";

const Editor = ({onChange}) => {
  const [editorData, setEditorData] = useState("");

  const handleEditorChange = (event, editor) => {
    const data = editor.getData();
    setEditorData(data);
    onChange(data);
  };

  return (
    <div>
      <CKEditor
        editor={ClassicEditor}
        config={ {
          toolbar: {
            items: [
              // --- Document-wide tools ----------------------------------------------------------------------
              "undo",
              "redo",
              "|",
              "importWord",
              "exportWord",
              "exportPdf",
              "|",
              "formatPainter",
              "caseChange",
              "findAndReplace",
              "selectAll",
              "wproofreader",
              "|",
              "insertTemplate",
              "tableOfContents",
              "|",

              // --- "Insertables" ----------------------------------------------------------------------------

              "link",
              "insertImage",
              "ckbox",
              "insertTable",
              "blockQuote",
              "mediaEmbed",
              "codeBlock",
              "pageBreak",
              "horizontalLine",
              "specialCharacters",
              "-",

              // --- Block-level formatting -------------------------------------------------------------------
              "heading",
              "style",
              "|",

              // --- Basic styles, font and inline formatting -------------------------------------------------------
              "bold",
              "italic",
              "underline",
              "strikethrough",
              {
                label: "Basic styles",
                icon: "text",
                items: [
                  "fontSize",
                  "fontFamily",
                  "fontColor",
                  "fontBackgroundColor",
                  "highlight",
                  "superscript",
                  "subscript",
                  "code",
                  "|",
                  "textPartLanguage",
                  "|",
                ],
              },
              "removeFormat",
              "|",

              // --- Text alignment ---------------------------------------------------------------------------
              "alignment",
              "|",

              // --- Lists and indentation --------------------------------------------------------------------
              "bulletedList",
              "numberedList",
              "multilevelList",
              "todoList",
              "|",
              "outdent",
              "indent",
            ],
          },
          plugins: [

            Alignment,
            Autoformat,
            AutoImage,
            AutoLink,
            BlockQuote,
            Bold,
            ...(CKBOX_TOKEN_URL ? [CKBox] : []),
            CloudServices,
            Code,
            CodeBlock,
            Essentials,
            FindAndReplace,
            Font,
            GeneralHtmlSupport,
            Heading,
            Highlight,
            HorizontalLine,
            Image,
            ImageCaption,
            ImageInsert,
            ImageResize,
            ImageStyle,
            ImageToolbar,
            ImageUpload,
            Base64UploadAdapter,
            Indent,
            IndentBlock,
            Italic,
            Link,
            LinkImage,
            List,
            ListProperties,
            MediaEmbed,
            Mention,
            PageBreak,
            Paragraph,
            PasteFromOffice,
            PictureEditing,
            RemoveFormat,
            SpecialCharacters,
            // SpecialCharactersEmoji,
            SpecialCharactersEssentials,
            Strikethrough,
            Style,
            Subscript,
            Superscript,
            Table,
            TableCaption,
            TableCellProperties,
            TableColumnResize,
            TableProperties,
            TableToolbar,
            TextPartLanguage,
            TextTransformation,
            TodoList,
            Underline,
            WordCount,
            ...(WEB_SPELL_CHECKER_LICENSE_KEY ? [] : []),
            ...(LICENSE_KEY ? [
            //   CaseChange,
            //   ExportPdf,
            //   ExportWord,
            //   FormatPainter,
            //   ImportWord,
            //   MultiLevelList,
            //   SlashCommand,
            //   TableOfContents,
            //   Template,
            ] : []),
          ],
          licenseKey: "",
          mention: {
            // Mention configuration
          },
          initialData: "<p>Hello from CKEditor 5 in React!</p>",
        } }
        data={editorData}
        onChange={handleEditorChange}
      />
    </div>
  );
};

export default Editor;
