import { ReactNode } from "react";
import BlogDecorativeLines from "./BlogDecorativeLines";

interface BlogArticleContentProps {
  children: ReactNode;
}

export default function BlogArticleContent({
  children,
}: BlogArticleContentProps) {
  return (
    <section className="relative mt-20 md:mt-24 mb-16 md:mb-24 overflow-hidden">
      <BlogDecorativeLines />
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {children}
      </article>
    </section>
  );
}


