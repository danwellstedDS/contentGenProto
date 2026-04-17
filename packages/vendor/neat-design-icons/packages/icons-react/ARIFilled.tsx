// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import ARIFilledSVG from '../icons-svg/lib/ARIFilled'
import Icon, { type BaseIconProps } from '../components'

const ARIFilled = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={ARIFilledSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    ARIFilled.displayName = 'ARIFilled'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(ARIFilled)