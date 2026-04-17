// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import BTFilledSVG from '../icons-svg/lib/BTFilled'
import Icon, { type BaseIconProps } from '../components'

const BTFilled = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={BTFilledSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    BTFilled.displayName = 'BTFilled'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(BTFilled)