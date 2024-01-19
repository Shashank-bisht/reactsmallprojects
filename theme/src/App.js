import React, { useState, useEffect } from 'react';
import data from './data';
import Article from './Article';

// this function will get the theme from local storage when the browser first loads
const getStorageTheme = () => {
  let theme = 'light-theme';
  if (localStorage.getItem('theme')) {
    theme = localStorage.getItem('theme');
  }
  return theme;
};

function App() {
  const [theme, setTheme] = useState(getStorageTheme());

  const toggleTheme = () => {
    if (theme === 'light-theme') {
      setTheme('dark-theme');
    } else {
      setTheme('light-theme');
    }
  };

  useEffect(() => {
    // this will set the theme in the local storage
    document.documentElement.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <main>
      <nav>
        <div className="nav-center">
          <h1>overreacted</h1>
          <button className="btn" onClick={toggleTheme}>
            toggle
          </button>
        </div>
      </nav>
      <section className="articles">
        {data.map((item) => { 
          // console.log(item);
          return <Article key={item.id} item={item} />;
        })}
      </section>
    </main>
  );
}

export default App;
