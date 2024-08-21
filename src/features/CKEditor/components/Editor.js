import React, {useState} from "react";
import {CKEditor} from "@ckeditor/ckeditor5-react";
import {
  ClassicEditor,
  Alignment,
  Autoformat,
  Bold,
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
import {REDUCED_MATERIAL_COLORS} from "../assets/colors";

import "ckeditor5/ckeditor5.css";


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

          shouldNotGroupWhenFull: true,
          toolbar: {
            items: [
              // --- Document-wide tools ----------------------------------------------------------------------
              "undo",
              "redo",
              "|",
              "findAndReplace",
              "selectAll",
              "|",

              // --- "Insertables" ----------------------------------------------------------------------------

              "link",
              "insertImage",
              "insertTable",
              "blockQuote",
              "mediaEmbed",
              "codeBlock",
              "pageBreak",
              "horizontalLine",
              "specialCharacters",

              // --- Block-level formatting -------------------------------------------------------------------
              "heading",
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
              "todoList",
              "|",
              "outdent",
              "indent",
            ],
          },

          fontFamily: {
            supportAllValues: true,
          },
          fontSize: {
            options: [10, 12, 14, "default", 18, 20, 22, 24, 28, 32, 36, 40, 48, 56],
            supportAllValues: true,
          },
          fontColor: {
            columns: 12,
            colors: REDUCED_MATERIAL_COLORS,
          },
          fontBackgroundColor: {
            columns: 12,
            colors: REDUCED_MATERIAL_COLORS,
          },
          heading: {
            options: [
              {model: "paragraph", title: "Paragraph", class: "ck-heading_paragraph"},
              {
                model: "heading1",
                view: "h1",
                title: "Heading 1",
                class: "ck-heading_heading1",
              },
              {
                model: "heading2",
                view: "h2",
                title: "Heading 2",
                class: "ck-heading_heading2",
              },
              {
                model: "heading3",
                view: "h3",
                title: "Heading 3",
                class: "ck-heading_heading3",
              },
              {
                model: "heading4",
                view: "h4",
                title: "Heading 4",
                class: "ck-heading_heading4",
              },
              {
                model: "heading5",
                view: "h5",
                title: "Heading 5",
                class: "ck-heading_heading5",
              },
              {
                model: "heading6",
                view: "h6",
                title: "Heading 6",
                class: "ck-heading_heading6",
              },
            ],
          },
          htmlSupport: {
            allow: [
              // Enables all HTML features.
              {
                name: /.*/,
                attributes: true,
                classes: true,
                styles: true,
              },
            ],
            disallow: [
              {
                attributes: [
                  {key: /^on(.*)/i, value: true},
                  {
                    key: /.*/,
                    value: /(\b)(on\S+)(\s*)=|javascript:|(<\s*)(\/*)script/i,
                  },
                  {key: /.*/, value: /data:(?!image\/(png|jpeg|gif|webp))/i},
                ],
              },
              {name: "script"},
            ],
          },
          image: {
            resizeOptions: [
              {
                name: "resizeImage:original",
                label: "Default image width",
                value: null,
              },
              {
                name: "resizeImage:50",
                label: "50% page width",
                value: "50",
              },
              {
                name: "resizeImage:75",
                label: "75% page width",
                value: "75",
              },
            ],
            toolbar: [
              "imageTextAlternative",
              "toggleImageCaption",
              "|",
              "imageStyle:inline",
              "imageStyle:wrapText",
              "imageStyle:breakText",
              "|",
              "resizeImage",
            ],
          },
          list: {
            properties: {
              styles: true,
              startIndex: true,
              reversed: true,
            },
          },
          link: {
            decorators: {
              toggleDownloadable: {
                mode: "manual",
                label: "Downloadable",
                attributes: {
                  download: "file",
                },
              },
            },
            addTargetToExternalLinks: true,
            defaultProtocol: "https://",
          },
          table: {
            contentToolbar: [
              "tableColumn",
              "tableRow",
              "mergeTableCells",
              "tableProperties",
              "tableCellProperties",
              "toggleTableCaption",
            ],
          },
          menuBar: {
            isVisible: true,
          },
          plugins: [
            Alignment,
            Autoformat,
            AutoImage,
            AutoLink,
            BlockQuote,
            Bold,
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
