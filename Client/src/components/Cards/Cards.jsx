import Card from '../Card/Card';
import './Cards.css'
export default function Cards({characters,onClose}) {
   return (
      <div className='container-cards'>
         
         {characters.map(personaje => {
            return <Card key={personaje.id} 
            id={personaje.id} 
            name={personaje.name} 
            status={personaje.status}
            species={personaje.species} 
            gender={personaje.gender} 
            origin={personaje.origin.name} 
            image={personaje.image} 
            onClose={onClose}/>
         })}
      </div>);
}
