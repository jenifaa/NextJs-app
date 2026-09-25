"use client";

import { ArrowLeft,  Plus, Send, X } from "lucide-react";
import { useState } from "react";
import Form from "next/form";
import { create } from "@/actions/create";

function CreateBlogForm() {
  const [tags, setTags] = useState<string[]>([]);
  const [tagInput, setTagInput] = useState("");
  const [isFeatured, setIsFeatured] = useState(false);

  const [formData, setFormData] = useState({
    title: "",
    content: "",
    thumbnail: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddTag = () => {
    const tag = tagInput.trim();

    if (!tag || tags.includes(tag)) return;

    setTags([...tags, tag]);
    setTagInput("");
  };

  const handleRemoveTag = (tagToRemove: string) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  const handleTagKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleAddTag();
    }
  };

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

        {/* Form */}
        <Form action={create}>
          {/* Hidden fields for state values */}
          <input type="hidden" name="tags" value={tags.join(",")} />

          <input
            type="hidden"
            name="isFeatured"
            value={isFeatured.toString()}
          />

          <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
            {/* Main editor */}
            <div className="space-y-7">
              {/* Title */}
              <section className="rounded-3xl border bg-card p-6 md:p-8">
                <label
                  htmlFor="title"
                  className="mb-3 block text-sm font-semibold"
                >
                  Blog title
                </label>

                <input
                  id="title"
                  name="title"
                  type="text"
                  placeholder="Write an engaging title..."
                  value={formData.title}
                  onChange={handleChange}
                  required
                  className="w-full border-none bg-transparent text-3xl font-bold tracking-tight outline-none placeholder:text-muted-foreground/50 md:text-4xl"
                />
              </section>

              {/* Content */}
              <section className="rounded-3xl border bg-card p-6 md:p-8">
                <div className="mb-4 flex items-center justify-between">
                  <label htmlFor="content" className="text-sm font-semibold">
                    Article content
                  </label>

                  <span className="text-xs text-muted-foreground">
                    Markdown supported
                  </span>
                </div>

                <textarea
                  id="content"
                  name="content"
                  rows={20}
                  placeholder="Start writing your story..."
                  value={formData.content}
                  onChange={handleChange}
                  required
                  className="w-full resize-none rounded-2xl border bg-background p-5 text-sm leading-7 outline-none transition placeholder:text-muted-foreground focus:border-primary"
                />
              </section>

              {/* Cover image */}
              <section className="rounded-3xl border bg-card p-6 md:p-8">
                <div className="mb-5">
                  <h2 className="text-sm font-semibold">Cover image</h2>

                  <p className="mt-1 text-xs text-muted-foreground">
                    Add an image URL for your article cover.
                  </p>
                </div>

                <input
                  id="thumbnail"
                  type="url"
                  name="thumbnail"
                  placeholder="https://example.com/image.jpg"
                  value={formData.thumbnail}
                  onChange={handleChange}
                  className="h-12 w-full rounded-xl border bg-background px-4 text-sm outline-none transition placeholder:text-muted-foreground focus:border-primary"
                />
              </section>
            </div>

            {/* Sidebar */}
            <aside className="space-y-6">
              {/* Publishing */}
              <section className="rounded-3xl border bg-card p-6">
                <h2 className="text-sm font-semibold">Publishing</h2>

                <div className="mt-5 space-y-5">
                  {/* Featured */}
                  <div className="flex items-center justify-between rounded-xl border p-4">
                    <div>
                      <p className="text-sm font-medium">Featured article</p>

                      <p className="mt-1 text-xs text-muted-foreground">
                        Show on homepage
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => setIsFeatured(!isFeatured)}
                      className={`relative h-6 w-11 rounded-full transition ${
                        isFeatured ? "bg-foreground" : "bg-muted"
                      }`}
                    >
                      <span
                        className={`absolute top-1 h-4 w-4 rounded-full bg-background transition ${
                          isFeatured ? "left-6" : "left-1"
                        }`}
                      />
                    </button>
                  </div>
                </div>
              </section>

              {/* Tags */}
              <section className="rounded-3xl border bg-card p-6">
                <h2 className="text-sm font-semibold">Tags</h2>

                <p className="mt-1 text-xs text-muted-foreground">
                  Add topics related to your article.
                </p>

                <div className="mt-4 flex gap-2">
                  <input
                    type="text"
                    placeholder="Add a tag"
                    value={tagInput}
                    onChange={(e) => setTagInput(e.target.value)}
                    onKeyDown={handleTagKeyDown}
                    className="h-10 min-w-0 flex-1 rounded-xl border bg-background px-3 text-sm outline-none focus:border-primary"
                  />

                  <button
                    type="button"
                    onClick={handleAddTag}
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border transition hover:bg-muted"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>

                {tags.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-1 rounded-full bg-muted px-3 py-1.5 text-xs font-medium"
                      >
                        {tag}

                        <button
                          type="button"
                          onClick={() => handleRemoveTag(tag)}
                          className="text-muted-foreground transition hover:text-foreground"
                        >
                          <X className="h-3 w-3" />
                        </button>
                      </span>
                    ))}
                  </div>
                )}
              </section>

              {/* Tips */}
              <section className="rounded-3xl border bg-foreground p-6 text-background">
                <p className="text-xs font-semibold uppercase tracking-wider opacity-60">
                  Writing tip
                </p>

                <p className="mt-4 text-lg font-medium leading-7">
                  Write for humans first. Make every paragraph useful.
                </p>

                <p className="mt-3 text-sm leading-6 opacity-60">
                  Keep your introduction clear, use meaningful headings, and
                  make your examples practical.
                </p>
              </section>

              {/* Submit */}
              <button
                type="submit"
                className="group flex h-13 w-full items-center justify-center gap-2 rounded-2xl bg-foreground px-5 py-3.5 text-sm font-semibold text-background transition hover:opacity-90"
              >
                Publish article
                <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </aside>
          </div>
        </Form>
      </div>
    </main>
  );
}

export default CreateBlogForm;
