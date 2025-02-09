"use client";

interface Props {
  setTheme: React.Dispatch<React.SetStateAction<"pink" | "blue" | "green" | "default">>;
}

const ThemeSelector: React.FC<Props> = ({ setTheme }) => {
  return (
    <div className="flex gap-1 mt-2">
      <button className="px-2 py-0 bg-pink-500 rounded-lg" onClick={() => setTheme("pink")}>
        🎀 Pink
      </button>
      <button className="px-2 py-0 bg-blue-500 rounded-lg" onClick={() => setTheme("blue")}>
        🌊 Blue
      </button>
      <button className="px-2 py-0 bg-green-500 rounded-lg" onClick={() => setTheme("green")}>
        🌿 Green
      </button>
    </div>
  );
};

export default ThemeSelector;
