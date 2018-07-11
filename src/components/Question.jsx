import React, { Component } from 'react';
import Ionicon from 'react-ionicons';
import Logo from './logo';

class Question extends Component {
    state = {
        count: 0, // array visible
        truths: 0, // truths answers
        show: false, // answers visible
        minutes: 7, 
        seconds: 30
    }

    componentWillMount() {
        setTimeout(this.handlerTimer, 100)
    }

    handlerClick = answer => {
        let sayGood = () => alert('Good')
        let sayNoGood = () =>  alert('No good!')
        if (answer.isTrue) {
            this.setState({ truths: this.state.truths + 1 });
            setTimeout(sayGood, 200)
        } else {
            setTimeout(sayNoGood, 200)
        } 
        setTimeout(() =>  this.setState({ count: this.state.count + 1 }), 300)
    }

    handlerTimer = () => {
        const decrementSeconds = setInterval(() => {
            if (this.state.seconds === 0) {
                this.setState((state, props) => {
                    return {
                        seconds: state.seconds = 60,
                        minutes: state.minutes - 1
                    }
                })
            } 
            this.setState({ seconds: this.state.seconds - 1 })
            if (this.state.minutes === 0 && this.state.seconds === 0) {
                setTimeout(() => {
                    alert(`Time is over! Correct answers ${this.state.truths} from ${this.props.issues.length} questions`);
                    clearInterval(decrementSeconds); // stop the timer
                    this.setState({ count: 15 }) // array visibility
                }, 500)
            }
        }, 1000)
    }

    switchOnAnswers = () => this.setState({ show: !this.state.show })
 
    render() {
        const length = <h1 style={{ margin: 0 }}>{this.state.count + 1}/{this.props.issues.length}</h1>

        const Timeout = () => <p>
            {this.state.minutes < 10 ? 0 : undefined}{this.state.minutes}:
            {this.state.seconds < 10 ? 0 : undefined}{this.state.seconds}
        </p>

        const ShowAnswers = () => {
            return (
                <div className="show-answers">
                    {this.props.issues.map((item, index) => {
                        return (
                            <ul key={index}>
                                <li><h3>{item.title}</h3></li>
                                <li style={{listStyle: 'none'}}>
                                    {item.answers.map((answer, index) => 
                                        <p key={index}>
                                            {`${answer.answer} `}
                                            {answer.isTrue === true ? 
                                                <Ionicon icon="md-checkmark" fontSize="25px" color="green"/> : 
                                                <Ionicon icon="md-close" fontSize="25px" color="red"/>
                                            }
                                        </p>
                                    )}
                                </li>
                            </ul>
                        )
                    })}
                </div>
            )
        }

        const ViewShowAnswers = this.state.show && <ShowAnswers/>

        const Issues = () => {
            if(this.state.count - 1 === this.props.issues.length - 1) {
                return (
                    <div className="answers">
                        <h1>{this.state.truths}/{this.props.issues.length}</h1>
                        <button 
                            onClick={() => this.switchOnAnswers()}>
                            <h3>{this.state.show === false ? 'Show answers' : 'Hide answers'}</h3>
                        </button>
                        {ViewShowAnswers}
                    </div>
                )
            } else {
                return (
                    <div className="quiz">
                        <Logo/>
                        {length}
                        <Timeout/>
                        <div className="quiz-wrapp">  
                            {this.props.issues.map((item, index) => 
                                <ul key={index}>
                                    <li><h3>{item.title}</h3></li>
                                    <li>
                                        {item.answers.map((answer, answIndex) => 
                                            <div key={answIndex}>
                                                <div>
                                                    <label>
                                                        <input className="radio" type="radio" name="radio-test"/>
                                                        <div style={{display: 'flex', alignItems: 'center'}}>
                                                            <span onClick={() => this.handlerClick(answer)} className="radio-custom"></span>
                                                            <span className="label">{answer.answer}</span>
                                                        </div>
                                                    </label>
                                                </div>
                                                <br/>
                                            </div>
                                        )}
                                    </li>
                                </ul>
                            )[`${this.state.count}`]} <br/>
                        </div>
                    </div>
                )
            }
        }

        return (   
            <Issues/>
        )
    }
}

export default Question;