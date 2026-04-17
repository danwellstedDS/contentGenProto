// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import GalleryViewFilledSVG from '../icons-svg/lib/GalleryViewFilled'
import Icon, { type BaseIconProps } from '../components'

const GalleryViewFilled = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={GalleryViewFilledSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    GalleryViewFilled.displayName = 'GalleryViewFilled'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(GalleryViewFilled)