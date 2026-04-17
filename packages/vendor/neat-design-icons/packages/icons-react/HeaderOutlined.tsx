// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import HeaderOutlinedSVG from '../icons-svg/lib/HeaderOutlined'
import Icon, { type BaseIconProps } from '../components'

const HeaderOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={HeaderOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    HeaderOutlined.displayName = 'HeaderOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(HeaderOutlined)