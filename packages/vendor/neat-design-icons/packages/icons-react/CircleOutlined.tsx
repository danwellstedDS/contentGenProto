// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import CircleOutlinedSVG from '../icons-svg/lib/CircleOutlined'
import Icon, { type BaseIconProps } from '../components'

const CircleOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={CircleOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    CircleOutlined.displayName = 'CircleOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(CircleOutlined)