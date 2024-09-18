// web/src/components/testimonial-preview.js
import { Link } from 'gatsby'
import React from 'react'
import { cn, buildImageObj } from '../lib/helpers'
import { imageUrlFor } from '../lib/image-url'
import BlockText from './block-text'

import styles from './testimonial-preview.module.css'
import { responsiveTitle3 } from './typography.module.css'

function TestimonialPreview(props) {
  return (
    <Link className={styles.root} to={`/testimonial/${props.slug.current}`}>
      <div className={styles.leadMediaThumb}>
        {props.customerImage && props.customerImage.asset && (
          <img
            src={imageUrlFor(buildImageObj(props.customerImage))
              .width(600)
              .height(600)
              .fit('crop')
              .url()}
            alt={props.customerImage.alt || props.customerName}
          />
        )}
      </div>
      <h3 className={cn(responsiveTitle3, styles.title)}>
        {props.customerName}
      </h3>
      {props.testimonialText && (
        <div className={styles.excerpt}>
          <BlockText blocks={props.testimonialText} />
        </div>
      )}
    </Link>
  )
}

export default TestimonialPreview
