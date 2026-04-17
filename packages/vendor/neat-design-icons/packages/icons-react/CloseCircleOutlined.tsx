// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import CloseCircleOutlinedSVG from '../icons-svg/lib/CloseCircleOutlined'
import Icon, { type BaseIconProps } from '../components'

const CloseCircleOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={CloseCircleOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    CloseCircleOutlined.displayName = 'CloseCircleOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(CloseCircleOutlined)