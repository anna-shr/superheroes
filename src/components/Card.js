
// import '../heroesList'

function Card(props) {
  return (
      <div className="list-block__card">
        <p className="card__name">Имя: {props.name}</p>
        <p className="card__universe">Вселенная: {props.universe}</p>
        <p className="card__alterego">Альтерэго: {props.alterego}</p>
        <p className="card__occupation">Род деятельности: {props.occupation}</p>
        <p className="card__friends">Друзья: {props.friends}</p>
        <p className="card__superpowers">Суперсилы: {props.superpowers}</p>
        <img className="card__img" src={props.url} alt=""/>
        <p className="card__info">{props.info}</p>
      </div>
  );
}

export default Card;
