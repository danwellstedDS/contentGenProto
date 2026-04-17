// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import HideFilledSVG from '../icons-svg/lib/HideFilled'
import Icon, { type BaseIconProps } from '../components'

const HideFilled = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={HideFilledSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    HideFilled.displayName = 'HideFilled'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(HideFilled)