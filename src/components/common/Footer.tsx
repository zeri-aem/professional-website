export default function Footer() {
  const date = new Date().getFullYear();

  return (
    <footer className="flex flex-wrap justify-center items-center p-5 bg-[#f1faee] dark:bg-[#212121] dark:text-[#f1faee]">
      <span>
        &copy; {date} Zeri Aaron Malacas
        <span className="hidden sm:inline"> |</span>
      </span>

      <span className="mx-1">All Rights Reserved</span>
    </footer>
  );
}
