import  avatar1Img  from "../../assets/images/avatar1.png";

const ProfileDropdown = () => {
  return (
    <div className="hs-dropdown relative inline-flex ">
      <button
        id="hs-dropdown-with-header"
        type="button"
        className="hs-dropdown-toggle inline-flex flex-shrink-0 items-center justify-center gap-2 rounded-full align-middle text-xs font-medium text-default-700 transition-all"
      >
        <img
          className="inline-block h-10 w-10 rounded-full"
          alt="avatar"
          src={avatar1Img}
        />
        <div className="hidden text-start lg:block">
          <p className="text-sm font-medium text-default-700">Kaiya Botosh</p>
          <p className="mt-1 text-xs text-default-500">Admin</p>
        </div>
      </button>
   </div>
  );
};

export default ProfileDropdown;
