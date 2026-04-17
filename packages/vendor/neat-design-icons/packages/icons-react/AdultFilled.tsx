// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import AdultFilledSVG from '../icons-svg/lib/AdultFilled'
import Icon, { type BaseIconProps } from '../components'

const AdultFilled = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={AdultFilledSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    AdultFilled.displayName = 'AdultFilled'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(AdultFilled)