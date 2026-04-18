

import AppBreadcrumb from '@/components/ui/shared/AppBreadcrumb/AppBreadcrumb';
import { SiteConfig } from '@/config/site';
import { blogs } from '@/data/blogs';
import BlogDetailPage from '@/pages/BlogPage/BlogDetailPage';
import BreadcrumbSchema from '@/seo/schemas/BreadcrumbSchema';
import { notFound } from 'next/navigation';



export async function generateMetadata({ params }) {
  const { slug } = await params;
  const blog = blogs?.find((s) => s?.slug === slug);

  if (!blog) {
    return notFound()
  };

  return {
    title: blog?.meta_title,
    description: blog?.meta_description,
    alternates: {
      canonical: `${SiteConfig?.url}/blog/${slug}`,
    },
  };
}

export default async function ServiceDetailPage({ params }) {
  const { slug } = await params;
  const blog = blogs?.find((s) => s?.slug === slug);

  const items = [
    { label: "Home", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: blog?.cardTitle, href: blog?.slug }
  ];

  return <>    
  <BreadcrumbSchema items={items} />
  <AppBreadcrumb items={items} />
    <BlogDetailPage blog={blog} /> </>
}