import './App.css';
import heroesList from './heroesList.js'
import Title from './components/Title';
import Card from './components/Card';

function App() {

  document.title = "Рейтинг супергероев"
  return (
<>
<Title />
<div className="list-block">
    {heroesList.map((superhero, index) => (
      <Card 
      name={superhero.name}
      universe={superhero.universe}
      alterego={superhero.alterego}
      occupation={superhero.occupation}
      friends={superhero.friends}
      superpowers={superhero.superpowers} 
      url={superhero.url}
      info={superhero.info}
      />
    ))}
  </div>
  </>  
  );
}

export default App;
