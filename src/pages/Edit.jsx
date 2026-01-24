import { useState, useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router";
import PostService from "../services/post.service";
import Swal from "sweetalert2";
import Editor from "../components/Editor";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

const Edit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const editorRef = useRef(null);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    title: "",
    summary: "",
    content: "",
    cover: "",
    coverFile: null,
    coverPreview: ""
  });

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await PostService.getById(id);
        if (response.status === 200) {
          const { title, summary, content, cover } = response.data;
          setFormData({
            title: title || "",
            summary: summary || "",
            content: content || "",
            cover: cover || "",
            coverPreview: cover || ""
          });
        }
        setLoading(false);
      } catch (error) {
        console.error("Fetch error:", error);
        Swal.fire({
          title: "Error",
          text: error?.response?.data?.message || error.message || "Failed to load post data",
          icon: "error"
        });
        navigate("/");
      }
    };
    fetchPost();
  }, [id, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setFormData((prev) => ({
      ...prev,
      coverFile: file,
      coverPreview: URL.createObjectURL(file)
    }));
  };

  const uploadFile = async (file) => {
    const fileName = `${Date.now()}-${file.name.replace(/[^a-zA-Z0-9.-]/g, '')}`;
    const { data, error } = await supabase.storage
      .from("uploads")
      .upload(`uploads/${fileName}`, file);

    if (error) {
      console.error("Upload error:", error);
      return null;
    }

    const { data: urlData } = supabase.storage
      .from("uploads")
      .getPublicUrl(`uploads/${fileName}`);

    return urlData.publicUrl;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!formData.title || !formData.summary || !formData.content) {
        Swal.fire({
          title: "Validation Error",
          text: "Please fill all required fields",
          icon: "warning"
        });
        return;
      }

      let coverUrl = formData.cover;
      if (formData.coverFile) {
        coverUrl = await uploadFile(formData.coverFile);
        if (!coverUrl) {
          Swal.fire("Error", "Failed to upload image", "error");
          return;
        }
      }

      const data = {
        title: formData.title,
        summary: formData.summary,
        content: formData.content,
        cover: coverUrl
      };

      // console.log("Sending data to backend:", data);
      const response = await PostService.updatePost(id, data);
      if (response.status === 200) {
        await Swal.fire({
          title: "Success",
          text: "Post updated successfully",
          icon: "success"
        });
        // Reload page to clear cache
        window.location.href = "/post/" + id;
      }
    } catch (error) {
      console.error("Update error:", error);
      Swal.fire({
        title: "Error",
        text: error?.response?.data?.message || error.message || "Failed to update post",
        icon: "error"
      });
    }
  };

  if (loading) {
    return (
      <div className="text-center mt-10">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-4 pt-20">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-gray-800 text-center">Edit Post</h1>
        <form onSubmit={handleSubmit} className="space-y-6">

          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Title</span>
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Post Title"
              className="input input-bordered w-full"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Summary</span>
            </label>
            <input
              type="text"
              name="summary"
              value={formData.summary}
              onChange={handleChange}
              placeholder="Post Summary"
              className="input input-bordered w-full"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Content</span>
            </label>
            <div className="h-64">
              <Editor
                value={formData.content}
                onChange={(value) =>
                  setFormData((prev) => ({
                    ...prev,
                    content: value
                  }))
                }
                ref={editorRef}
              />
            </div>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Upload Image</span>
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="file-input file-input-bordered w-full"
            />
          </div>

          {formData.coverPreview && (
            <div className="border rounded-lg overflow-hidden max-w-md mx-auto">
              <img
                src={formData.coverPreview}
                alt="Preview"
                className="w-full h-64 object-contain"
                onError={(e) => (e.target.style.display = "none")}
              />
            </div>
          )}

          <div className="flex justify-center space-x-4 mt-6">
            <button type="submit" className="btn btn-primary w-1/3">Update Post</button>
            <button type="button" className="btn btn-ghost w-1/3" onClick={() => navigate(-1)}>Cancel</button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default Edit;
