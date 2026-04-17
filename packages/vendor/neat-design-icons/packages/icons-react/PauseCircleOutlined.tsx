// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import PauseCircleOutlinedSVG from '../icons-svg/lib/PauseCircleOutlined'
import Icon, { type BaseIconProps } from '../components'

const PauseCircleOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={PauseCircleOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    PauseCircleOutlined.displayName = 'PauseCircleOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(PauseCircleOutlined)