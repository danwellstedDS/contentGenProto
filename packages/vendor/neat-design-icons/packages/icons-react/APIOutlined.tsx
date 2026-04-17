// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import APIOutlinedSVG from '../icons-svg/lib/APIOutlined'
import Icon, { type BaseIconProps } from '../components'

const APIOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={APIOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    APIOutlined.displayName = 'APIOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(APIOutlined)