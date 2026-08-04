export default function Footer() {
  const date = new Date().getFullYear();

  return (
    <footer className="flex justify-center items-center p-5 h-16 bg-[#f1faee] border border-gray-200">
      <span>&copy; {date} Zeri Aaron Malacas | All Rights Reserved</span>
    </footer>
  );
}
