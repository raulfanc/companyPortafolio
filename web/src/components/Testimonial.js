// web/src/components/testimonial.js

import React from 'react'
import { Link } from 'gatsby'
import { buildImageObj } from '../lib/helpers'
import { imageUrlFor } from '../lib/image-url'
import BlockContent from './block-content' // Assuming you have block-content.js
import Container from './container'
import styles from './testimonial.module.css'

function Testimonial(props) {
  const { customerName, testimonialText, customerImage } = props

  return (
    <article className={styles.root}>
      {customerImage && customerImage.asset && (
        <div className={styles.mainImage}>
          <img
            src={imageUrlFor(buildImageObj(customerImage))
              .width(600)
              .height(600)
              .fit('crop')
              .url()}
            alt={customerImage.alt || customerName}
          />
        </div>
      )}
      <Container>
        <div className={styles.content}>
          <h2 className={styles.title}>{customerName}</h2>
          {testimonialText && (
            <BlockContent blocks={testimonialText || []} />
          )}
        </div>
      </Container>
    </article>
  )
}

export default Testimonial
