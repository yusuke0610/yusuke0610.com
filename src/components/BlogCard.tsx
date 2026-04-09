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
    <a href={`${import.meta.env.BASE_URL}/blog/${slug}`} className="block rounded-lg border border-gray-200 p-5 hover:border-gray-400 transition-colors">
      <time className="text-xs text-gray-500">{formattedDate}</time>
      <h2 className="mt-1 text-base font-semibold text-gray-900">{title}</h2>
      <p className="mt-1 text-sm text-gray-600 line-clamp-2">{description}</p>
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
