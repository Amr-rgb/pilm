import { HiChevronRight } from "react-icons/hi";

export const Category = () => {
  const categories = [
    {
      id: "1",
      title: "Romance",
      emoji: "/emojis/romance-emoji.png",
    },
    {
      id: "2",
      title: "Comedy",
      emoji: "/emojis/comedy-emoji.png",
    },
    {
      id: "3",
      title: "Horror",
      emoji: "/emojis/horror-emoji.png",
    },
    {
      id: "4",
      title: "Drama",
      emoji: "/emojis/drama-emoji.png",
    },
  ];

  return (
    <div className="mt-4 px-4">
      <div className="font-medium flex items-center justify-between py-6">
        <p>Category</p>
        <button className="text-orange text-sm flex items-center space-x-4">
          <p>See All</p>
          <HiChevronRight />
        </button>
      </div>

      <div className="flex justify-between">
        {categories.map((category) => (
          <button
            key={category.id}
            className="flex flex-col items-center space-y-3"
          >
            <div className="w-16 p-4 rounded-2xl bg-[#333]">
              <img src={category.emoji} alt="" />
            </div>
            <p className="font-medium text-xs opacity-50">{category.title}</p>
          </button>
        ))}
      </div>
    </div>
  );
};
