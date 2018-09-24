import React, { Component } from 'react';

import { 
    ZERO, 
    MINUTE, 
    MINUTE_DECREMENT, 
    SECONDS_DECREMENT, 
    ARRAY_VISIBILITY 
} from '../constants/types'

import ShowAnswers from './ShowAnswers'
import Length from './Length'

import Logo from './logo'

export default class Questions extends Component {
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
        const { show, truths, minutes, seconds, count } = this.state

        const ViewShowAnswers = show && <ShowAnswers issues={this.props.issues}/>

        const correctAnswersAndTime = 
            <h1>{truths}/{this.props.issues.length} behind {minutes}:{seconds.toFixed(0)}</h1>

        const Issues = () => {
            if(count - 1 === this.props.issues.length - 1) {
                clearInterval(this.handlerTimer);
                return (
                    <div className="answers">
                        {correctAnswersAndTime}
                        <button onClick={() => this.switchOnAnswers()}>
                            <h3>{!show ? 'Show answers' : 'Hide answers'}</h3>
                        </button>
                        {ViewShowAnswers}
                    </div>
                )
            } else {
                return (
                    <div className="quiz">
                        <Logo/>
                        <Length count={count} issues={this.props.issues}/>
                        <p>{minutes < 10 ? 0 : null}{minutes}:{seconds < 10 ? 0 : null}{seconds}</p>
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
                            )[`${count}`]} <br/>
                        </div>
                    </div>
                )
            }
        }

        return <Issues/>
    }
}