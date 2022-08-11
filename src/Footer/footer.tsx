import { Items } from "./inforfooter";
const Foo = () => {
  return (
    <footer className="flex text-2xl bg-[#66696b] text-zinc-50 h-80">
      {Items.map((value, key) => {
        return (
          <div className="flex-col px-24 pt-10 font-medium">
            <div className="underline hover:underline-offset-8">
              <i key={key}>{value.id}</i>
            </div>
            <ul className="pt-5 ">
              <li className="hover:underline hover:text-black">
                <a href="a">{value.name} </a>
              </li>
              <li className="hover:underline hover:text-black">
                <a href="a">{value.name1} </a>
              </li>
              <li className="hover:underline hover:text-black">
                <a href="a">{value.name2}</a>
              </li>
              <li className="hover:underline hover:text-black">
                <a href="a">{value.name3}</a>
              </li>
            </ul>
          </div>
        );
      })}
    </footer>
  );
};

export default Foo;
