// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import BetaOutlinedSVG from '../icons-svg/lib/BetaOutlined'
import Icon, { type BaseIconProps } from '../components'

const BetaOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={BetaOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    BetaOutlined.displayName = 'BetaOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(BetaOutlined)