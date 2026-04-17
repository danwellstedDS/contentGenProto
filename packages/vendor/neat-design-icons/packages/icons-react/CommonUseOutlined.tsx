// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import CommonUseOutlinedSVG from '../icons-svg/lib/CommonUseOutlined'
import Icon, { type BaseIconProps } from '../components'

const CommonUseOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={CommonUseOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    CommonUseOutlined.displayName = 'CommonUseOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(CommonUseOutlined)