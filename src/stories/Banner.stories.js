import React from 'react'
import { Banner } from '..'
import decorator from './decorator'

export default {
  title: 'Banner',
  decorators: [decorator],
  component: Banner,
}

export let basicBanner = () => (
  <Banner>
    Lorem ipsum massa sapien amet, neque hendrerit ultrices.{' '}
    <a href="#">Click here</a> eu velit at consectetur.
  </Banner>
)

export let warningBanner = () => (
  <Banner.Warning>
    Lorem ipsum massa sapien amet, neque hendrerit ultrices.{' '}
    <a href="#">Click here</a> eu velit at consectetur.
  </Banner.Warning>
)

export let errorBanner = () => (
  <Banner.Error>
    Lorem ipsum massa sapien amet, neque hendrerit ultrices.{' '}
    <a href="#">Click here</a> eu velit at consectetur.
  </Banner.Error>
)

export let wrapped = () => (
  <Banner>
    Donec vel lorem pulvinar, rhoncus enim vel, imperdiet ante. Aliquam eu
    bibendum eros. Class aptent taciti sociosqu ad litora torquent per conubia
    nostra, per inceptos himenaeos. Donec maximus diam in leo suscipit sodales.
    Etiam pellentesque ante sit amet tellus iaculis, vel hendrerit nibh tempus.
    Mauris auctor scelerisque erat quis imperdiet. Nulla consequat, velit
    tincidunt accumsan laoreet, metus est euismod libero, eget euismod nisl eros
    eget metus. Phasellus at efficitur quam. Vestibulum commodo fringilla erat,
    at faucibus dui mattis non. Nam lectus erat, hendrerit nec mi vitae,
    sollicitudin hendrerit diam. Pellentesque enim lacus, dictum a semper et,
    tempor ullamcorper lectus.
  </Banner>
)
