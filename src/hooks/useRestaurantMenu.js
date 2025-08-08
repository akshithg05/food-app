import { PROXY_URL } from "../utils/constants";
import { useState, useEffect } from "react";
import { getMenuUrl } from "../utils/constants";

export default function useRestaurantMenu(resId) {
  const [data, setData] = useState({});
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    fetchMenu();
  }, [resId]);

  async function fetchMenu() {
    try {
      setLoading(true);
      const menu = await fetch(
        PROXY_URL + encodeURIComponent(getMenuUrl(resId))
      );

      const menuJson = await menu.json();
      setData(menuJson);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }

  const result = { isLoading, data };

  return result;
}
