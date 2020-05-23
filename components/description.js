class Description extends React.Component {
  render() {
    return(
      <>
      <div className="container">
        <h1>How to use it</h1>
        <ol>
          <li>Go to achievements window</li>
          <li>Select achievements tagged with "Hidden Mod Key"<br/><img src="/achievements.png" width='90%' /></li>
          <li>Type down gem grades for each unlocked achievement in hexadecimal notation:<img width='90%' src="/buttons.png" /></li>
          <li>Paste them into <a href="#achievement_codes">Achievement codes</a> field above.</li>
          If it's possible to generate secret codes from these achievements, they will appear below.
        </ol>
      </div>
      </>
    )
  }
}

export default Description
