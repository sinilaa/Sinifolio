import ReactQuill from "react-quill";
import { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";

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

const formats = [
  'header',
  'bold', 'italic', 'underline', 'strike', 'blockquote',
  'list', 'bullet', 'indent',
  'link', 'image',
  'align',
  'font',
  'size',  // Lisätään kokoattribuutti
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
      [{ 'size': ['1.3rem', '2.3rem', '5rem'] }], // Lisää fonttikoot
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
}