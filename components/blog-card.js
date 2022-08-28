import Link from "next/link";

export default function BlogCard({ item, small }) {
  return (
    <article
      key={item.slug.current}
      className={`p-1 shadow-xl rounded-2xl bg-gradient-to-r from-[#A3767D] via-[#F2CC85] to-[#84B8D9] col-span-1 lg:col-span-2 ${
        small ? "w-[100%]" : "w-[100%]"
      }`}
    >
      {small ? <SmallVersion item={item} /> : <LargeVersion item={item} />}
    </article>
  );
}

function SmallVersion({ item }) {
  return (
    <Link href={`/blog/${item.slug.current}`}>
      <div className="flex flex-row justify-end h-full p-6 bg-gray-900 sm:p-8 rounded-xl hover:bg-opacity-90">
        <div className="flex flex-col w-full">
          {item.publishedAt && (
            <p className="text-xs font-medium text-gray-500">
              {item.publishedAt.split("T")[0]}
            </p>
          )}
          <h5 className="mt-4 text-xl font-bold text-white">{item.title}</h5>
          <div className="flex items-center justify-between mt-2">
            <p className="text-lg font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#A3767D] via-[#F2CC85] to-[#84B8D9]">
              {item.categories[0].title}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}

function LargeVersion({ item }) {
  return (
    <Link href={`/blog/${item.slug.current}`}>
      <div className="flex flex-col justify-end h-full p-6 bg-gray-900 sm:p-8 rounded-xl hover:bg-opacity-90">
        {item.imageUrl && (
          <img
            src={item.imageUrl}
            alt={item.title}
            className="object-contain self-center saturate-[0.8] h-[150px] lg:h-[250px]"
          />
        )}
        <div className="mt-12">
          {item.publishedAt && (
            <p className="text-xs font-medium text-gray-500">
              {item.publishedAt.split("T")[0]}
            </p>
          )}
          <h5 className="mt-4 text-xl font-bold text-white">{item.title}</h5>
          <div className="flex items-center justify-between mt-2">
            <p className="text-lg font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#A3767D] via-[#F2CC85] to-[#84B8D9]">
              {item.categories[0].title}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
