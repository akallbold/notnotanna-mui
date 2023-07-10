import { useState } from 'react';

function useLanguage() {
  const [language, setLanguage] = useState<string>('en');
  return {language ,setLanguage}
}

export default useLanguage;