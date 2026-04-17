// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import PhoneFilledSVG from '../icons-svg/lib/PhoneFilled'
import Icon, { type BaseIconProps } from '../components'

const PhoneFilled = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={PhoneFilledSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    PhoneFilled.displayName = 'PhoneFilled'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(PhoneFilled)