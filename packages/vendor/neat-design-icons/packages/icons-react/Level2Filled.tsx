// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import Level2FilledSVG from '../icons-svg/lib/Level2Filled'
import Icon, { type BaseIconProps } from '../components'

const Level2Filled = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={Level2FilledSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    Level2Filled.displayName = 'Level2Filled'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(Level2Filled)