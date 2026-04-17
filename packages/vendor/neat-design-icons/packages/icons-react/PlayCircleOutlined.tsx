// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import PlayCircleOutlinedSVG from '../icons-svg/lib/PlayCircleOutlined'
import Icon, { type BaseIconProps } from '../components'

const PlayCircleOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={PlayCircleOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    PlayCircleOutlined.displayName = 'PlayCircleOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(PlayCircleOutlined)