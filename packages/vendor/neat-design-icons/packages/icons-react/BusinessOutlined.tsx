// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import BusinessOutlinedSVG from '../icons-svg/lib/BusinessOutlined'
import Icon, { type BaseIconProps } from '../components'

const BusinessOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={BusinessOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    BusinessOutlined.displayName = 'BusinessOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(BusinessOutlined)