class Description extends React.Component {
  render() {
    return(
      <>
      <div className="p-4 shadow rounded bg-white container">
        <h1>How to use it</h1>
        <ol>
          <li>Go to achievements window</li>
          <li>Select achievements tagged with "Hidden Mod Key"<br/><img src="/achievements.png" width='100%' /></li>
          <li>Type down gem grades for each unlocked achievement in hexadecimal notation:<img width='100%' src="/buttons.png" /></li>
          <li>Paste them into <a href="#achievement_codes">Achievement codes</a> field above, one code per line.</li>
        </ol>
        If it's possible to generate secret codes from these achievements, they will appear below.
        <br/><img src='/example.png' width='300px' /><br/>
        Then it will be possible to type these secret code using buttons on bottom edge of the map.
      </div>
      </>
    )
  }
}

export default Description
