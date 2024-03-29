
import { LuGlobe } from "react-icons/lu";


const LanguageDropdown = () => {
  return (
    <div className="hs-dropdown relative inline-flex [--placement:bottom-right]">
      <button
        id="hs-dropdown-with-header"
        type="button"
        className="hs-dropdown-toggle inline-flex h-10 w-10 flex-shrink-0 items-center justify-center gap-2 rounded-full bg-default-100 align-middle text-xs font-medium text-default-700 transition-all hover:text-primary"
      >
        <LuGlobe size={24} />
      </button>
    
    </div>
  );
};

export default LanguageDropdown;
