import React from 'react'
import Ionicon from 'react-ionicons';

const ShowAnswers = ({ issues }) => (
    <div className="show-answers">
        {issues.map((item, index) => 
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

export default ShowAnswers