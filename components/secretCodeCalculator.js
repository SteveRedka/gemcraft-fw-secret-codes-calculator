import calculate from './calculate'

// export default function secretCodeCalculator() {
// }


class SecretCodeCalculator extends React.Component {
  constructor(){
    super()
    this.state = {
      secretCodes: []
    }
  }
  render() {
    return(
      <>
      <p>
        <label htmlFor="achievement_codes">Achievement codes</label><br/>
        <textarea id="achievement_codes"
                  placeholder='your achievement codes'
                  rows='10'
                  onChange= { e => this.setState({secretCodes: calculate(e.target.value.split("\n"))}) } />
      </p>

      <h3> Your secret codes:</h3>
      <div id="secret_codes">
        {
          <ul>
            {this.state.secretCodes.map((number) =>  <li key={number}>{number}</li>)}
          </ul>
        }



      </div>
      </>
    )
  }
}

export default SecretCodeCalculator
