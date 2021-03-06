import React from 'react'
import { Banner } from '..'

export default { title: 'Banner', component: Banner }

export let basicBanner = () => (
  <Banner>
    Lorem ipsum massa sapien amet, neque hendrerit ultrices.{' '}
    <a href="#">Click here</a> eu velit at consectetur.
  </Banner>
)

export let warningBanner = () => (
  <Banner warning>
    Lorem ipsum massa sapien amet, neque hendrerit ultrices.{' '}
    <a href="#">Click here</a> eu velit at consectetur.
  </Banner>
)

export let errorBanner = () => (
  <Banner error>
    Lorem ipsum massa sapien amet. <a href="#">Click here</a> eu velit at
    consectetur.
  </Banner>
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
