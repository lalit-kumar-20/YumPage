import {
  LuBarChart2,
  LuBookmark,
  LuBox,
  LuCpu,
  LuFile,
  LuGift,
  LuGrid,
  LuHotel,
  LuInfo,
  LuLayoutGrid,
  LuListOrdered,
  LuLock,
  LuMap,
  LuSettings2,
  LuSoup,
  LuUserCog,
  LuUsers,
  LuWallet,
} from "react-icons/lu";



export const ADMIN_VERTICAL_MENU_ITEMS = [
  {
    key: "dashboard-page",
    label: "Dashboard",
    icon: LuLayoutGrid,
    url: "/admin/dashboard",
    isTitle: true,
  },
  {
    key: "manage-page",
    label: "Manage",
    icon: LuSettings2,
    url: "/admin/manage",
    isTitle: true,
  },
  {
    key: "orders",
    label: "Orders",
    icon: LuListOrdered,
    isTitle: true,
  },
  {
    key: "customers",
    label: "Customers",
    icon: LuUsers,
    isTitle: true,
  },
  {
    key: "restaurants",
    label: "Restaurants",
    icon: LuHotel,
    isTitle: true,    
  },
  {
    key: "dishes",
    label: "Dishes",
    icon: LuSoup,
    isTitle: true,
  },
  {
    key: "sellers",
    label: "Sellers",
    icon: LuUserCog,
    isTitle: true,
  },
  {
    key: "wallet-page",
    label: "Wallet",
    icon: LuWallet,
    url: "/admin/wallet",
    isTitle: true,
  },
  {
    key: "extra-pages",
    label: "Extra Pages",
    icon: LuFile,
    isTitle: true,
  },
  {
    key: "auth-pages",
    label: "Authentication",
    icon: LuLock,
    isTitle: true,
  },
  {
    key: "error-pages",
    label: "Error Pages",
    icon: LuInfo,
    isTitle: true,
  },
  {
    key: "ui-elements",
    label: "UI Elements",
    icon: LuBox,
    url: "/admin/ui-elements",
    isTitle: true,
  },
  {
    key: "widget",
    label: "Widget",
    icon: LuGift,
    url: "/admin/widgets",
    isTitle: true,
  },
  {
    key: "icons",
    label: "Icons",
    icon: LuCpu,
    isTitle: true,
   
  },
  {
    key: "forms",
    label: "Forms",
    icon: LuBookmark,
    isTitle: true,
    children: [
      {
        key: "forms-basic-element",
        label: "Basic Elements",
        url: "/admin/forms/basic-elements",
        parentKey: "forms",
      },
      {
        key: "forms-advanced",
        label: "Advanced",
        url: "/admin/forms/advanced",
        parentKey: "forms",
      },
      {
        key: "forms-editor",
        label: "Editor",
        url: "/admin/forms/editor",
        parentKey: "forms",
      },
      {
        key: "forms-file-uploads",
        label: "File Uploads",
        url: "/admin/forms/file-uploads",
        parentKey: "forms",
      },
      {
        key: "forms-validation",
        label: "Validation",
        url: "/admin/forms/validation",
        parentKey: "forms",
      },
    ],
   
  },
  {
    key: "apex-charts",
    label: "Apex Charts",
    isTitle: false,
    icon: LuBarChart2,
   
  },
  {
    key: "tables",
    label: "Tables",
    isTitle: false,
    icon: LuGrid,
  },
  {
    key: "maps",
    label: "Maps",
    isTitle: false,
    icon: LuMap,
  },
];


