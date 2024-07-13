function Items({ children, text }) {
  return (
    <li className="group w-full">
      <a
        href=""
        className="flex w-full h-8 items-center gap-6 md:justify-center md:gap-0 lg:gap-6 lg:justify-start"
      >
        {children}
        <p className="grid grid-flow-row overflow-hidden group-hover:text-coral duration-80 md:column lg:grid-cols-1">
          <span className="overflow-hidden">{text}</span>
        </p>
      </a>
    </li>
  );
}

export default Items;
// column
