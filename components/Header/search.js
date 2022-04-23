import { SearchIcon } from "@heroicons/react/solid";

const Search = () => {
  return (
    <div className="flex items-center gap-2 border py-2 px-4 rounded-lg">
      <input
        type="text"
        placeholder="search here..."
        className="focus:outline-none"
      />
      <SearchIcon className="h-5 w-5 text-gray-500" />
    </div>
  );
};

export default Search;
