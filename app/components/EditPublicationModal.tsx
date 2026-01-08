"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";

interface Publication {
  id: string;
  title: string;
  publisher: string;
  publication_date: string;
  publication_url: string;
  description: string;
  authors: string[];
}

interface EditPublicationModalProps {
  isOpen: boolean;
  onClose: () => void;
  publication: Publication;
  onSuccess: () => void;
}

export default function EditPublicationModal({
  isOpen,
  onClose,
  publication,
  onSuccess,
}: EditPublicationModalProps) {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    publisher: "",
    publication_date: "",
    publication_url: "",
    description: "",
    authors: [] as string[],
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [authorInput, setAuthorInput] = useState("");

  useEffect(() => {
    if (publication) {
      setFormData({
        title: publication.title || "",
        publisher: publication.publisher || "",
        publication_date: publication.publication_date || "",
        publication_url: publication.publication_url || "",
        description: publication.description || "",
        authors: publication.authors || [],
      });
    }
  }, [publication]);

  const validateDate = (): boolean => {
    const newErrors: { [key: string]: string } = {};
    const today = new Date().toISOString().split("T")[0];

    if (formData.publication_date > today) {
      newErrors.publication_date = "Publication date cannot be in the future";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateDate()) {
      return;
    }

    setLoading(true);

    try {
      const updateData = {
        title: formData.title,
        publisher: formData.publisher,
        publication_date: formData.publication_date,
        publication_url: formData.publication_url,
        description: formData.description,
        authors: formData.authors,
      };

      const { error } = await supabase
        .from("publications")
        .update(updateData)
        .eq("id", publication.id);

      if (error) throw error;

      onSuccess();
      onClose();
    } catch (error) {
      console.error("Error updating publication:", error);
      alert("Failed to update publication. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const addAuthor = () => {
    if (authorInput.trim() && !formData.authors.includes(authorInput.trim())) {
      setFormData({
        ...formData,
        authors: [...formData.authors, authorInput.trim()],
      });
      setAuthorInput("");
    }
  };

  const removeAuthor = (authorToRemove: string) => {
    setFormData({
      ...formData,
      authors: formData.authors.filter((a) => a !== authorToRemove),
    });
  };

  const handleAuthorKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addAuthor();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold text-gray-900">Edit Publication</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Publication Title *
              </label>
              <input
                type="text"
                required
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#162f16] focus:border-transparent"
                placeholder="e.g., Machine Learning in Healthcare"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Publisher *
              </label>
              <input
                type="text"
                required
                value={formData.publisher}
                onChange={(e) => setFormData({ ...formData, publisher: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#162f16] focus:border-transparent"
                placeholder="e.g., IEEE, Springer, Nature"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Publication Date *
              </label>
              <input
                type="date"
                required
                value={formData.publication_date}
                onChange={(e) => setFormData({ ...formData, publication_date: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#162f16] focus:border-transparent"
              />
              {errors.publication_date && (
                <p className="text-red-500 text-xs mt-1">{errors.publication_date}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Publication URL
              </label>
              <input
                type="url"
                value={formData.publication_url}
                onChange={(e) => setFormData({ ...formData, publication_url: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#162f16] focus:border-transparent"
                placeholder="https://..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Description
              </label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#162f16] focus:border-transparent"
                placeholder="Brief description of the publication..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Co-authors
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={authorInput}
                  onChange={(e) => setAuthorInput(e.target.value)}
                  onKeyPress={handleAuthorKeyPress}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#162f16] focus:border-transparent"
                  placeholder="Enter author name and press Enter"
                />
                <button
                  type="button"
                  onClick={addAuthor}
                  className="px-4 py-2 bg-[#162f16] text-white rounded-lg hover:bg-[#0f2310] transition"
                >
                  Add
                </button>
              </div>
              {formData.authors.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-2">
                  {formData.authors.map((author, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm flex items-center gap-2"
                    >
                      {author}
                      <button
                        type="button"
                        onClick={() => removeAuthor(author)}
                        className="hover:text-gray-900"
                      >
                        ×
                      </button>
                    </span>
                  ))}
                </div>
              )}
            </div>

            <div className="flex gap-3 pt-4">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={loading}
                className="flex-1 px-4 py-2 bg-[#162f16] text-white rounded-lg hover:bg-[#0f2310] transition disabled:opacity-50"
              >
                {loading ? "Saving..." : "Save Changes"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}