
import React, { Component } from 'react'

import ParticleAnimation from 'react-particle-animation'

export class HeroHeader extends Component<{
    className?: string
  }> {
  render () {
    return (
      <ParticleAnimation className={this.props.className} numParticles={150} lineWidth={1.3} color={{ r: 169, g: 169, b: 169, a: 255 }}/>
    )
  }
}