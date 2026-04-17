// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import WidgetOutlinedSVG from '../icons-svg/lib/WidgetOutlined'
import Icon, { type BaseIconProps } from '../components'

const WidgetOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={WidgetOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    WidgetOutlined.displayName = 'WidgetOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(WidgetOutlined)