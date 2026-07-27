export default function Footer() {
  const date = new Date().getFullYear();

  return (
    <footer className="flex justify-center items-center p-5 bg-blue-400/30">
      <span>&copy; {date} Zeri Aaron Malacas | All Rights Reserved</span>
    </footer>
  );
}
