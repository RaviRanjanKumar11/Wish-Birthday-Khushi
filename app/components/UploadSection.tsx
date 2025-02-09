"use client";

interface Props {
  setImage: (img: string | null) => void;
  setMusic: (music: string | null) => void;
}

const UploadSection: React.FC<Props> = ({ setImage, setMusic }) => {
  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => setImage(e.target?.result as string);
      reader.readAsDataURL(event.target.files[0]);
    }
  };

  const handleMusicUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const url = URL.createObjectURL(event.target.files[0]);
      setMusic(url);
    }
  };

  return (  
    <div className="flex items-center gap-2 mt-2">
      <label className="cursor-pointer bg-white text-black px-1 py-0 rounded-lg">
        📸 Image
        <input type="file" accept="image/*" className="hidden" onChange={handleImageUpload} />
      </label>

      <label className="cursor-pointer bg-white text-black px-1 py-0 rounded-lg">
        🎵 Music
        <input type="file" accept="audio/*" className="hidden" onChange={handleMusicUpload} />
      </label>
    </div>
  );
};

export default UploadSection;
