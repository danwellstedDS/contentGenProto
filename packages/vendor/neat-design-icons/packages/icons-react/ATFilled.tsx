// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import ATFilledSVG from '../icons-svg/lib/ATFilled'
import Icon, { type BaseIconProps } from '../components'

const ATFilled = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={ATFilledSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    ATFilled.displayName = 'ATFilled'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(ATFilled)