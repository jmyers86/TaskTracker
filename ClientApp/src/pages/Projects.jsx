import React from 'react'
import { Menu } from '../components/Menu'
import { Footer } from '../components/Footer'
import { Accordion } from '../components/Accordion'

export function Projects() {
  return (
    <>
      <Menu />
      <fieldset className="projects-accordion">
        <legend>Joe's Projects</legend>
        <Accordion />
      </fieldset>
      <Footer />
    </>
  )
}
