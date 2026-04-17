// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import PuzzleOutlinedSVG from '../icons-svg/lib/PuzzleOutlined'
import Icon, { type BaseIconProps } from '../components'

const PuzzleOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={PuzzleOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    PuzzleOutlined.displayName = 'PuzzleOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(PuzzleOutlined)