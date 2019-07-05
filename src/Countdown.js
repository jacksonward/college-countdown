import React, { Component } from 'react'

// Set the date we're counting down to
let countDownDate = new Date("Aug 17, 2019 00:00:00").getTime();

export default class Countdown extends Component {

    constructor() {
        super()
        this.state = {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0
        }
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            let now = new Date().getTime()
            // Find the distance between now and the count down date
            let distance = countDownDate - now
            this.setState({
            // Time calculations for days, hours, minutes and seconds
            days: Math.floor(distance / (1000 * 60 * 60 * 24)),
            hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
            minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
            seconds: Math.floor((distance % (1000 * 60)) / 1000),
        })}, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    render() {
        return (
            <div>
                <p>{this.state.days}</p>
                <p>{this.state.hours}</p>
                <p>{this.state.minutes}</p>
                <p>{this.state.seconds}</p>
            </div>
        )
    }
}
