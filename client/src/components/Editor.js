import ReactQuill from "react-quill";

// Functional component for rendering a text editor using ReactQuill
export default function Editor({ value, onChange }) {
  // Define modules for the text editor toolbar
  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [
        { list: 'ordered' },
        { list: 'bullet' },
        { indent: '-1' },
        { indent: '+1' },
      ],
      ['link', 'image'],
      ['clean'],
    ],
  };
  
  // Render the ReactQuill component with specified modules and theme
  return (
    <div className="content">
      <ReactQuill
        className="content-area"
        value={value}
        theme={'snow'}
        onChange={onChange}
        modules={modules}
      />
    </div>
  );
}

