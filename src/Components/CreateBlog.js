import "../CSS_Code/CreateBlogCSS.css";
import React, { useRef, useState } from "react";

function CreateBlog() {
  const fileInputRef = useRef(null);
  const [preview, setPreview] = useState(null);

  const handleLabelClick = () => {
    fileInputRef.current?.click();
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
        e.target.value = null;
      };
      reader.readAsDataURL(file);
    } else {
      setPreview(null);
      e.target.value = null;
    }
  };

  return (
    <div className="createBlogWrapper">
      <div className="createBlogContainer">
        <h1 className="createBlogHeading">Let's Create a Blog</h1>
        <p className="createBlogSubtext">
          Share your knowledge with the world. Fill in the form to publish a new
          blog post.
        </p>

        <form>
          <div className="formGroup">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              placeholder="How to Create a Good YouTube Thumbnail"
              className="inputField"
            />
          </div>

          <div className="formGroup">
            <label htmlFor="category">Category</label>
            <select id="category" className="selectDropdown">
              <option value="">Select a category</option>
              <option value="webdev">Web Development</option>
              <option value="digitalmarketing">Digital Marketing</option>
              <option value="blogging">Blogging</option>
              <option value="photography">Photography</option>
              <option value="cooking">Cooking</option>
            </select>
          </div>

          <div className="formGroup">
            <label htmlFor="content">Content</label>
            <textarea
              id="content"
              placeholder="Write your blog content here..."
              className="textareaField"
            ></textarea>
          </div>

          <div className="formGroup uploadContainer">
            <button
              type="button"
              onClick={handleLabelClick}
              className="uploadButton"
            >
              Upload Thumbnail
            </button>

            <input
              type="file"
              id="imageUpload"
              accept="image/*"
              ref={fileInputRef}
              onChange={handleImageChange}
              style={{ display: "none" }}
            />

            {preview && (
              <div className="previewContainer">
                <img
                  src={preview}
                  alt="Thumbnail Preview"
                  className="thumbnail"
                />
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateBlog;