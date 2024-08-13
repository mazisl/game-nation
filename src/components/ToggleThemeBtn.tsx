import { Switch } from "./ui/switch"
import { Label } from "./ui/label"
import { useEffect, useState } from "react";

const ToggleThemeBtn = () => {

  // return (
  //   <div className="flex items-center space-x-2">
  //     <Switch id="dark-mode" />
  //     <Label htmlFor="dark-mode">Dark Mode</Label>
  //   </div>
  // )

  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Retrieve stored theme preference from localStorage
    const savedMode = localStorage.getItem('darkMode');
    // Return true if savedMode is 'true', otherwise false
    return savedMode === 'true';
  });

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
    // Save the theme preference to localStorage
    localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  return (
    <div className="flex items-center space-x-2">
      <Switch
        id="dark-mode"
        checked={isDarkMode}
        onCheckedChange={(checked) => setIsDarkMode(checked)}
      />
      <Label htmlFor="dark-mode" className="whitespace-nowrap">Dark Mode</Label>
    </div>
  );
}

export default ToggleThemeBtn;