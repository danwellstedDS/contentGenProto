// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import VoucherOutlinedSVG from '../icons-svg/lib/VoucherOutlined'
import Icon, { type BaseIconProps } from '../components'

const VoucherOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={VoucherOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    VoucherOutlined.displayName = 'VoucherOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(VoucherOutlined)