// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import PlayCircleFilledSVG from '../icons-svg/lib/PlayCircleFilled'
import Icon, { type BaseIconProps } from '../components'

const PlayCircleFilled = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={PlayCircleFilledSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    PlayCircleFilled.displayName = 'PlayCircleFilled'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(PlayCircleFilled)