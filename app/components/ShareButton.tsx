"use client";

const ShareButton = () => {
  const shareLink = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url);
    alert("Link copied! Share it with your friends. 🎉");
  };

  return (
    <button
      onClick={shareLink}
      className="mt-4 bg-yellow-500 px-4 py-2 rounded-lg text-black font-bold"
    >
      📤 Share Wish
    </button>
  );
};

export default ShareButton;
