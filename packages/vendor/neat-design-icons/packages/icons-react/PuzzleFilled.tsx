// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import PuzzleFilledSVG from '../icons-svg/lib/PuzzleFilled'
import Icon, { type BaseIconProps } from '../components'

const PuzzleFilled = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={PuzzleFilledSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    PuzzleFilled.displayName = 'PuzzleFilled'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(PuzzleFilled)