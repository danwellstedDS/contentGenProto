// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import LangCnFilledSVG from '../icons-svg/lib/LangCnFilled'
import Icon, { type BaseIconProps } from '../components'

const LangCnFilled = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={LangCnFilledSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    LangCnFilled.displayName = 'LangCnFilled'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(LangCnFilled)