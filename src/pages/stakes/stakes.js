import React, { Component } from 'react'
import styles from './stakes.scss'
import '!style-loader!css-loader!rc-slider/assets/index.css'
import Slider/*, { Range }*/ from 'rc-slider'

const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);

import { Pie } from 'react-chartjs-2'

let createPieData = (stakes) => {
  let labels = [];
  let data = [];
  let backgroundColor = [];
  let hoverBackgroundColor = [];


  for(let stake of stakes) {
    labels.push(stake.name)
    data.push(stake.percentage)
    backgroundColor.push('rgba(218, 0, 109, ' + (stake.percentage / 100) + ')')
    hoverBackgroundColor.push('rgba(218, 0, 109, ' + ((stake.percentage + 5) / 100) + ')')
  }

  return {
    labels,
    datasets: [{
      data,
      backgroundColor,
      hoverBackgroundColor
    }]
  }
}

export default class Stakes extends Component {
	static defaultProps = {
    title: '',
		close: ()=>{}
  }

  constructor(props) {
    super(props)

    this.state = {
      stakes: [
        {
          name: 'Stake 1',
          percentage: 45
        },
        {
          name: 'Stake 2',
          percentage: 35
        },
        {
          name: 'Stake 3',
          percentage: 20
        }
      ]
    }
  }

	render() {
    let me = this
		let props = me.props
    let state = me.state

    let componentData = {
      pie: createPieData(state.stakes),
      range: state.stakes.reduce((data, stake)=>{
        data.total += stake.percentage
        data.data.push(data.total)
        return data
      }, {
        data: [],
        total: 0
      })
    }

    componentData.range.data.pop()

		return (
			<div className={styles.stakes}>
        <div className={styles.pieContainer}>
          <Pie data={componentData.pie} width={350} height={275} legend={
            { position: 'bottom' }
          }/>
        </div>
        <div className={styles.sliderContainer}>
			    <Range onChange={(values)=>me.updateFromValues(values)} defaultValue={componentData.range.data} pushable={1} allowCross={false} tipFormatter={(value)=>(value)} />
        </div>
			</div>
		)
	}

  updateFromValues(values) {
    let stakes = this.state.stakes
    let last = 0

    let i
    for(i in values) {
      stakes[i].percentage = values[i] - last
      last = values[i]
    }
    stakes[++i].percentage = 100 - last

    this.setState({ stakes: [...stakes] })
  }
}
