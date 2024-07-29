import { useState, useEffect } from "react";

interface SearchBarProps {
  setIsClose: React.Dispatch<React.SetStateAction<boolean>>;
  setLocation: React.Dispatch<React.SetStateAction<string>>;
}

const SearchBar: React.FC<SearchBarProps> = ({ setIsClose, setLocation }) => {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");
  const [locations, setLocations] = useState<{ location: string }[]>([]);

  useEffect(() => {
    const savedLocations = localStorage.getItem("locations");
    if (savedLocations) {
      setLocations(JSON.parse(savedLocations));
    }
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!inputValue) {
      setError("The field cannot be empty");
      return;
    } else if (inputValue.length < 3) {
      setError("The minimum length is 3 characters");
      return;
    } else if (inputValue.length > 50) {
      setError("The maximum length is 50 characters");
      return;
    }
    setError("");
    setLocation(inputValue);
    setIsClose(false);
  };

  return (
    <section
      id="current-weather"
      className="text-white p-4 min-h-screen current-weather-color w-full flex flex-col max-w-[425px] md:mx-auto xl:mx-0"
    >
      <div className="flex justify-end">
        <button onClick={() => setIsClose(false)}>
          <img src="icons/close.svg" alt="Close icon" />
        </button>
      </div>
      <form className="flex gap-4 w-full pt-4" onSubmit={handleSubmit}>
        <div className="flex gap-2 bg-transparent flex-1 relative">
          <img
            src="icons/search.svg"
            alt="Search icon"
            className="absolute top-2 left-2"
          />
          <input
            type="text"
            name="location"
            id="location"
            className="bg-transparent border border-white w-full p-2 pl-10"
            placeholder="Search location"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </div>
        <button className="bg-[#3C47E9] py-2 px-4" type="submit">
          Search
        </button>
      </form>
      {error && <p className="text-red-500 mt-2">{error}</p>}
      <article className="pt-4">
        <ul className="mt-4 flex flex-col gap-4">
          {locations.map((locationObj, index) => (
            <li
              key={index}
              className="flex items-center justify-between py-4 border border-transparent hover:border-[#616475] pl-4 cursor-pointer"
              onClick={() => {
                setLocation(locationObj.location);
                setIsClose(false);
              }}
            >
              <span>{locationObj.location}</span>
              <button>
                <img src="icons/next.svg" alt="Arrow right icon" />
              </button>
            </li>
          ))}
        </ul>
      </article>
    </section>
  );
};

export default SearchBar;
