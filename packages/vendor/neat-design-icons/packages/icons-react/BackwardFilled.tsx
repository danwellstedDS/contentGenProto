// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import BackwardFilledSVG from '../icons-svg/lib/BackwardFilled'
import Icon, { type BaseIconProps } from '../components'

const BackwardFilled = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={BackwardFilledSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    BackwardFilled.displayName = 'BackwardFilled'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(BackwardFilled)