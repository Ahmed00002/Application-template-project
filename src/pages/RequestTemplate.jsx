// src/components/RequestTemplateForm.jsx
import { Button } from "@/components/ui/button";
import React, { useState } from "react";

const categories = ["Job Application", "Educational", "Government", "Personal"];

export default function RequestTemplateForm() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState(categories[0]);
  const [description, setDescription] = useState("");
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactPhone, setContactPhone] = useState("");
  const [file, setFile] = useState(null);
  const [priority, setPriority] = useState("Normal");
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [previewOpen, setPreviewOpen] = useState(false);

  // simple validation
  const validate = () => {
    const e = {};
    if (!title.trim()) e.title = "Title লাগবে।";
    if (!description.trim()) e.description = "Description লাগবে।";
    if (!contactName.trim()) e.contactName = "আপনার নাম দিন।";
    if (!contactEmail.trim() && !contactPhone.trim())
      e.contact = "ইমেইল বা ফোন নম্বর অবশ্যই দিতে হবে।";
    if (contactEmail && !/^\S+@\S+\.\S+$/.test(contactEmail))
      e.contactEmail = "সঠিক ইমেইল ফরম্যাট দিন।";
    return e;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    setSuccessMsg("");
    const eObj = validate();
    if (Object.keys(eObj).length) {
      setErrors(eObj);
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    setSubmitting(true);
    try {
      // FormData for file upload
      const fd = new FormData();
      fd.append("title", title);
      fd.append("category", category);
      fd.append("description", description);
      fd.append("contactName", contactName);
      fd.append("contactEmail", contactEmail);
      fd.append("contactPhone", contactPhone);
      fd.append("priority", priority);
      if (file) fd.append("sampleFile", file);

      // change endpoint as your backend expects
      const res = await fetch("/api/requests/templates", {
        method: "POST",
        body: fd,
      });

      if (!res.ok) {
        const text = await res.text();
        throw new Error(text || "Request failed");
      }

      setSuccessMsg("Request সফলভাবে পাঠানো হয়েছে! আমরা শীঘ্রই তোমাকে জানাব।");
      // reset form
      setTitle("");
      setCategory(categories[0]);
      setDescription("");
      setContactName("");
      setContactEmail("");
      setContactPhone("");
      setFile(null);
      setPriority("Normal");
    } catch (err) {
      setErrors({ submit: err.message || "Something went wrong" });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="center py-20 mx-auto p-6 bg-white rounded-lg shadow">
      <h1 className="text-2xl font-bold mb-2">টেমপ্লেট রিকোয়েস্ট পাঠান</h1>
      <p className="text-sm text-gray-600 mb-6">
        এখানে আপনার পছন্দমত টেমপ্লেটের বিস্তারিত বলুন অথবা আপনি আপনার
        আবেদনপত্রটা লিখে দিন — আমরা সেটা তৈরি করে দেবো বা কাস্টমাইজ করবো।
      </p>

      {Object.keys(errors).length > 0 && (
        <div className="bg-red-50 border border-red-200 text-red-800 p-3 rounded mb-4">
          {errors.submit ? (
            <p>{errors.submit}</p>
          ) : (
            <ul className="list-disc pl-5">
              {Object.values(errors).map((err, idx) => (
                <li key={idx}>{err}</li>
              ))}
            </ul>
          )}
        </div>
      )}

      {successMsg && (
        <div className="bg-green-50 border border-green-200 text-green-800 p-3 rounded mb-4">
          {successMsg}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Title */}
        <div>
          <label className="block text-sm font-medium mb-1">
            টেমপ্লেট শিরোনাম *
          </label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border rounded p-2 text-sm"
            placeholder="উদাহরণ: চাকরির আবেদন (সরকারি)"
          />
        </div>

        {/* Category & Priority */}
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-sm font-medium mb-1">ক্যাটেগরি</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full border rounded p-2 text-sm"
            >
              {categories.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              প্রায়োরিটি
            </label>
            <select
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
              className="w-full border rounded p-2 text-sm"
            >
              <option>Low</option>
              <option>Normal</option>
              <option>High</option>
              <option>Urgent</option>
            </select>
          </div>
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium mb-1">
            বিবরণ/নির্দিষ্ট চাহিদা *
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={6}
            className="w-full border rounded p-2 text-sm"
            placeholder="এখানে বিস্তারিত লিখুন — কোন কি ফিল্ড লাগবে, কিভাবে দেখাবে, ভাষা, সাইনচার, ইত্যাদি..."
          />
          <p className="text-xs text-gray-500 mt-1">
            আপনি চাইলে HTML / টেক্সট দুটোই পাঠাতে পারেন।
          </p>
        </div>

        {/* Contact */}
        <div className="grid grid-cols-3 gap-3">
          <div>
            <label className="block text-sm font-medium mb-1">নাম *</label>
            <input
              value={contactName}
              onChange={(e) => setContactName(e.target.value)}
              className="w-full border rounded p-2 text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">ইমেইল</label>
            <input
              value={contactEmail}
              onChange={(e) => setContactEmail(e.target.value)}
              className="w-full border rounded p-2 text-sm"
            />
            {errors.contactEmail && (
              <p className="text-xs text-red-600">{errors.contactEmail}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">ফোন</label>
            <input
              value={contactPhone}
              onChange={(e) => setContactPhone(e.target.value)}
              className="w-full border rounded p-2 text-sm"
            />
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <Button
            type="button"
            onClick={() => setPreviewOpen(true)}
            className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-500 border rounded text-sm"
          >
            Preview
          </Button>

          <Button
            type="submit"
            disabled={submitting}
            className={`rounded text-sm text-white ${
              submitting ? "bg-gray-400" : "bg-black hover:bg-black/80"
            }`}
          >
            {submitting ? "Sending..." : "Send Request"}
          </Button>

          <Button
            type="button"
            onClick={() => {
              // quick clear
              setTitle("");
              setCategory(categories[0]);
              setDescription("");
              setContactName("");
              setContactEmail("");
              setContactPhone("");
              setFile(null);
              setPriority("Normal");
              setErrors({});
              setSuccessMsg("");
            }}
            className="border rounded text-sm bg-red-500 hover:bg-red-500/80"
          >
            Clear
          </Button>
        </div>
      </form>

      {/* Preview Modal */}
      {previewOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white max-w-2xl w-full rounded shadow-lg p-5 relative">
            <button
              onClick={() => setPreviewOpen(false)}
              className="absolute right-3 top-3 text-gray-600"
            >
              ✕
            </button>

            <h2 className="text-lg font-bold mb-2">{title || "(No title)"}</h2>
            <p className="text-sm text-gray-500 mb-4">
              {category} • Priority: {priority}
            </p>

            <div className="prose max-w-full mb-4">
              {description ? (
                // if you want to render HTML use dangerouslySetInnerHTML
                <div
                  dangerouslySetInnerHTML={{
                    __html: description.replaceAll("\n", "<br/>"),
                  }}
                />
              ) : (
                <p className="text-sm text-gray-500">No description</p>
              )}
            </div>

            <div className="flex justify-end gap-2">
              <button
                onClick={() => setPreviewOpen(false)}
                className="px-4 py-2 border rounded text-sm"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
