// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import BaggageFilledSVG from '../icons-svg/lib/BaggageFilled'
import Icon, { type BaseIconProps } from '../components'

const BaggageFilled = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={BaggageFilledSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    BaggageFilled.displayName = 'BaggageFilled'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(BaggageFilled)