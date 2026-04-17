// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import AutoOutlinedSVG from '../icons-svg/lib/AutoOutlined'
import Icon, { type BaseIconProps } from '../components'

const AutoOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={AutoOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    AutoOutlined.displayName = 'AutoOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(AutoOutlined)