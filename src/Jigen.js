// Modules
import React, { Component } from "react"
import styled from 'styled-components'
//Components
import Input from './components/Input'
import RedButton from './components/RedButton'
// Other
import FrequencyList from './FrequencyList'
import data from "./lib/data.json"
import FrequencyListStyled from './styles/FrequencyListStyled'

const SortButtons = styled.div`
    display: flex;
    justify-content: center;
`;

const example = `Enter text here and get a visual frequency display from the kanji grid below.

私わたくしはその人を常に先生と呼んでいた。だからここでもただ先生と書くだけで本名は打ち明けない。これは世間を憚はばかる遠慮というよりも、その方が私にとって自然だからである。私はその人の記憶を呼び起すごとに、すぐ「先生」といいたくなる。筆を執とっても心持は同じ事である。よそよそしい頭文字かしらもじなどはとても使う気にならない。
`;


const Stats = (props) => (
    <div style={{display: "flex", justifyContent: "space-evenly"}}>
        <div>
            <h2>Key:</h2>
            <FrequencyListStyled>
                <span className="count-0">0</span>
                <span className="count-1">1</span>
                <span className="count-2">2</span>
                <span className="count-3">3</span>
                <span className="count-4">4</span>
                <span className="count-5">5+</span>
            </FrequencyListStyled>
        </div>
        <div>
            <h2>Stats:</h2>
            <p>The text uses {props.used} of the {props.length} <i>joyo</i> kanji ({
                Math.round((props.used / props.length * 100) * 100) / 100}%).</p>
        </div>


    </div>
)

export default class Jigen extends Component {
    constructor(props) {
        super(props)
        this.handleTextChange = this.handleTextChange.bind(this)
        this.handleSort = this.handleSort.bind(this)
        this.countUsed = this.countUsed.bind(this)
        this.state = {
            kanji: data,
            text: example,
            used: this.countUsed(data, example),
            sort: "id",
            length: Object.keys(data).length
        }
    }

    countUsed(kanji, text) {
        kanji = kanji.map(item => item.Kanji)
        return kanji.reduce((accumulator, currentValue) => accumulator + (text.includes(currentValue) ? 1 : 0)
            , 0)
    }

    handleTextChange(text) {
        let kanji = this.state.kanji
        let used = this.countUsed(kanji, text)
        this.setState({ text, used })


    }

    handleSort(value) {
        this.setState({
            sort: value,
            kanji: this.state.kanji.sort(
                (a, b) => a[value] - b[value] || a.Strokes - b.Strokes
            )
        })
    }


    render() {
        const kanji = this.state.kanji;
        const text = this.state.text;
        return (
            <div>
                <Input text={text} onTextChange={this.handleTextChange} />
                <h2>Sort by:</h2>
                <SortButtons>
                    <RedButton value="Strokes" onClick={this.handleSort} />
                    <RedButton value="JLPT-test" onClick={this.handleSort} />
                    <RedButton value="Grade" onClick={this.handleSort} />
                    <RedButton value="id" onClick={this.handleSort} />
                </SortButtons>
                <FrequencyList text={text} input={kanji} />
                <Stats used={this.state.used} length={this.state.length} />
            </div>
        )
    }
}