import React, { Component } from 'react';
import Ionicon from 'react-ionicons';

import Logo from './logo';

class Question extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0, 
            truths: 0, 
            show: false, 
            minutes: 7, 
            seconds: 0
        }
    }

    componentWillMount() {
        setTimeout(this.timer, 100)
    }

    handlerClick = answer => {
        let sayGood = () => alert('Good');
        let sayNoGood = () =>  alert('No good!');
        if (answer.isTrue) {
            this.setState(state => ({ truths: state.truths + 1 }));
            setTimeout(sayGood, 200)
        } else {
            setTimeout(sayNoGood, 200)
        } 
        setTimeout(() =>  this.setState(state => ({ count: state.count + 1 })), 300)
    }

    handlerTimer = setInterval(() => {
        const ZERO = 0;
        const MINUTE = 60;
        const MINUTE_DECREMENT = 1;
        const SECONDS_DECREMENT = 1;
        const ARRAY_VISIBILITY = 15;

        if (this.state.seconds === ZERO) {
            this.setState(state => ({
                seconds: MINUTE,
                minutes: state.minutes - MINUTE_DECREMENT
            }))
        } 
        this.setState(state => ({ seconds: state.seconds - SECONDS_DECREMENT }))
        if (this.state.minutes === ZERO && this.state.seconds === ZERO) {
            setTimeout(() => {
                alert(`Time is over! Correct answers ${this.state.truths} from ${this.props.issues.length} questions`);
                clearInterval(this.handlerTimer); 
                this.setState({ count: ARRAY_VISIBILITY })
            }, 500)
        }
    }, 1000)

    switchOnAnswers = () => this.setState({ show: !this.state.show })
 
    render() {
        const length = <h1 style={{ margin: 0 }}>{this.state.count + 1}/{this.props.issues.length}</h1>

        const Timeout = () => (
            <p>
                {this.state.minutes < 10 ? 0 : undefined}{this.state.minutes}:
                {this.state.seconds < 10 ? 0 : undefined}{this.state.seconds}
            </p>
        )

        const ShowAnswers = () => {
            return (
                <div className="show-answers">
                    {this.props.issues.map((item, index) => 
                        <ul key={index}>
                            <li><h3>{item.title}</h3></li>
                            <li style={{listStyle: 'none'}}>
                                {item.answers.map((answer, index) => 
                                    <p key={index}>
                                        {`${answer.answer} `}
                                        {answer.isTrue ? 
                                            <Ionicon icon="md-checkmark" fontSize="25px" color="green"/> : 
                                            <Ionicon icon="md-close" fontSize="25px" color="red"/>
                                        }
                                    </p>
                                )}
                            </li>
                        </ul>
                    )}
                </div>
            )
        }

        const ViewShowAnswers = this.state.show && <ShowAnswers/>

        const correctAnswersAndTime = <h1>
                {this.state.truths}/{this.props.issues.length} behind {this.state.minutes}:{this.state.seconds.toFixed(0)}
        </h1>

        const Issues = () => {
            if(this.state.count - 1 === this.props.issues.length - 1) {
                clearInterval(this.handlerTimer);
                return (
                    <div className="answers">
                        {correctAnswersAndTime}
                        <button 
                            onClick={() => this.switchOnAnswers()}>
                            <h3>{!this.state.show ? 'Show answers' : 'Hide answers'}</h3>
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