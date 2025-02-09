type Props = {
  name: string;
  message: string;
  image: string | null;
  theme: "pink" | "blue" | "green" | "default";
};
  
  const themeStyles = {
    pink: "bg-pink-400 text-white",
    blue: "bg-blue-400 text-white",
    green: "bg-green-400 text-white",
    default: "bg-white text-black",
  };
  
  const BirthdayCard: React.FC<Props> = ({ name, image, theme }) => {
    return (
      <div className={`p-1 rounded-lg text-center shadow-lg mt-2 ${themeStyles[theme]}`}>
        {image && <img src={image} alt="Uploaded" className="w-20 h-32 rounded-full mx-auto mb-4" />}
        <h2 className="text-3xl font-bold">🎉 Happy Birthday, {name}! 🎂</h2>
        <p className="mt-2 text-lg">Wishing you a fantastic day filled with joy and happiness! 🎁✨</p>
      </div>
    );
  };
  
  export default BirthdayCard;
  