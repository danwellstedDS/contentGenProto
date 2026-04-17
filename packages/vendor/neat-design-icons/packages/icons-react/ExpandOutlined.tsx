// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import ExpandOutlinedSVG from '../icons-svg/lib/ExpandOutlined'
import Icon, { type BaseIconProps } from '../components'

const ExpandOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={ExpandOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    ExpandOutlined.displayName = 'ExpandOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(ExpandOutlined)