// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import LangEnFilledSVG from '../icons-svg/lib/LangEnFilled'
import Icon, { type BaseIconProps } from '../components'

const LangEnFilled = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={LangEnFilledSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    LangEnFilled.displayName = 'LangEnFilled'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(LangEnFilled)