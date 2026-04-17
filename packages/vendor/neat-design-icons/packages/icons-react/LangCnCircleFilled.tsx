// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import LangCnCircleFilledSVG from '../icons-svg/lib/LangCnCircleFilled'
import Icon, { type BaseIconProps } from '../components'

const LangCnCircleFilled = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={LangCnCircleFilledSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    LangCnCircleFilled.displayName = 'LangCnCircleFilled'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(LangCnCircleFilled)