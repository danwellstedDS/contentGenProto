// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import PauseArrowCircleSVG from '../icons-svg/lib/PauseArrowCircle'
import Icon, { type BaseIconProps } from '../components'

const PauseArrowCircle = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={PauseArrowCircleSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    PauseArrowCircle.displayName = 'PauseArrowCircle'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(PauseArrowCircle)