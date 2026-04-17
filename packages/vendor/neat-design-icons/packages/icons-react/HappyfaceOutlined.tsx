// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import HappyfaceOutlinedSVG from '../icons-svg/lib/HappyfaceOutlined'
import Icon, { type BaseIconProps } from '../components'

const HappyfaceOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={HappyfaceOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    HappyfaceOutlined.displayName = 'HappyfaceOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(HappyfaceOutlined)