import React, { Component } from 'react'

// Set the date we're counting down to
let countDownDate = new Date("Aug 17, 2019 00:00:00").getTime();

export default class Countdown extends Component {

    constructor() {
        super()
        // init countdown
        this.state = {
            days: Math.floor((countDownDate - new Date().getTime()) / (1000 * 60 * 60 * 24)),
            hours: Math.floor((countDownDate - new Date().getTime()) % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)),
            minutes: Math.floor((countDownDate - new Date().getTime()) % (1000 * 60 * 60) / (1000 * 60)),
            seconds: Math.floor((countDownDate - new Date().getTime()) % (1000 * 60) / 1000)
        }
    }

    componentDidMount() {
        // update countdown every second
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
            <div className="container columns is-centered is-size-3 has-text-centered">
                <span className='column has-text-primary'>
                    {this.state.days} {(this.state.days === 1) ? "day" : "days"}
                </span>
                <span className='column has-text-info'>
                    {this.state.hours} {(this.state.hours === 1) ? "hour" : "hours"}
                </span>
                <span className='column has-text-link'>
                    {this.state.minutes} {(this.state.minutes === 1) ? "minute" : "minutes"}
                </span>
                <span className='column has-text-success'>
                    {this.state.seconds} {(this.state.seconds === 1) ? "second" : "seconds"}
                </span>
            </div>
        )
    }
}
