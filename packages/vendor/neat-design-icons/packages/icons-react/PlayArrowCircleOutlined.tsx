// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import PlayArrowCircleOutlinedSVG from '../icons-svg/lib/PlayArrowCircleOutlined'
import Icon, { type BaseIconProps } from '../components'

const PlayArrowCircleOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={PlayArrowCircleOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    PlayArrowCircleOutlined.displayName = 'PlayArrowCircleOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(PlayArrowCircleOutlined)