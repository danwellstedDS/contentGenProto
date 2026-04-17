// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import VoucherFilledSVG from '../icons-svg/lib/VoucherFilled'
import Icon, { type BaseIconProps } from '../components'

const VoucherFilled = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={VoucherFilledSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    VoucherFilled.displayName = 'VoucherFilled'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(VoucherFilled)