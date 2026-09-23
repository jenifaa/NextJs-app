"use client";

import { ChevronDown, Search } from "lucide-react";
import { useState } from "react";

const faqData = [
  {
    category: "General",
    questions: [
      {
        question: "What is this blog about?",
        answer:
          "This blog is a place for practical articles, tutorials, ideas, and insights about modern web development and technology.",
      },
      {
        question: "Who is this blog for?",
        answer:
          "The content is mainly created for developers, students, beginners, and anyone interested in learning modern web technologies.",
      },
      {
        question: "How often are new articles published?",
        answer:
          "New articles are published regularly whenever there is something useful and practical worth sharing.",
      },
      {
        question: "Can I suggest an article topic?",
        answer:
          "Absolutely. If there is a topic you would like to see covered, feel free to send a message through the Contact page.",
      },
    ],
  },
  {
    category: "Development",
    questions: [
      {
        question: "What technologies do you write about?",
        answer:
          "Topics can include JavaScript, TypeScript, React, Next.js, Node.js, databases, APIs, UI development, and other modern web technologies.",
      },
      {
        question: "Are the tutorials suitable for beginners?",
        answer:
          "Yes. Tutorials aim to explain concepts clearly and progressively, while also providing practical examples that can be used in real projects.",
      },
      {
        question: "Can I request a tutorial?",
        answer:
          "Yes. You can suggest a specific technology, concept, or project idea through the Contact page.",
      },
    ],
  },
  {
    category: "Content",
    questions: [
      {
        question: "Can I share the articles?",
        answer:
          "Yes. You are welcome to share links to the original articles with others.",
      },
      {
        question: "Can I use code from the tutorials?",
        answer:
          "Generally, the example code is intended for learning and experimentation. Always check the individual article for any project-specific licensing information.",
      },
    ],
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState<string | null>(null);
  const [search, setSearch] = useState("");

  const toggleQuestion = (id: string) => {
    setOpenIndex((current) => (current === id ? null : id));
  };

  const filteredData = faqData
    .map((section) => ({
      ...section,
      questions: section.questions.filter(
        (item) =>
          item.question.toLowerCase().includes(search.toLowerCase()) ||
          item.answer.toLowerCase().includes(search.toLowerCase())
      ),
    }))
    .filter((section) => section.questions.length > 0);

  return (
    <main className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative overflow-hidden px-6 pb-16 pt-24 md:px-10 lg:px-16 lg:pb-20 lg:pt-32">
        <div className="pointer-events-none absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />

        <div className="relative mx-auto max-w-4xl text-center">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-primary">
            FAQ
          </p>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Everything you need to{" "}
            <span className="text-muted-foreground">know.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-muted-foreground md:text-lg">
            Find answers to common questions about the blog, tutorials, and
            content.
          </p>

          {/* Search */}
          <div className="relative mx-auto mt-10 max-w-xl">
            <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />

            <input
              type="text"
              placeholder="Search questions..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="h-14 w-full rounded-2xl border bg-card pl-12 pr-5 text-sm outline-none transition placeholder:text-muted-foreground focus:border-primary"
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 pb-24 md:px-10 lg:px-16">
        <div className="mx-auto max-w-4xl">
          {filteredData.length > 0 ? (
            <div className="space-y-12">
              {filteredData.map((section) => (
                <div key={section.category}>
                  <div className="mb-5 flex items-center gap-4">
                    <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                      {section.category}
                    </h2>

                    <div className="h-px flex-1 bg-border" />
                  </div>

                  <div className="divide-y rounded-2xl border bg-card">
                    {section.questions.map((item, index) => {
                      const id = `${section.category}-${index}`;
                      const isOpen = openIndex === id;

                      return (
                        <div key={id}>
                          <button
                            type="button"
                            onClick={() => toggleQuestion(id)}
                            className="flex w-full items-center justify-between gap-6 px-6 py-6 text-left md:px-7"
                          >
                            <span className="text-base font-medium md:text-lg">
                              {item.question}
                            </span>

                            <span
                              className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-transform ${
                                isOpen ? "rotate-180" : ""
                              }`}
                            >
                              <ChevronDown className="h-4 w-4" />
                            </span>
                          </button>

                          <div
                            className={`grid transition-all duration-300 ${
                              isOpen
                                ? "grid-rows-[1fr] opacity-100"
                                : "grid-rows-[0fr] opacity-0"
                            }`}
                          >
                            <div className="overflow-hidden">
                              <p className="px-6 pb-6 leading-7 text-muted-foreground md:px-7">
                                {item.answer}
                              </p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="py-20 text-center">
              <p className="text-lg font-medium">No questions found.</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Try searching with a different keyword.
              </p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

export default FAQ;