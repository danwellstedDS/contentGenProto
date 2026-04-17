// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import BillOutlinedSVG from '../icons-svg/lib/BillOutlined'
import Icon, { type BaseIconProps } from '../components'

const BillOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={BillOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    BillOutlined.displayName = 'BillOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(BillOutlined)