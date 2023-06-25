function App() {
  enum Country {
  Brazil = "Brazil",
  Canada = "Canada",
  Indonesia = "Indonesia"
}
  const name:string ="rangga";
  const email:string = "muhammadrangga056@gmail.com"
  const age:number = 19;
  const friends:string[] = ["jake","paul","john"]
  return (
    <div className="App">
      <Person //using component props
        name={name}
        email={email}
        age={age}
        friends={friends}
        country= {Country.Indonesia}//using the Country enum in the Component props
      />
    </div>
  );
}
