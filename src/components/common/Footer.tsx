export default function Footer() {
  const date = new Date().getFullYear();

  return (
    <footer className="flex justify-center items-center p-5 bg-[#a8dadc]">
      <span>&copy; {date} Zeri Aaron Malacas | All Rights Reserved</span>
    </footer>
  );
}
