"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

interface AddPublicationModalProps {
  isOpen: boolean;
  onClose: () => void;
  userId: string;
  onSuccess: () => void;
}

export default function AddPublicationModal({ isOpen, onClose, userId, onSuccess }: AddPublicationModalProps) {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    publisher: "",
    publication_date: "",
    publication_url: "",
    description: "",
    authors: [] as string[]
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [authorInput, setAuthorInput] = useState("");

  const validateDate = () => {
    const newErrors: { [key: string]: string } = {};
    const today = new Date();
    const pubDate = new Date(formData.publication_date);

    if (pubDate > today) {
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
      const { error } = await supabase
        .from("publications")
        .insert({
          user_id: userId,
          title: formData.title,
          publisher: formData.publisher,
          publication_date: formData.publication_date,
          publication_url: formData.publication_url,
          description: formData.description,
          authors: formData.authors
        });

      if (error) throw error;

      onSuccess();
      onClose();
      setFormData({
        title: "",
        publisher: "",
        publication_date: "",
        publication_url: "",
        description: "",
        authors: []
      });
      setErrors({});
    } catch (error) {
      console.error("Error adding publication:", error);
      alert("Failed to add publication. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const addAuthor = () => {
    if (authorInput.trim() && !formData.authors.includes(authorInput.trim())) {
      setFormData({ ...formData, authors: [...formData.authors, authorInput.trim()] });
      setAuthorInput("");
    }
  };

  const removeAuthor = (authorToRemove: string) => {
    setFormData({
      ...formData,
      authors: formData.authors.filter(author => author !== authorToRemove)
    });
  };

  const handleAuthorKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      addAuthor();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-lg w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
          <h2 className="text-xl font-semibold text-gray-900">Add Publication</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {/* Title */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Title *
            </label>
            <input
              type="text"
              required
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#162f16] text-sm"
              placeholder="e.g., Machine Learning in Healthcare"
            />
          </div>

          {/* Publisher */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Publisher *
            </label>
            <input
              type="text"
              required
              value={formData.publisher}
              onChange={(e) => setFormData({ ...formData, publisher: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#162f16] text-sm"
              placeholder="e.g., IEEE, Nature, ACM"
            />
          </div>

          {/* Publication Date */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Publication Date *
            </label>
            <input
              type="date"
              required
              value={formData.publication_date}
              onChange={(e) => setFormData({ ...formData, publication_date: e.target.value })}
              max={new Date().toISOString().split('T')[0]}
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#162f16] text-sm ${
                errors.publication_date ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.publication_date && (
              <p className="text-xs text-red-500 mt-1">{errors.publication_date}</p>
            )}
          </div>

          {/* Publication URL */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Publication URL
            </label>
            <input
              type="url"
              value={formData.publication_url}
              onChange={(e) => setFormData({ ...formData, publication_url: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#162f16] text-sm"
              placeholder="https://..."
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Description
            </label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              rows={3}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#162f16] text-sm"
              placeholder="Brief description of the publication..."
            />
          </div>

          {/* Authors */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Co-Authors
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                value={authorInput}
                onChange={(e) => setAuthorInput(e.target.value)}
                onKeyPress={handleAuthorKeyPress}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#162f16] text-sm"
                placeholder="Enter author name and press Enter"
              />
              <button
                type="button"
                onClick={addAuthor}
                className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition text-sm"
              >
                Add
              </button>
            </div>
          </div>

          {formData.authors.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {formData.authors.map((author) => (
                <span
                  key={author}
                  className="inline-flex items-center gap-1 px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                >
                  {author}
                  <button
                    type="button"
                    onClick={() => removeAuthor(author)}
                    className="hover:text-red-600"
                  >
                    ×
                  </button>
                </span>
              ))}
            </div>
          )}

          <div className="flex gap-3 pt-4">
            <button
              type="submit"
              disabled={loading}
              className="flex-1 px-4 py-2 bg-[#162f16] text-white rounded-lg font-medium hover:bg-[#0f2310] transition disabled:opacity-50"
            >
              {loading ? "Adding..." : "Add Publication"}
            </button>
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}