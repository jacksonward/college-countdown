import React from 'react'
import './App.css'
// computed sass
import './styles.css'
import Countdown from './Countdown'

function App() {
  return (
    <div className="app is-family-primary columns is-centered v-centered">
        <div className="column is-5">
            <Countdown/>
            <div className="columns container is-centered">
                <p className="has-text-dark">Until Fay!</p>
            </div>
        </div>
    </div>
  );
}

export default App;
