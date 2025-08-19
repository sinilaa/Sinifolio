import React, { forwardRef, useEffect, useLayoutEffect, useRef } from 'react';
import Quill from "quill";

// Import necessary styles and settings for text editor formatting
const AlignStyle = Quill.import('attributors/style/align');
Quill.register(AlignStyle, true);

const Font = Quill.import("attributors/style/font");
Font.whitelist = ['Montserrat, sans-serif', 'Syne, sans-serif', 'Roboto Mono, monospace'];
Quill.register(Font, true);

const Size = Quill.import("attributors/style/size");
Size.whitelist = ['1.3rem', '2.3rem', '5rem'];
Quill.register(Size, true);

const Color = Quill.import('attributors/style/color');
Color.whitelist = ['#212121', '#003F88', '#F9F4EC'];
Quill.register(Color, true);

// Editor is an uncontrolled React component
const Editor = forwardRef(
  ({ readOnly, defaultValue, onTextChange, onSelectionChange }, ref) => {
    const containerRef = useRef(null);
    const defaultValueRef = useRef(defaultValue);
    const onTextChangeRef = useRef(onTextChange);
    const onSelectionChangeRef = useRef(onSelectionChange);

    useLayoutEffect(() => {
      onTextChangeRef.current = onTextChange;
      onSelectionChangeRef.current = onSelectionChange;
    });

    useEffect(() => {
      ref.current?.enable(!readOnly);
    }, [ref, readOnly]);

    useEffect(() => {
      const container = containerRef.current;
      const editorContainer = container.appendChild(
        container.ownerDocument.createElement('div'),
      );
      const quill = new Quill(editorContainer, {
        modules: {
          toolbar: [
            [{ header: [1, 2, 3, false] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{ color: ['#212121', '#003F88', '#F9F4EC']}],
            [
              { list: 'ordered' },
              { list: 'bullet' },
              { indent: '-1' },
              { indent: '+1' },
            ],
            ['link', 'image'],
            [{ 'align': [] }],
            [{ 'font': ['Montserrat, sans-serif', 'Syne, sans-serif', 'Roboto Mono, monospace'] }],
            [{ 'size': ['1.3rem', '2.3rem', '5rem'] }],
            ['clean'],
          ],
        },
        theme: 'snow',
      });

      ref.current = quill;

      if (defaultValueRef.current) {
        quill.setContents(defaultValueRef.current);
      }

      quill.on(Quill.events.TEXT_CHANGE, (...args) => {
        onTextChangeRef.current?.(...args);
      });

      quill.on(Quill.events.SELECTION_CHANGE, (...args) => {
        onSelectionChangeRef.current?.(...args);
      });

      return () => {
        ref.current = null;
        container.innerHTML = '';
      };
    }, [ref]);

    return <div ref={containerRef}></div>;
  },
);

Editor.displayName = 'Editor';

export default Editor;


/*import ReactQuill from "react-quill";
import { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";

// Import necessary styles and settings for text editor formatting
const AlignStyle = Quill.import('attributors/style/align');
Quill.register(AlignStyle, true);

const Font = Quill.import("attributors/style/font");
Font.whitelist = ['Montserrat, sans-serif', 'Syne, sans-serif', 'Roboto Mono, monospace'];
Quill.register(Font, true);

const Size = Quill.import("attributors/style/size");
Size.whitelist = ['1.3rem', '2.3rem', '5rem'];
Quill.register(Size, true);

const Color = Quill.import('attributors/style/color');
Color.whitelist = ['#212121', '#003F88', '#F9F4EC'];
Quill.register(Color, true);

// Define allowed formats for the text editor
const formats = [
  'header',
  'bold', 'italic', 'underline', 'strike', 'blockquote',
  'list', 'bullet', 'indent',
  'link', 'image',
  'align',
  'font',
  'size',
  'clean',
  'color',
];

// Functional component for rendering a text editor using ReactQuill
export default function Editor({ value, onChange }) {
  // Define modules for the text editor toolbar
  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ color: ['#212121', '#003F88', '#F9F4EC']}],
      [
        { list: 'ordered' },
        { list: 'bullet' },
        { indent: '-1' },
        { indent: '+1' },
      ],
      ['link', 'image'],
      [{ 'align': [] }],
      [{ 'font': ['Montserrat, sans-serif', 'Syne, sans-serif', 'Roboto Mono, monospace'] }],
      [{ 'size': ['1.3rem', '2.3rem', '5rem'] }],
      ['clean'],
    ],
  };

  // Render the ReactQuill component with specified modules and theme
  return (
    <div className="content">
      <ReactQuill
        className="content_area"
        value={value}
        theme={'snow'}
        onChange={onChange}
        modules={modules}
        formats={formats}
      />
    </div>
  );
}*/