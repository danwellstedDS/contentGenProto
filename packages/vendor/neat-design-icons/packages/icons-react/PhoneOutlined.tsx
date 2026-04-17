// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import PhoneOutlinedSVG from '../icons-svg/lib/PhoneOutlined'
import Icon, { type BaseIconProps } from '../components'

const PhoneOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={PhoneOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    PhoneOutlined.displayName = 'PhoneOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(PhoneOutlined)