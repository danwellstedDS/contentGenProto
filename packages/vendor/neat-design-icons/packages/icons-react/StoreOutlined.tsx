// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import StoreOutlinedSVG from '../icons-svg/lib/StoreOutlined'
import Icon, { type BaseIconProps } from '../components'

const StoreOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={StoreOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    StoreOutlined.displayName = 'StoreOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(StoreOutlined)