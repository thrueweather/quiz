import React, { Component } from 'react';

import Question from './Question'

export default class Issues extends Component {
    state = {
        issues: [
            {
                id: 1,
                title: 'The first law of thermodynamics say...',
                answers: [
                    {isFalse: false, answer: 'Energy is an energy that makes light and can not extinguish it'},
                    {isFalse: false, answer: 'The energy of the molecules is in the range from high, necessary for movement'},
                    {isTrue: true, answer: 'Energy cannot be created or destroyed'},
                    {isFalse: false, answer: 'None of the above'}
                ]
            },
            {
                id: 2,
                title: 'Author of the formula "E = mc2" ?',
                answers: [
                    {isFalse: false, answer: 'Isaac Newton'},
                    {isTrue: true, answer: 'Albert Einstein'},
                    {isFalse: false, answer: 'Nikola Tesla'},
                    {isFalse: false, answer: 'Wilhelm Röntgen'}
                ]
            },
            {
                id: 3,
                title: 'Who created the theory of the electromagnetic field ?',
                answers: [
                    {isTrue: true, answer: 'James Maxwell'},
                    {isFalse: false, answer: 'Max Planck'},
                    {isFalse: false, answer: 'Stephen Hawking'},
                    {isFalse: false, answer: 'Paul Dirac'}
                ]
            },
            {
                id: 4,
                title: 'Wormhole in the Universe i`ts ?',
                answers: [
                    {isFalse: false, answer: 'Wormhole is the place where worms live'},
                    {isFalse: false, answer: 'Distorted space'},
                    {isTrue: true, answer: 'Space-time tunnels that allows you to move an object from point A to point B in the universe'},
                    {isFalse: false, answer: 'Tunnel with two ends'}
                ]
            },
            {
                id: 5,
                title: 'The largest planet in the solar system ?',
                answers: [
                    {isFalse: false, answer: 'Earth'},
                    {isFalse: false, answer: 'Saturn'},
                    {isTrue: true, answer: 'Jupiter'},
                    {isFalse: false, answer: 'Europe'}
                ]
            },
            {
                id: 6,
                title: 'At the of the study Stephen Hawking was engaged ...',
                answers: [
                    {isTrue: true, answer: 'Black holes'},
                    {isFalse: false, answer: 'Research of gravity'},
                    {isFalse: false, answer: 'Magnetic waves'},
                    {isFalse: false, answer: 'Quantum mechanics'}
                ]
            },
            {
                id: 7,
                title: 'How many satellites does Jupiter have ?',
                answers: [
                    {isFalse: false, answer: '1'},
                    {isFalse: false, answer: '3'},
                    {isFalse: false, answer: '2'},
                    {isTrue: true, answer: '4'}
                ]
            },
            {
                id: 8,
                title: 'What causes craters on the Moon ?',
                answers: [
                    {isTrue: true, answer: 'Meteorites'},
                    {isFalse: false, answer: 'Asteroid'},
                    {isFalse: false, answer: 'Movement of tectonic plates'},
                    {isFalse: false, answer: 'None of the above'}
                ]
            },
            {
                id: 9,
                title: 'What is the name of the planet closest to the Sun ?',
                answers: [
                    {isFalse: false, answer: 'Earth'},
                    {isFalse: false, answer: 'Venus'},
                    {isTrue: true, answer: 'Mercury'},
                    {isFalse: false, answer: 'Mars'}
                ]
            },
            {
                id: 10,
                title: 'The nearest star to the sun ?',
                answers: [
                    {isFalse: false, answer: 'Alpha Centauri'},
                    {isTrue: true, answer: 'Proxima Centauri'},
                    {isFalse: false, answer: 'Barnardа'},
                    {isFalse: false, answer: 'Sirius'}
                ]
            },
            {
                id: 11,
                title: 'Speed of light',
                answers: [
                    {isFalse: false, answer: '302 156 234'},
                    {isFalse: false, answer: '311 482 058'},
                    {isFalse: false, answer: '260 500 092'},
                    {isTrue: true, answer: '299 792 458'}
                ]
            },
            {
                id: 12,
                title: 'Planets of the Solar System, which do not have satellites ?',
                answers: [
                    {isFalse: false, answer: 'Uranus and Pluto'},
                    {isTrue: true, answer: 'Mercury and Venus'},
                    {isFalse: false, answer: 'Venus and Earth'},
                    {isFalse: false, answer: 'Mars and Jupiter'}
                ]
            },
            {
                id: 13,
                title: 'How long does the Earth rotate around the axis ?',
                answers: [
                    {isFalse: false, answer: '24'},
                    {isFalse: false, answer: '23h 59min 59s'},
                    {isTrue: true, answer: '23h 56min 4s'},
                    {isFalse: false, answer: '23h 52min 30s'}
                ]
            },
            {
                id: 14,
                title: 'The closest star to the Sun is Proxima Centauri. In which direction should I look at the night sky to see it ?',
                answers: [
                    {isFalse: false, answer: 'The Big Dipper'},
                    {isFalse: false, answer: 'Sirius'},
                    {isFalse: false, answer: 'Kashiopei'},
                    {isTrue: true, answer: 'It cannot be seen at all'}
                ]
            },
            {
                id: 15,
                title: 'The colors of the stars correspond to their surface, which stars are the hottest ?',
                answers: [
                    {isFalse: false, answer: 'Red'},
                    {isFalse: false, answer: 'Yellow'},
                    {isTrue: true, answer: 'blue'},
                    {isFalse: false, answer: 'White-blue'}
                ]
            }
        ]
    }

    render() {
        return (
            <div className="App">
                <Question issues={this.state.issues}/>
            </div>
        )
    }
}