
import { LuBell } from "react-icons/lu";

const NotificationDropdown = () => {
  /**
   * Get time since
   */
 

  return (
    <div className="hs-dropdown relative inline-flex [--placement:bottom-right]">
      <button
        id="hs-dropdown-with-header"
        type="button"
        className="hs-dropdown-toggle inline-flex h-10 w-10 flex-shrink-0 items-center justify-center gap-2 rounded-full bg-default-100 align-middle text-xs font-medium text-default-700 transition-all hover:text-primary"
      >
        <LuBell size={24} />
        <span className="absolute end-1 top-0 h-4 w-4 animate-ping rounded-full bg-primary-500" />
        <span className="absolute end-1 top-0 h-4 w-4 rounded-full bg-primary-500 text-xs font-medium text-white">
          2
        </span>
      </button>
    
    </div>
  );
};

export default NotificationDropdown;
