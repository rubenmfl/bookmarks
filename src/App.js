import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
        <h1>Bookmarks</h1>
        <ul>
            <li>Best Anime Ever
                <ul>
                    <li><a href="https://en.wikipedia.org/wiki/Fullmetal_Alchemist:_Brotherhood">Fullmetal Alchemist</a></li>
                    <li><a href="https://en.wikipedia.org/wiki/Attack_on_Titan">Attack on Titan</a></li>
                    <li><a href="https://en.wikipedia.org/wiki/Yakitate!!_Japan">Yakitate Ja-PAN</a></li>
                </ul>
            </li>
        </ul>
    </div>
  );
}

export default App;
