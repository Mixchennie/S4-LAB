export function CourseGoal(props) {
  const {title, description} = props;
  return (
    <li>
      <h2>{title}</h2>
      <p>{description}</p>
    </li>
  );
}

function App() {
  return (
    <div id="app" data-testid="app">
      <h1>Time to Practice</h1>
      <p>One course, many goals! 🎯</p>
      <ul>{CourseGoal({title: 'Time to practice', description: 'Time to practice'})}</ul>
      <ul>{CourseGoal({title: 'Time to practice', description: 'Time to practice'})}</ul>

    </div>
  );
}

export default App;