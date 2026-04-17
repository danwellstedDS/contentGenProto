// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import Level3FilledSVG from '../icons-svg/lib/Level3Filled'
import Icon, { type BaseIconProps } from '../components'

const Level3Filled = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={Level3FilledSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    Level3Filled.displayName = 'Level3Filled'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(Level3Filled)