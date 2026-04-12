type Props = {
  title: string;
  description: string;
  publishedAt: Date;
  slug: string;
  tags: string[];
};

export default function BlogCard({ title, description, publishedAt, slug, tags }: Props) {
  const formattedDate = new Intl.DateTimeFormat('ja-JP', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(publishedAt);

  return (
    <a href={`${import.meta.env.BASE_URL}/blog/${slug}`} className="block rounded-xl border border-gray-200 p-4 sm:p-5 hover:border-gray-400 transition-colors bg-white shadow-sm hover:shadow-md">
      <time className="text-xs text-gray-500 font-medium">{formattedDate}</time>
      <h2 className="mt-1 text-lg font-bold text-gray-900 leading-tight">{title}</h2>
      <p className="mt-2 text-sm text-gray-600 line-clamp-2 leading-relaxed">{description}</p>
      {tags.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-1">
          {tags.map((tag) => (
            <span key={tag} className="rounded bg-gray-100 px-2 py-0.5 text-xs text-gray-600">
              {tag}
            </span>
          ))}
        </div>
      )}
    </a>
  );
}
