import React, { Component } from "react";
import FrequencyListStyled from "./styles/FrequencyListStyled";
import countInstances from "./lib/count.js"


export default class FrequencyList extends Component {
    render() {
        const input = this.props.input;
        const text = this.props.text;
        return (
            <FrequencyListStyled>
                {input.map(entry => (
                    <span
                        className={`count-${countInstances(entry.Kanji, text)}`}
                        key={entry.id}
                    >
                        {entry.Kanji}
                    </span>
                ))}
            </FrequencyListStyled>
        )
    }
}
