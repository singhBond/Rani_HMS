"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Button } from "@/components/ui/button";

const UploadPage = () => {
  const [pdfFile, setPdfFile] = useState(null);
  const [link, setLink] = useState("");
  const router = useRouter();

  // We "wrap" the logic that should run after mounting in useEffect
  useEffect(() => {
    // This code runs only on the client side after the component has mounted
    if (pdfFile && link) {
      console.log("PDF File:", pdfFile);
      console.log("Link:", link);
    }
  }, [pdfFile, link]); // Add dependencies, this runs whenever pdfFile or link changes

  const handleFileChange = (e) => {
    setPdfFile(e.target.files[0]);
  };

  const handleLinkChange = (e) => {
    setLink(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // After submission, redirect or reset the form
    router.push("/thankyou");
  };

  return (
    <section className="px-4 py-4">
      <h1 className="text-2xl font-bold mb-4">Upload PDF and Add Link</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Link Input */}
        <div>
          <label htmlFor="link" className="block text-sm font-medium text-gray-700">
            Add a Link
          </label>
          <input
            type="url"
            id="link"
            name="link"
            value={link}
            onChange={handleLinkChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="https://example.com"
            required
          />
        </div>

        {/* PDF Upload */}
        <div>
          <label htmlFor="pdf" className="block text-sm font-medium text-gray-700">
            Upload PDF
          </label>
          <input
            type="file"
            id="pdf"
            name="pdf"
            accept=".pdf"
            onChange={handleFileChange}
            className="mt-1 block w-full"
            required
          />
        </div>

        {/* Submit Button */}
        <Button type="submit" className="w-full mt-4">
          Submit
        </Button>
      </form>
    </section>
  );
};

export default UploadPage;
