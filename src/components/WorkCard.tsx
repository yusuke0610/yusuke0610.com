type Props = {
  title: string;
  description: string;
  url?: string;
  github?: string;
  tags: string[];
};

export default function WorkCard({ title, description, url, github, tags }: Props) {
  return (
    <div className="rounded-xl border border-gray-200 p-4 sm:p-5 bg-white shadow-sm transition-shadow hover:shadow-md flex flex-col h-full">
      <h2 className="text-lg font-bold text-gray-900 leading-tight">{title}</h2>
      <p className="mt-2 text-sm text-gray-600 leading-relaxed flex-grow">{description}</p>
      {tags.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-1">
          {tags.map((tag) => (
            <span key={tag} className="rounded bg-gray-100 px-2 py-0.5 text-xs text-gray-600">
              {tag}
            </span>
          ))}
        </div>
      )}
      <div className="mt-4 flex gap-3">
        {url && (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-blue-600 hover:underline"
          >
            サービスへ →
          </a>
        )}
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-gray-600 hover:underline"
          >
            GitHub →
          </a>
        )}
      </div>
    </div>
  );
}
