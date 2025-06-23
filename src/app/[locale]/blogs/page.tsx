import "/public/css/blogs.css";
import { getData } from "@/libs/axios/server";
import { AxiosHeaders } from "axios";
import { BlogType } from "@/libs/types/types";
import { getTranslations } from "next-intl/server";
import PageHero from "@/components/PageHero";
import BlogCard from "./BlogCard";

const BlogsPage = async ({
  params,
}: {
  params: Promise<{ locale: string; "blog-slug": string }>;
}) => {
  const { locale } = await params;
  const feachData = async () => {
    try {
      const response = await getData(
        "blogs",
        {},
        new AxiosHeaders({
          lang: locale,
        })
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  const { blogs: blogPosts } = await feachData();

  console.log(blogPosts);

  const t = await getTranslations("blog");

  return (
    <div className="min-h-screen font-lato bg-white pb-20">
      {/* Hero Section */}
      <PageHero
        title={t("title")}
        breadcrumbs={[
          { label: locale === "en" ? "Home" : "الرئيسية", href: "/" },
          { label: t("title") },
        ]}
        backgroundImage="/images/home/AxiomTower.png"
        hideDescription={true}
        height="medium"
      />

      {/* Blog Posts Section */}
      <section className="mx-auto px-4 md:px-6 lg:px-8 py-20 relative z-10 rounded-3xl bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 gap-4">
            {blogPosts.map((post: BlogType) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogsPage;
