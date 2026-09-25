"use client";

import { ArrowLeft } from "lucide-react";
import { useState } from "react";
import Form from "next/form";
import { create } from "@/actions/create";

function CreateBlogForm() {
  const [isFeatured, setIsFeatured] = useState("false");

  return (
    <main className="min-h-screen bg-background px-5 py-10 md:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-10">
          <button
            type="button"
            onClick={() => window.history.back()}
            className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground transition hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </button>

          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                Blog Studio
              </p>

              <h1 className="text-3xl font-bold tracking-tight md:text-5xl">
                Create a new story
              </h1>

              <p className="mt-3 max-w-xl text-muted-foreground">
                Share your thoughts, knowledge, and ideas with your readers.
              </p>
            </div>

            <div className="hidden text-right text-sm text-muted-foreground md:block">
              <p>Draft</p>
              <p className="mt-1">Not published yet</p>
            </div>
          </div>
        </div>

        <Form
          action={create}
          className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg space-y-4 w-full"
        >
          <h2 className="text-xl font-semibold mb-4">Create Blog</h2>

          {/* Title */}
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="title">
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              className="w-full rounded-md border px-3 py-2 focus:ring focus:ring-blue-200"
            />
          </div>

          {/* Content */}
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="content">
              Content
            </label>
            <textarea
              id="content"
              name="content"
              rows={4}
              className="w-full rounded-md border px-3 py-2 focus:ring focus:ring-blue-200"
            />
          </div>

          {/* Thumbnail */}
          <div>
            <label
              className="block text-sm font-medium mb-1"
              htmlFor="thumbnail"
            >
              Thumbnail URL
            </label>
            <input
              type="url"
              id="thumbnail"
              name="thumbnail"
              className="w-full rounded-md border px-3 py-2 focus:ring focus:ring-blue-200"
            />
          </div>

          {/* Tags */}
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="tags">
              Tags (comma separated)
            </label>
            <input
              type="text"
              id="tags"
              name="tags"
              placeholder="Next.js, React, Web Development"
              className="w-full rounded-md border px-3 py-2 focus:ring focus:ring-blue-200"
            />
          </div>

          {/* Featured */}
          <div>
            <p className="block text-sm font-medium mb-1">Featured</p>
            <div className="flex gap-6">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="isFeatured"
                  value="true"
                  checked={isFeatured === "true"}
                  onChange={(e) => setIsFeatured(e.target.value)}
                  className="text-blue-600 focus:ring-blue-500"
                />
                Yes
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="isFeatured"
                  value="false"
                  checked={isFeatured === "false"}
                  onChange={(e) => setIsFeatured(e.target.value)}
                  className="text-blue-600 focus:ring-blue-500"
                />
                No
              </label>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-medium py-2 rounded-md hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </Form>
      </div>
    </main>
  );
}

export default CreateBlogForm;
