function Items({ children, text }) {
  return (
    <li className="group w-full">
      <a href="" className="flex w-full h-8 items-center gap-6">
        {children}
        <p className="grid grid-flow-row overflow-hidden group-hover:text-coral duration-80">
          <span className="overflow-hidden">{text}</span>
        </p>
      </a>
    </li>
  );
}

export default Items;
// column
