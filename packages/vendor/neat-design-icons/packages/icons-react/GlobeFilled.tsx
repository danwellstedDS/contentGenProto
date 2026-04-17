// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import GlobeFilledSVG from '../icons-svg/lib/GlobeFilled'
import Icon, { type BaseIconProps } from '../components'

const GlobeFilled = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={GlobeFilledSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    GlobeFilled.displayName = 'GlobeFilled'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(GlobeFilled)