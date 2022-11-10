const Navigator = ({ text }: { text: string }) => {
  return (
    <li className="font-serif hover:-rotate-6 transition ease-linear">
      <a href="/" className="hover:text-black">
        {text}
      </a>
    </li>
  );
};
export default Navigator;
