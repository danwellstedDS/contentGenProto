// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import FaxFilledSVG from '../icons-svg/lib/FaxFilled'
import Icon, { type BaseIconProps } from '../components'

const FaxFilled = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={FaxFilledSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    FaxFilled.displayName = 'FaxFilled'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(FaxFilled)