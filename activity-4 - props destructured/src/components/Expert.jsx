
/* TODO : this compoent shall receive an expert as parameter (you must use the destructuring syntax)*/
export default function Expert({name, des, mail}) {
  return (
    <div className="card">
      <h2>{name}</h2>
      <p>{des}</p>
      <a>Email {mail}</a>
    </div>
  );
}
