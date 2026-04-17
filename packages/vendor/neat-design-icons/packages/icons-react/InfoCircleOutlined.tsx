// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import InfoCircleOutlinedSVG from '../icons-svg/lib/InfoCircleOutlined'
import Icon, { type BaseIconProps } from '../components'

const InfoCircleOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={InfoCircleOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    InfoCircleOutlined.displayName = 'InfoCircleOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(InfoCircleOutlined)