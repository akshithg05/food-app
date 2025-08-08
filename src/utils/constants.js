export const CDN_URL = "https://media-assets.swiggy.com/swiggy/image/upload/";

export const LOGO_URL =
  "https://png.pngtree.com/png-clipart/20220628/original/pngtree-food-logo-png-image_8239850.png";

export const SWIGGY_API =
  "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.97530&lng=77.59100&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";

export const PROXY_URL = "https://api.codetabs.com/v1/proxy?quest=";

export const getMenuUrl = (resId) =>
  `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.97530&lng=77.59100&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`;
