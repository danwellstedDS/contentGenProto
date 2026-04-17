// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import BikeChainFilledSVG from '../icons-svg/lib/BikeChainFilled'
import Icon, { type BaseIconProps } from '../components'

const BikeChainFilled = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={BikeChainFilledSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    BikeChainFilled.displayName = 'BikeChainFilled'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(BikeChainFilled)