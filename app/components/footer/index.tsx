import { IoMdHeart } from 'react-icons/io';
export const Footer = () => {
  return (
    <footer className="h-14 w-full flex items-cente justify-center bg-gray-950r">
      <span className="flex items-center gap-1.5 text-xs sm:text-sm font-mono text-gray-400">
        Made with
        <IoMdHeart size={13} className="text-emerald-500" />
        by
        <strong className="font-medium">Jander Liborio</strong>
      </span>
    </footer>
  );
};
