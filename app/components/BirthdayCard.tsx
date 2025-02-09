import Image from "next/image";

type Props = {
  name: string;
  message: string;
  image: string | null;
  theme?: "pink" | "blue" | "green" | "default";
};

const themeStyles = {
  pink: "bg-pink-400 text-white",
  blue: "bg-blue-400 text-white",
  green: "bg-green-400 text-white",
  default: "bg-white text-black",
};

const BirthdayCard: React.FC<Props> = ({ name, message, image, theme = "default" }) => {
  return (
    <div className={`p-4 rounded-lg text-center shadow-lg mt-4 ${themeStyles[theme]}`}>
      {image && (
        <div className="relative w-24 h-24 mx-auto mb-4">
          <Image 
            src={image} 
            alt="Uploaded" 
            layout="fill" 
            objectFit="cover" 
            className="rounded-full"
          />
        </div>
      )}
      <h2 className="text-3xl font-bold">🎉 Happy Birthday, {name}! 🎂</h2>
      <p className="mt-2 text-lg">{message || "Wishing you a fantastic day filled with joy and happiness! 🎁✨"}</p>
    </div>
  );
};

export default BirthdayCard;
