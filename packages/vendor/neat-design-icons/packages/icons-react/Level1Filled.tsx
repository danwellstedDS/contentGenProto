// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import Level1FilledSVG from '../icons-svg/lib/Level1Filled'
import Icon, { type BaseIconProps } from '../components'

const Level1Filled = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={Level1FilledSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    Level1Filled.displayName = 'Level1Filled'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(Level1Filled)