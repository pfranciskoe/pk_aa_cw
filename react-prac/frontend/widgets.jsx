import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './clock';
import Tabs from './tabs'
import Autocomplete from './autocomplete'
import Translator from './translator'
const panes = [
    { title: 'one', content: 'I am the first' },
    { title: 'two', content: 'Second pane here' },
    { title: 'three', content: 'Third pane here' }
];

const names = [
  "Anderson", "Ashwoon", "Aikin", "Bateman", "Bongard", "Bowers", "Boyd", 
  "Cannon", "Cast", "Deitz", "Dewalt", "Ebner", "Frick", "Hancock", "Haworth", 
  "Hesch", "Hoffman", "Kassing", "Knutson", "Lawless", "Lawicki", "Mccord", 
  "McCormack", "Miller", "Myers", "Nugent", "Ortiz", "Orwig", "Ory", "Paiser", 
  "Pak", "Pettigrew", "Quinn", "Quizoz", "Ramachandran", "Resnick", "Sagar", 
  "Schickowski", "Schiebel", "Sellon", "Severson", "Shaffer", "Solberg", 
  "Soloman", "Sonderling", "Soukup", "Soulis", "Stahl", "Sweeney", "Tandy", 
  "Trebil", "Trusela", "Trussel", "Turco", "Uddin", "Uflan", "Ulrich", 
  "Upson", "Vader", "Vail", "Valente", "Van Zandt", "Vanderpoel", "Ventotla", 
  "Vogal", "Wagle", "Wagner", "Wakefield", "Weinstein", "Weiss", "Woo", "Yang", 
  "Yates", "Yocum", "Zeaser", "Zeller", "Ziegler", "Bauer", "Baxster", "Casal", 
  "Cataldi", "Caswell", "Celedon", "Chambers", "Chapman", "Christensen", 
  "Darnell", "Davidson", "Davis", "DeLorenzo", "Dinkins", "Doran", "Dugelman", 
  "Dugan", "Duffman", "Eastman", "Ferro", "Ferry", "Fletcher", "Fietzer", 
  "Hylan", "Hydinger", "Illingsworth", "Ingram", "Irwin", "Jagtap", "Jenson", 
  "Johnson", "Johnsen", "Jones", "Jurgenson", "Kalleg", "Kaskel", "Keller", 
  "Leisinger", "LePage", "Lewis", "Linde", "Lulloff", "Maki", "Martin", 
  "McGinnis", "Mills", "Moody", "Moore", "Napier", "Nelson", "Norquist", 
  "Nuttle", "Olson", "Ostrander", "Reamer", "Reardon", "Reyes", "Rice", 
  "Ripka", "Roberts", "Rogers", "Root", "Sandstrom", "Sawyer", "Schlicht", 
  "Schmitt", "Schwager", "Schutz", "Schuster", "Tapia", "Thompson", 
  "Tiernan", "Tisler"
];
const EnglishToSpanishDictionary = {
  ball :'pelota',
  house : 'casa',
  dog : 'perro',
  dogs : 'perros',
  milk : 'leche',
  orange : 'naranja'
}
function Root() {
  return(
    <div>
        <Clock />
        <Tabs panes={panes}/>
        <Autocomplete names={names}/>
        <Translator dict={EnglishToSpanishDictionary}/>
    </div>
  );
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Root/>, document.getElementById('root'));
});