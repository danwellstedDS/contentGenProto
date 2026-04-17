// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import PlusOutlinedSVG from '../icons-svg/lib/PlusOutlined'
import Icon, { type BaseIconProps } from '../components'

const PlusOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={PlusOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    PlusOutlined.displayName = 'PlusOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(PlusOutlined)