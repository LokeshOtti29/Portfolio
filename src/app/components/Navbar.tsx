const Navbar = () => {
  return (
    <>
      <div className="flex flex-row justify-between items-center p-4">
        <div>
          <span className="font-bold">@L.K-O.t</span>
        </div>
        <div className="flex gap-6">
          <span>Home</span>
          <span>About</span>
          <span>Contact</span>
        </div>
      </div>
      <div className="h-[1px] bg-gray-200 w-full"></div>
    </>
  );
}

export default Navbar
