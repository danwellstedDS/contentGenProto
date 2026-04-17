// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import DragOutlinedSVG from '../icons-svg/lib/DragOutlined'
import Icon, { type BaseIconProps } from '../components'

const DragOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={DragOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    DragOutlined.displayName = 'DragOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(DragOutlined)