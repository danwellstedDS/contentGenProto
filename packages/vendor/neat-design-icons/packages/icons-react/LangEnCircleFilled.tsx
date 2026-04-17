// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import LangEnCircleFilledSVG from '../icons-svg/lib/LangEnCircleFilled'
import Icon, { type BaseIconProps } from '../components'

const LangEnCircleFilled = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={LangEnCircleFilledSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    LangEnCircleFilled.displayName = 'LangEnCircleFilled'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(LangEnCircleFilled)