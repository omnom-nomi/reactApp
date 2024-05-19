/* 
  props =  read-only properties that are shared between components
  A parent component can send data to a child component
  <Component key = value />

*/

import Student from "./Student";

function App() {
  return (
    <>
      <Student name="John" age="20" isStudent={true} />
      <Student name="Jane" age="22" isStudent={false} />
      <Student name="Bob" age="25" isStudent={true} />
      
    </>
  );

}

export default App
