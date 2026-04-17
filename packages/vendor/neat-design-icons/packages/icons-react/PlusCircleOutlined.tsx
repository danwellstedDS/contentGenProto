// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import PlusCircleOutlinedSVG from '../icons-svg/lib/PlusCircleOutlined'
import Icon, { type BaseIconProps } from '../components'

const PlusCircleOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={PlusCircleOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    PlusCircleOutlined.displayName = 'PlusCircleOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(PlusCircleOutlined)