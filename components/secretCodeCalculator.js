import calculate from './calculate'
import styles from './calculator.module.css'

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
      <div className="p-4 m-2 shadow rounded bg-white container">
        <h1>Gemcraft Frostborn Wrath secret code calculator</h1>
        <div className="bg-gray-300 container p-4 rounded">
          <p>
            <label htmlFor="achievement_codes">Achievement codes</label><br/>
            <textarea id="achievement_codes"
                      placeholder='your achievement codes'
                      rows='10'
                      className='bg-white'
                      onChange= { e => this.setState({secretCodes: calculate(e.target.value.split("\n"))}) } />
          </p>

          <h3> Your secret codes:</h3>
          <div id="secret_codes" className="p4 shadow rounded bg-gray-500 h-100">
            {
              <ul>
                {this.state.secretCodes.map((number) =>  <li key={number}>{number}</li>)}
              </ul>
            }



          </div>
        </div>
      </div>
    )
  }
}

export default SecretCodeCalculator
