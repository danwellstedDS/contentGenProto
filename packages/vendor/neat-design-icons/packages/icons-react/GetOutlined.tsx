// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import GetOutlinedSVG from '../icons-svg/lib/GetOutlined'
import Icon, { type BaseIconProps } from '../components'

const GetOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={GetOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    GetOutlined.displayName = 'GetOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(GetOutlined)