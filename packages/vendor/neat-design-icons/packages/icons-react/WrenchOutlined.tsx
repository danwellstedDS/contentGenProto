// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import WrenchOutlinedSVG from '../icons-svg/lib/WrenchOutlined'
import Icon, { type BaseIconProps } from '../components'

const WrenchOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={WrenchOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    WrenchOutlined.displayName = 'WrenchOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(WrenchOutlined)