// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import HelpContactFilledSVG from '../icons-svg/lib/HelpContactFilled'
import Icon, { type BaseIconProps } from '../components'

const HelpContactFilled = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={HelpContactFilledSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    HelpContactFilled.displayName = 'HelpContactFilled'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(HelpContactFilled)