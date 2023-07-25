import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

const GenreList = () => {
  const { data, isLoading, error } = useGenres();
  return (
    <div>
      <ul>
        {data.map((genre) => {
          return (
            <li key={genre.id} className="flex flex-row items-center p-[10px]">
              <img
                className="object-cover rounded-[8px] w-[30px] h-[30px]"
                src={getCroppedImageUrl(genre.image_background)}
              ></img>
              <button className="text-left text-white whitespace-normal px-[5px]">
                {genre.name}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default GenreList;
