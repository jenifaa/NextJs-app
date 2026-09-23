"use client";

import { ArrowUpRight, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { useState } from "react";

function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(formData);

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <main className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative overflow-hidden px-6 pb-16 pt-24 md:px-10 lg:px-16 lg:pb-20 lg:pt-32">
        {/* Background glow */}
        <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />

        <div className="relative mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-primary">
              Contact
            </p>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-7xl">
              Let&apos;s start a{" "}
              <span className="text-muted-foreground">conversation.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground md:text-lg">
              Have a question, suggestion, or an interesting idea? Send a
              message. I&apos;d love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact section */}
      <section className="px-6 pb-24 md:px-10 lg:px-16">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          {/* Left */}
          <div className="rounded-3xl border bg-card p-7 md:p-10">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">
              Get in touch
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight">
              Have something to say?
            </h2>

            <p className="mt-4 leading-7 text-muted-foreground">
              Whether you found a typo, want to suggest a topic, or simply
              want to connect, feel free to reach out.
            </p>

            <div className="mt-10 space-y-6">
              {/* Email */}
              <a
                href="mailto:hello@example.com"
                className="group flex items-center gap-4"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border bg-background">
                  <Mail className="h-5 w-5" />
                </div>

                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium group-hover:text-primary">
                    hello@example.com
                  </p>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border bg-background">
                  <MapPin className="h-5 w-5" />
                </div>

                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-medium">Bangladesh</p>
                </div>
              </div>
            </div>

            {/* Social */}
            <div className="mt-12 border-t pt-7">
              <p className="mb-4 text-sm text-muted-foreground">
                Find me online
              </p>

              <div className="flex gap-3">
                <a
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full border transition hover:bg-foreground hover:text-background"
                >
                  <Github className="h-4 w-4" />
                </a>

                <a
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full border transition hover:bg-foreground hover:text-background"
                >
                  <Linkedin className="h-4 w-4" />
                </a>

                <a
                  href="mailto:hello@example.com"
                  className="flex h-10 w-10 items-center justify-center rounded-full border transition hover:bg-foreground hover:text-background"
                >
                  <Mail className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="rounded-3xl border bg-card p-7 md:p-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium"
                  >
                    Your name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="h-12 w-full rounded-xl border bg-background px-4 text-sm outline-none transition placeholder:text-muted-foreground focus:border-primary"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium"
                  >
                    Email
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="h-12 w-full rounded-xl border bg-background px-4 text-sm outline-none transition placeholder:text-muted-foreground focus:border-primary"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm font-medium"
                >
                  Subject
                </label>

                <input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="What would you like to talk about?"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="h-12 w-full rounded-xl border bg-background px-4 text-sm outline-none transition placeholder:text-muted-foreground focus:border-primary"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={7}
                  placeholder="Tell me what's on your mind..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full resize-none rounded-xl border bg-background px-4 py-3 text-sm outline-none transition placeholder:text-muted-foreground focus:border-primary"
                />
              </div>

              <button
                type="submit"
                className="group inline-flex h-12 items-center gap-2 rounded-xl bg-foreground px-6 text-sm font-medium text-background transition hover:opacity-90"
              >
                Send message
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ContactUs;