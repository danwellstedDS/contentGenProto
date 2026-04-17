// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import ExternalLinksSVG from '../icons-svg/lib/ExternalLinks'
import Icon, { type BaseIconProps } from '../components'

const ExternalLinks = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={ExternalLinksSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    ExternalLinks.displayName = 'ExternalLinks'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(ExternalLinks)