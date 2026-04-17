// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import ModifiedFilledSVG from '../icons-svg/lib/ModifiedFilled'
import Icon, { type BaseIconProps } from '../components'

const ModifiedFilled = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={ModifiedFilledSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    ModifiedFilled.displayName = 'ModifiedFilled'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(ModifiedFilled)