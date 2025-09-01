"use client";

import { BlogPost } from "@/types/blog";
import Link from "next/link";

interface BlogCardProps {
  post: BlogPost;
  locale: "en" | "ar";
  dir?: "ltr" | "rtl";
}

export default function BlogCard({ post, locale, dir = "ltr" }: BlogCardProps) {
  return (
    <div className="bg-transparent" dir={dir}>
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden mb-4">
        <img
          src={post.image}
          alt={post.imageAlt[locale]}
          className="w-full h-full object-cover rounded-xl transition-transform duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-0">
        <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2">
          {post.title[locale]}
        </h3>

        <Link
          href={
            locale === "ar" ? `/ar/blog/${post.slug}` : `/blog/${post.slug}`
          }
          className="inline-flex items-center text-primary-light hover:text-primary-dark font-semibold transition-colors duration-200 underline"
        >
          {locale === "ar" ? "اقرأ المزيد" : "Read More"}
        </Link>
      </div>
    </div>
  );
}
